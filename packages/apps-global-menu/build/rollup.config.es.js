import path from 'path'
import { name, dependencies } from '../package.json'

import vuePlugin from 'rollup-plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import requireContext from 'rollup-plugin-require-context'

const base = path.resolve(__dirname, '..')
const src = path.resolve(base, 'src')
const dist = path.resolve(base, 'esm')

const PATHS = {
  DIST: dist,
  INPUT: path.resolve(src, 'index.js'),
}

// Converts strings into camelCase
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) {
            return ''
        }
        return index == 0 ? match.toLowerCase() : match.toUpperCase()
    })
}

export default {
  input: PATHS.INPUT,
  plugins: [
    vuePlugin({
      // compileTemplate: true,
      style: {
        postcssPlugins: [autoprefixer],
      },
      normalizer: '~vue-runtime-helpers/dist/normalize-component.js',
    }),
    postcss({
      extract: path.resolve(dist, 'apps-global-menu.css'),
      minimize: true,
      use: [['sass', { includePaths: [path.resolve(base, 'node_modules')] }]],
    }),
    nodeResolve({ external: ['vue'] }),
    commonjs(),
    requireContext(),

  ],
  output: [
    {
      format: 'esm',
      name: camelize(name),
      file: path.resolve(PATHS.DIST, name + '.esm.js'),
      sourcemap: true
    }
  ]
}
