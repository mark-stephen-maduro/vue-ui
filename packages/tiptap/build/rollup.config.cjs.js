import path from 'path';
import base from './rollup.config.base'
import { terser } from 'rollup-plugin-terser'

const libDir = path.resolve(__dirname, '..', 'dist');

const config = Object.assign({}, base, {
  output: {
    file: path.resolve(libDir, 'infopiphany-tiptap.common.js'),
    format: 'cjs',
  },
})

config.plugins.push(terser())

export default config
