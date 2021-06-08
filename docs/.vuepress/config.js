const path = require('path')
const fs = require('fs')

const { description } = require('../../package.json')
const useMarkdownItVueExample = require('./utils/use-markdown-it-vue-example')
const webpack = require('webpack')
module.exports = {
  base: process.env.VUE_APP_BASE_URL || '/',
  title: 'Infopiphany Design System',
  description: description,
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack,
    },
    plugins: [
      // new webpack.ProvidePlugin({
      //   'window.Pikaday': 'pikaday'
      // }),

    ],
  },
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    // ['script', { src: 'redirect.js' }]
  ],

  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Components',
        link: '/components/getting-started',
      },
      {
        text: 'CSS',
        link: '/css/',
      },
      {
        text: 'Design',
        link: '/design/',
      },
    ],
    sidebar: {
      '/components/': [
        ['getting-started.md', 'Getting Started'],
        {
          title: 'Components',
          collapsable: false,
          children: [
            ...getMarkdownFiles('/components/', {
              filter: excludeMarkdown(['getting-started.md']),
            }),
          ],
        },
        {
          title: 'Layout',
          collapsable: false,
          children: [...getMarkdownFiles('/components/layout')]
        }
      ],
      '/css/': ['/css/'],
      '/design/': [
        {
          title: 'Design',
          collapsable: false,
          children: [...getMarkdownFiles('/design/')],
        },
      ],
    },
  },
  plugins: [],
  markdown: {
    extendMarkdown: (md) => {
      useMarkdownItVueExample(md)
    },
  },
}

function getBootstrapComponentDoc() {
  const p = 'node_modules/bootstrap-vue/src/components'
  const docRoot = path.join(path.resolve(__dirname, '../'), p)

  let dir = fs.readdirSync(docRoot)
  return dir.map((componentFolder) => {
    return path.join(p, componentFolder)
  })
}

function ignoreReadme(e) {
  return 'README.MD' !== e.toUpperCase() && e.lastIndexOf('.md') !== -1
}

//
function excludeMarkdown(names) {
  const arr = names.map((n) => n.toUpperCase())
  return (e) =>
    !arr.includes(e.toUpperCase()) &&
    e.lastIndexOf('.md') !== -1 &&
    ignoreReadme(e)
}

/**
 * Returns the markdown files and does not include README.md
 * @param {String} p Vuepress children path
 */
function getMarkdownFiles(
  p,
  config = { usePosix: true, includePath: true, filter: ignoreReadme }
) {
  // use `path.posix` if you are developing on Windows ecosystem.
  const _path = config.usePosix ? path.posix : path.win32

  // HACK: move outsude .vuepress folder.
  const docRoot = path.join(path.resolve(__dirname, '../'), p)

  let dir = fs.readdirSync(docRoot)

  return dir.filter(config.filter).map((mdFile) => {
    const mdIndex = mdFile.lastIndexOf('.md')
    return config.includePath
      ? _path.join(p, mdFile.substr(0, mdIndex))
      : mdFile.substr(0, mdIndex)
  })
}
