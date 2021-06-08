## Development

### Tags 

```
npm dist-tag add <pkg>@<version> [<tag>]
npm dist-tag rm <pkg> <tag>
npm dist-tag ls [<pkg>]
```
### Versioning

You can run `npm version` to update `package.json` and create a `git tag` in one go (see https://docs.npmjs.com/cli/version).

```
npm version <SEMVER>
npm version 0.0.1-alpha.0
```


### Publishing


To publish a version of the package that should not be installed by default:

```
npm publish --tag <tag>
```

This way we can easily share some unstable code with others, so they can test it:

```
npm publish --tag dev
```


### Publishing a Pre-release

- Update `package.json`, set version to a pre-release version, e.g. `2.0.0-rc1`, `3.1.5-rc4`, ...
- Publish normally.

### Local Development (when everything fails)

Pack the package, this will create a tarball

```
npm pack | tail -n 1
```

Reference the package on a project

```
yarn add ~path/to/tar.tgz
yarn add infopiphany-infopiphany-ui-0.0.1.tgz
```
