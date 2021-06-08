// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
const registerVueComponents = (requireComponent) => {
  requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    // Get the PascalCase version of the component name
    const componentName = upperFirst(
      // Remove the "./_" from the beginning (if any)
      // Remove the file extension from the end
      camelCase(fileName.replace(/^\.\/_/, '').replace(/\.\w+$/, ''))
    );
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig);
  });
};

// https://webpack.js.org/guides/dependency-management/#require-context
// https://github.com/webpack/webpack/issues/4772#issuecomment-358573955
// `require.context`'s arguments must be static and not be variables.
registerVueComponents(
  require.context(
    // Look for files in the current directory
    '.',
    // Do not look in subdirectories
    false,
    // Only include "_base-" prefixed .vue files
    /_base-[\w-]+\.vue$/
  )
);
