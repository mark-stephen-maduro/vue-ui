const prettier = require('prettier/standalone')
const prettierParserBabylon = require('prettier/parser-babel')

module.exports = function prettifyJs(code) {
  return prettier.format(code, {
    parser: 'babel',
    plugins: [prettierParserBabylon],
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
    proseWrap: 'never',
  })
}
