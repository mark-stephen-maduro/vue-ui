const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const request = require('request-promise-native')
const semver = require('semver')
const globby = require('globby')
const { execSync } = require('child_process')
const inquirer = require('inquirer')
const readline = require('readline')

const localPackageRE = /'(@infopiphany\/(?:ui|tiptap|apps-global-menu)[\w-]+)': '\^([\w-.]+)'/g
const versionCache = {}
const registry = 'https://gitlab.com/api/v4/projects/13732502/packages/npm/'

const getRemoteVersion = async (pkg) => {
  if (versionCache[pkg]) {
    return versionCache[pkg]
  }
  let res
  try {
    res = await request(`${registry}/${pkg}/latest`, {
      json: true
    })
  } catch (e) {
    return
  }
  versionCache[pkg] = res.version
  return res.version
}
const getRemoteVersionSync = (pkg) => {
  if (versionCache[pkg]) {
    return versionCache[pkg]
  }
  const version = execSync(`npm view ${pkg} version`).toString().trim()
  versionCache[pkg] = version
  return version
}
const checkUpdate = (pkg, filePath, local, remote) => {
  if (remote !== local) {
    const isNewer = semver.gt(remote, local)
    if (!isNewer) {
      return false
    }
    const maybeBreaking = !semver.intersects(`^${local}`, `^${remote}`)
    console.log(genUpdateString(pkg, filePath, local, remote, maybeBreaking))
    return true
  }
}
const checkUpdateAsync = async (pkg, filePath, local, remote) => {
  if (remote !== local) {
    const isNewer = semver.gt(remote, local)
    if (!isNewer) {
      return false
    }
    const maybeBreaking = !semver.intersects(`^${local}`, `^${remote}`)
    if (!maybeBreaking) {
      return true
    }
    const { shouldUpdate } = await inquirer.prompt([
      {
        name: 'shouldUpdate',
        type: 'confirm',
        message:
          genUpdateString(pkg, filePath, local, remote, maybeBreaking) +
          `\n` +
          `Update this dependency?`
      }
    ])
    return shouldUpdate
  }
}
function genUpdateString(pkg, filePath, local, remote, maybeBreaking) {
  return (
    `${chalk.cyan(pkg)}: ${local} => ${remote} ` +
    (maybeBreaking ? chalk.red.bold(`maybe breaking `) : ``) +
    chalk.gray(`(${path.relative(process.cwd(), filePath)})`)
  )
}

const writeCache = {}
const bufferWrite = (file, content) => {
  writeCache[file] = content
}
const flushWrite = () => {
  for (const file in writeCache) {
    fs.writeFileSync(file, writeCache[file])
  }
}

async function syncDeps({ local, version, skipPrompt }) {
  // 1. update all package deps
  const updatedDeps = new Set()

  if (!local) {
    console.log('Syncing remote deps...')
    const packages = await globby(['packages/@infopiphany/*/package.json'])
    const resolvedPackages = (
      await Promise.all(
        packages
          .filter((filePath) => {
            return filePath.match(
              /tiptap|ui|apps-global-menu/
            )
          })
          .concat('package.json')
          .map(async (filePath) => {
            const pkg = require(path.resolve(__dirname, '../', filePath))
            if (!pkg.dependencies) {
              return
            }
            const deps = pkg.dependencies
            const resolvedDeps = []
            for (const dep in deps) {
              if (dep.match(/^@infopiphany/)) {
                continue
              }
              let local = deps[dep]
              if (local.charAt(0) !== '^') {
                continue
              }
              local = local.replace(/^\^/, '')
              readline.clearLine(process.stdout)
              readline.cursorTo(process.stdout, 0)
              process.stdout.write(dep)
              const remote = await getRemoteVersion(dep)
              resolvedDeps.push({
                dep,
                local,
                remote
              })
            }
            return {
              pkg,
              filePath,
              resolvedDeps
            }
          })
      )
    ).filter((_) => _)

    for (const { pkg, filePath, resolvedDeps } of resolvedPackages) {
      let isUpdated = false
      for (const { dep, local, remote } of resolvedDeps) {
        if (remote && (await checkUpdateAsync(dep, filePath, local, remote))) {
          pkg.dependencies[dep] = `^${remote}`
          updatedDeps.add(dep)
          isUpdated = true
        }
      }
      if (isUpdated) {
        bufferWrite(filePath, JSON.stringify(pkg, null, 2) + '\n')
      }
    }
  }

  console.log('Syncing local deps...')
  const updatedRE = new RegExp(
    `'(${Array.from(updatedDeps).join('|')})': '\\^(\\d+\\.\\d+\\.\\d+[^']*)'`
  )
  const paths = await globby(['packages/@infopiphany/**/*.js'])
  paths
    .filter((p) => !/\/files\//.test(p) && !/\/node_modules/.test(p))
    .forEach((filePath) => {
      let isUpdated = false
      const makeReplacer = (versionGetter) => (_, pkg, curVersion) => {
        const targetVersion = versionGetter(pkg)
        if (!targetVersion) {
          return _
        }
        if (checkUpdate(pkg, filePath, curVersion, targetVersion)) {
          isUpdated = true
        }
        return `'${pkg}': '^${targetVersion}'`
      }

      const localReplacer = makeReplacer((pkg) => {
        try {
          if (
            !semver.prerelease(version) &&
            pkg.includes('@infopiphany/ui')
          ) {
            return `${semver.major(version)}.${semver.minor(version)}.0`
          }

          // otherwise, inline version takes priority
          return version || require(`../packages/${pkg}/package.json`).version
        } catch (e) {}
      })

      const remoteReplacer = makeReplacer(getRemoteVersionSync)

      const updated = fs
        .readFileSync(filePath, 'utf-8')
        // update @vue packages in this repo
        .replace(localPackageRE, localReplacer)
        // also update vue, vue-template-compiler, vuex, vue-router
        .replace(updatedRE, remoteReplacer)

      if (isUpdated) {
        bufferWrite(filePath, updated)
      }
    })

  if (!Object.keys(writeCache).length) {
    return console.log(`All packages up-to-date.`)
  }

  if (skipPrompt) {
    flushWrite()
    return
  }

  const { yes } = await inquirer.prompt([
    {
      name: 'yes',
      type: 'confirm',
      message: 'Commit above updates?'
    }
  ])

  if (yes) {
    flushWrite()
  }
}

exports.syncDeps = syncDeps

if (!process.env.VUE_CLI_RELEASE) {
  const args = require('minimist')(process.argv.slice(2))
  syncDeps(args).catch((err) => {
    console.log(err)
    process.exit(1)
  })
}
