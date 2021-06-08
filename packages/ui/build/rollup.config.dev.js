import path from 'path'
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import { string } from 'rollup-plugin-string'
import postcss from 'rollup-plugin-postcss'
import postcssPresetEnv from 'postcss-preset-env'
import commonjs from '@rollup/plugin-commonjs'
import requireContext from 'rollup-plugin-require-context'
import replace from '@rollup/plugin-replace'
import { name, dependencies } from '../package.json'
import autoprefixer from 'autoprefixer'
import glob from 'glob'

const base = path.resolve(__dirname, '..')
const src = path.resolve(base)
const dist = path.resolve(base, 'esm')
console.log(path.resolve(base, 'node_modules'))
console.log(path.resolve(src, 'node_modules'))

const externals = ['vue', ...Object.keys(dependencies)]

/**
 * Returns true if an import is not considered for inlining into the current file.
 */
const isExternalModule = (moduleId) => {
  if (
    /*
    SCSS files are considered to be included, because they will be extracted
    later with the help of rollup-plugin-postcss
     */
    moduleId.endsWith('.scss') ||
    /**
     * We want to inline markdown in our documentation, in order to be able to
     * use it directly in Vuepress
     */
    moduleId.endsWith('.md') ||
    moduleId.includes('?rollup-plugin-vue=')
  ) {
    return false
  }

  /**
   * Everything else is an "external module", this means we do not roll up external
   * dependencies (bootstrap-vue / lodash / ...) or internal imports (e.g. ./button)
   *
   * This allows us to make @infopiphany/ui treeshakeable.
   */
  return true
}

const fixImports = (code) => {
  return (
    code
      /**
       * Remove `.vue` from imports, as we are compiling them to JS (we turn `.vue` to pure JS files)
       *
       * from './components/base/icon/icon.vue';
       * =>
       * from './components/base/icon/icon';
       */
      .replace(/(from\s+(["']).+?)\.vue(\2)/g, '$1$3')
      /**
       * Replace direct imports from bootstrap-vue/src with bootstrap-vue/esm,
       * as it is a pre-compiled and tree treeshakeable
       *
       * from 'bootstrap-vue/src';
       * =>
       * from 'bootstrap-vue/esm/';
       */
      .replace(/(from\s+["'])bootstrap-vue\/src\//g, '$1bootstrap-vue/esm/')
      /**
       * Replace direct imports from bootstrap-vue with bootstrap-vue/esm
       *
       * from 'bootstrap-vue';
       * =>
       * from 'bootstrap-vue/esm/index.js';
       */
      .replace(
        /(from\s+(["']))bootstrap-vue(\2)/g,
        '$1bootstrap-vue/esm/index.js$3'
      )
  )
}

const baseConfig = (input) => {
  return {
    input,
    external: isExternalModule,
    plugins: [
      replace({
        delimiters: ['/* ', ' */'],
        include: 'index.js',
        values: {
          'auto-inject-styles': "import './scss/infopiphany.scss';",
        },
      }),
      string({
        include: '**/*.md',
      }),
      vue({
        style: {
          postcssPlugins: [autoprefixer],
        },
        normalizer: '~vue-runtime-helpers/dist/normalize-component.js',
      }),
      postcss({
        extract: path.resolve(dist, 'infopiphany-ui.css'),
        minimize: true,
        use: [['sass', { includePaths: [path.resolve(base, 'node_modules')] }]],
      }),
      babel({
        exclude: ['node_modules/!(bootstrap-vue)/**'],
        runtimeHelpers: true,
      }),

      resolve({ external: ['vue'], jsnext: true, main: true, browser: true }),
      commonjs(),
      requireContext(),
      {
        name: 'fix-imports',
        generateBundle(options, bundle) {
          Object.keys(bundle).forEach((key) => {
            if (bundle[key].code) {
              // eslint-disable-next-line no-param-reassign
              bundle[key].code = fixImports(bundle[key].code)
            }
          })
        },
      },
    ],
  }
}

const umdBrowserBuild = {
  // UMD Browser Build
  ...baseConfig,
  output: {
    format: 'umd',
    name: 'infopiphany-ui',
    file: path.resolve(dist, `infopiphany-ui.js`),
    sourcemap: true,
    globals: {
      vue: 'Vue',
      Pikaday: 'Pikaday',
      moment: 'moment',
    },
  },
}

const cjsBrowserBuild = {
  // CJS Module Build
  ...baseConfig,
  output: {
    format: 'cjs',
    name: 'InfopiphanyUi',
    file: path.resolve(dist, `infopiphany-ui.common.js`),
    sourcemap: true,
    // Disable warning about mixed named/default exports
    // We we have handled this in the index file
    exports: 'named',
  },
}

const esmModuleBundleBuild = (input, outputFilename) => {
  // ESM Module Bundle Build
  return {
    ...baseConfig(input),
    output: {
      format: 'esm',
      file: path.resolve(dist, `${outputFilename}.js`),
    },
  }
}

const utilities = glob.sync('utils/*.js');
const layouts = glob.sync('layout/**/!(*.stories|*.spec).+(js|vue)');
export default glob
  /**
   * Pull every .vue and .js files on `components` directory
   * and do not include .stories and .spec files
   */
  .sync('components/**/!(*.stories|*.spec).+(js|vue)')
  .concat(utilities)
  .concat(layouts)
  .concat('index.js')
  .map((input) => {
    const outputFilename = input.replace(/\.(vue|js)$/, '')

    return esmModuleBundleBuild(input, outputFilename)
  })
