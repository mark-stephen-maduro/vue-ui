# Contributing

## Development Setup

This project uses a monorepo setup that requires using [Yarn 1](https://yarnpkg.com/) because it relies on [Yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/).

### Developing a Component

1. Decide on a component you'd like to add to infopiphany-ui
1. If it the component can work as a standalone package, consider not to include it on the `infopiphany-ui` package.
1. Determine and document the scenarios (different types of implementations, if any) in which this component is used.
1. Select a scenario that is implemented in any existing project/product that you will replace with your component.
1. Create a merge request (MR) in infopiphany-ui implementing your new component.

   1. Be sure to name your MR `feat: <commit message>` (don't forget to set the MR to squash commit)
   1. Play and write your component in the [design-system-vuejs repository](https://gitlab.com/infopiphany/design-system-vuejs)

### Development with UI framework

> TODO: discuss why someone would like to do this kind of setup

This uses [yarn workspace](https://yarnpkg.com/lang/en/docs/workspaces/) and you should setup it manually by following the steps below:

1. Setup the following directory stucture:

   ```
   your-awesome-project-workspace/
   ├── package.json
   ├── your-awesome-project/
   │   └── package.json
   ├── infopiphany-ui/
   │   ├── scss/
   │   └── package.json
   ```

1. Create a `package.json` in the `your-awesome-project-workspace` folder.
1. Clone the [`@infopiphany/infopiphany-ui` repository](https://gitlab.com/infopiphany/infopiphany-ui.git)
1. Clone your awesome project.
1. Checkout to each repo's specific branch if required.
1. Edit the `package.json` located in the `your-awesome-project-workspace` folder and add the following:

   ```json
   {
     "private": true,
     "workspaces": ["infopiphany-ui", "your-awesome-project"]
   }
   ```

   The `workspaces` field is an array containing the paths to each workspace.

1. Finally, run yarn install inside the workspace root.

## Documentation

### Writing component documentation

1. Create or find a topic of choice you want to document.

   - Component documentation, UI Guidelines, Component examples.
   - **Component Documentation**: Create a new file in `components/` and name it after the UI component you are documenting. (e.g. `dropdown.md`)
   - **UI Guidelines**: Feel free to group related topics.
   - **Component Examples**: add examples in `.vue` file inside the `.vuepress/examples`. See [component-live-previews](#vue-component-live-preview)

1. Modify the `themeConfig.sidebar` configuration in `./vuepress/config.js` to add your file in the sidebar.

1. Edit and write your documentation

To run the documentation dev server, simply use `yarn docs`.

```shell
yarn docs
```

The command will start the Vuepress dev server, serving the `docs/` directory.

### Vue Component Live Preview

All examples are in `.vue` files, inside the `.vuepress/examples` directory. These examples can be referenced from documentation with:

```md
@[example](name-of-example-file)
```

By default, this will render:

- An HTML block (if a `template` is provided)
- A JS block (if a `script` is provided)
- A CSS block (if a `style` is provided)
- A live component preview

The example rendering is even configurable, e.g.:

```md
<!-- Only render the JS block -->

@[example](name-of-example-file, js-only)
```

```md
<!-- Don't render the JS block or result -->

@[example](name-of-example-file, result-disabled js-disabled)
```

This 2nd argument is actually a list of props. For complete full list of available props, see the `vue-example-simple.vue` component.
