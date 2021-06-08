import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'InfopiphanyUi',
    file: 'dist/infopiphany-ui.min.js',
    format: 'iife',
  },
})

config.plugins.push(terser())

export default config
