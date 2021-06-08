# Getting Started

> TODO: Add tiptap

## Infopiphany UI
### Configure your `.npmrc`

On your development machine, you will also have a `.npmrc` in `$HOME` for Linux or Mac systems or `$env.HOME` or `%USERPROFILE%\.npmrc` for Windows systems. This `.npmrc` should contain credentials for all of the registries that you need to connect to. The NPM client will look at your project's `.npmrc`, discover the registry, and fetch matching credentials from `$HOME/.npmrc` or `$env.HOME/.npmrc`. Credential acquisition will be discussed in the next section.


Update or create the `.npmrc` file and add the following on your `.npmrc` file

```
@infopiphany:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/projects/13732502/packages/npm/:_authToken=$ACCESS_TOKEN
```

### Credential acquisition

1. Generate your credential using the button below.

<ClientOnly><gl-tokenizer /></ClientOnly>

2. Update your `.npmrc` file and add the generated token.

Example:

```diff
@infopiphany:registry=https://gitlab.com/api/v4/packages/npm/
- //gitlab.com/api/v4/projects/13732502/packages/npm/:_authToken=$ACCESS_TOKEN
+ //gitlab.com/api/v4/projects/13732502/packages/npm/:_authToken=xo92i84pffoxx31mz0
```

### Installation

**npm**

```
npm i @infopiphany/ui
```

**yarn 1 (Recommended)***

```
yarn add @infopiphany/ui
```


> **Note:** Make sure to also install Infopiphany UI's peer dependencies.
>
> Refer to the [`package.json`](./package.json) for the list of peer dependencies and their expected versions.

<InfopiphanyUIPeerDeps/>

Import the components as desired:

```javascript
import { IpyInput, IpyTreeSelect } from '@infopiphany/ui'
```

### Quick Start

To include Infopiphany UI base styles in your project, simple import the `@infopiphany/ui` main css file:

```css
@import '@infopiphany/ui/dist/infopiphany-ui.css';
```

#### Usage with a SCSS preprocessor

If you use a SCSS preprocessor, you may include the base SCSS file instead of `index.css`:

```scss
@import '@infopiphany/ui/src/scss/infopiphany.scss';
```

Some component requires their stylesheet to be imported individualy because they are not inlined on their component:

```scss
@import '~@infopiphany/ui/components/datepicker/datepicker.scss';
@import '~@infopiphany/ui/components/treeselect/treeselect.scss';
```

List of components that requires stylesheet to be imported indivdualy:

- Datepicker
- Treeselect
