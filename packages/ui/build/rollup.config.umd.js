import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'infopiphany-ui',
    file: 'dist/infopiphany-ui.umd.js',
    format: 'umd',
  },
})

export default config
