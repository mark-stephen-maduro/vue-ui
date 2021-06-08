import path from 'path';
import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'
import cjs from 'rollup-plugin-commonjs'
import node from '@rollup/plugin-node-resolve';
import { string } from 'rollup-plugin-string'
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import alias from '@rollup/plugin-alias';
import postcssPresetEnv from 'postcss-preset-env';


const { dependencies } = require('../package.json')

const base = path.resolve(__dirname, '..')
const src = path.resolve(base, 'src');
const dist = path.resolve(base, 'dist');

const external = ['vue', ...Object.keys(dependencies)];

export default {
  input: path.resolve(base, 'index.js'),
  output: {
    name: 'InfopiphanyTiptap',
    exports: 'named',
    globals: {
      vue: 'Vue',
      // TODO: tiptap
    },
  },
  external: [
    'vue',
    // 'tiptap',
    // 'tiptap-extensions',
    'prosemirror-utils',
    'prosemirror-state',
    'prosemirror-model',
    'prosemirror-tables',
    '@infopiphany/ui',
    "@fortawesome/fontawesome-svg-core",
    "@fortawesome/free-regular-svg-icons",
    "@fortawesome/free-solid-svg-icons",
    "@fortawesome/vue-fontawesome"
  ],
  plugins: [
    resolve({
      // jsnext: true,
      // main: true,
      extensions: ['.js', '.vue'],
      // browser: true,
    }),
    replace({
      // VERSION: JSON.stringify(config.version),
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    alias({
      entries: {
        '@': src,
      },
    }),
    node({
      extensions: ['.ts', '.js', '.vue'],
    }),
    cjs({
      extensions: ['.ts', '.js'],
    }),
    postcss({
      extract: path.resolve(dist, 'index.css'),
      minimize: true,
      plugins: [
        postcssPresetEnv()
      ]
    }),
    vue({
      defaultLang: {
        style: 'scss',
      },
      css: true,
    }),

    string({
      include: '**/*.svg',
    }),

    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.ts'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'usage',
            corejs: 3,
          },
        ],
      ],
      // plugins: [
      //   [
      //     'component',
      //     {
      //       libraryName: 'element-ui',
      //       style: false,
      //     }
      //   ],
      // ],
    })
  ]
}
