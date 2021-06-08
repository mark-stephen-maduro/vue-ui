import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

const registerPlugins = (requirePlugin) => {
  requirePlugin.keys().forEach((fileName) => {
    const pluginConfig = requirePlugin(fileName);
    // Globally register the component
    (pluginConfig.default || pluginConfig)(Vue);
  });
}

registerPlugins(require.context(
  // Look for files in the current directory
  '.',
  // Do not look in subdirectories
  false,
  // Include all .js files and exclude .js files that have "_plugins" prefix
  /^(?!_plugins)[\w-]+\.js$/
))
