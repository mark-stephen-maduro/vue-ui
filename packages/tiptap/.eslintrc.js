module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard",
    // https://github.com/prettier/eslint-config-prettier
    'prettier',
    'prettier/standard',
    'prettier/vue',
  ],
  "rules": {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "comma-dangle": ["error", "only-multiline"],
    "semi": ["error", "always"],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": {
        "var": 2,
        "let": 2,
        "const": 3
      }
    }],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "no-multi-spaces": ["error", {
      "exceptions": {
        "VariableDeclarator": true
      }
    }],
    "space-before-function-paren": ["error", "always"],
    "no-unused-vars": "off",
    "camelcase": "off",
  },
}
