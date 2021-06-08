# infopiphany-ui

[![version](https://img.shields.io/badge/npm-0.0.5.dev.2-blue)](http://188.166.208.149:4873/#/detail/@infopiphany/infopiphany-ui)

> NOTE: The overall process, information, URL, names might change in the future.

- Current Status: -
- Alpha Documentation: https://infopiphany.gitlab.io/design-system/components/
- Design System : https://gitlab.com/infopiphany/design-system

## Contributing

See the [Conventional Commits](https://conventionalcommits.org/) spec and [Commit Convention](https://infopiphany.gitlab.io/development-guide/general/COMMIT_CONVENTION.html) for commit guidelines. This is very important, as the `CHANGELOG` is generated from these messages.

Examples:

- `fix(b-modal): fixes some broken modal stuff`
- `feat(b-table): add a feature to the table component`

## Prerequisites

This library uses `bootstra-vue` internally, you need first to setup `bootstrap-vue`. Please refer to the [bootstrap-vue documentation](https://bootstrap-vue.js.org/docs/#getting-started)

- bootstrap-vue
  - bootstrap
  - portal-vue
- pikaday
- moment

## Usage and Installation

Login to the registry, this command will promt for username, password and email.\
Use your company email address when prompted for an email

```
npm login --scope=@infopiphany --registry http://188.166.208.149:4873
```

Install the package using `yarn` or `npm`

> Topics beyond this part might be outdated

#### Installing Alpha/Beta Version

```sh
# using npm
npm install --save @infopiphany/infopiphany-ui@dev
# using yarn
yarn add @infopiphany/infopiphany-ui@dev
```

#### Installing Release Candiate and latest version

```sh
# using npm
npm install --save @infopiphany/infopiphany-ui@latest
# using yarn
yarn add @infopiphany/infopiphany-ui@latest
```

### Using in Vue CLI 3

Install required packages:

- Bootstrap v4.3.1 +
- bootstrap-vue v2.0.0+
- pikaday
- moment

```
yarn add bootstrap bootstrap-vue pikaday moment
```

Assuming that you already have registered BootstrapVue in your VueJS project.

#### Option A

```js
// File: main.js (example only)

// Import bootstrap-vue scss
import 'bootstrap-vue/src/index';
// Import infopiphany-ui scss
// This will also include bootstrap and it's variables.
import '@infopiphany/infopiphany-ui/scss/infopiphany.scss';

// Optionally, Import Infopiphany Vue components
import { InfopiphanyBreadcrumb } from '@infopiphany/infopiphany-ui';

Vue.component('InfopiphanyBreadcrumb', InfopiphanyBreadcrumb);
```

#### Option B

On an SCSS file, import bootstrap and bootstrap-vue scss

**bs-vue-vendor.scss**

```scss
@import '~@infopiphany/infopiphany-ui/scss/infopiphany';
@import '~bootstrap/scss/bootstrap';
@import '~bootstrap-vue/src/index.scss';
@import '~@infopiphany/infopiphany-ui/scss/infopiphany-components';
```

**main.js**

```js
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import './path/to/bs-vue-vendor.scss';
Vue.use(BootstrapVue);
```

## Versioning

The project uses [Semantic Versioning](https://semver.org/)

- https://docs.npmjs.com/misc/semver#prerelease-tags
- https://docs.npmjs.com/about-semantic-versioning

### Reference

- https://gitlab.com/gitlab-org/gitlab-ui/tree/master/src/scss
- https://github.com/twbs/bootstrap/tree/master/scss
