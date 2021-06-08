import path from 'path'
import fs from 'fs'
import { dependencies, version } from '../package.json'

import cleanCSS from 'clean-css'
import babel from 'rollup-plugin-babel'
import { string } from 'rollup-plugin-string'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import resolve from '@rollup/plugin-node-resolve'
import requireContext from 'rollup-plugin-require-context'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import autoprefixer from 'autoprefixer'

const name = "infopiphany-ui"
const base = path.resolve(__dirname, '..')
const src = path.resolve(base)
const dist = path.resolve(base, 'dist')
const PATHS = {
  DIST: dist,
  INPUT: path.resolve(base, 'index.js'),
}

import globEsm from './rollup.config.dev';
// Converts strings into camelCase
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) {
            return ''
        }
        return index == 0 ? match.toLowerCase() : match.toUpperCase()
    })
}

const year = new Date().getFullYear()
const banner = `/*
* @infopiphany/ui ${version}
* Based on: BootstrapVue ${dependencies["bootstrap-vue"]} (https://bootstrap-vue.org/)
* Copyright 2019-${year} Infopiphany IT Solutions
*/`

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

export default {
    input: PATHS.INPUT,
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
    output: [
        {
            banner,
            format: 'cjs',
            name: camelize(name),
            file: path.resolve(PATHS.DIST, name + '.common.js'),
            sourcemap: true
        },
        {
            banner,
            format: 'umd',
            name: camelize(name),
            modulename: camelize(name),
            file: path.resolve(PATHS.DIST, name + '.umd.js'),
            sourcemap: true
        },
        {
            banner,
            format: 'es',
            name: camelize(name),
            modulename: camelize(name),
            file: path.resolve(PATHS.DIST, name + '.esm.js'),
            sourcemap: true
        }
    ]
}
