// https://eslint.org/docs/user-guide/configuring

module.exports = {
  'root': true,
//  "parser": "babel-eslint",
  'parserOptions': {
    // 'ecmaVersion': 8,
    // 'sourceType':'module',
    // 'ecmaFeatures': {
    //   'experimentalObjectRestSpread': true
    // },
    'parser': 'babel-eslint',
    "sourceType": "module"
  },
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
    'mocha': true
  },
  'extends': [
    //'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    //'standard'
  ],
  // required to lint *.vue files
  'plugins': [
    'vue',
    //'html'
  ],
  // add your custom rules here
  'rules': {
    'no-console':'warn',
    'indent': ['error', 4, {'SwitchCase': 1 }],
    'quotes': ['error','single'],
    'semi': ['error','always'],
    'space-in-parens': ['error'],
    'space-infix-ops':'error',
    'object-curly-spacing': ['error','always'],
    'comma-spacing':'error',
    'space-before-function-paren': ['error','never'],
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true,
        'overrides': {
          'do': {'after': false },
          'for': {'after': false },
          'if': {'after': false },
          'switch': {'after': false },
          'while': {'after': false },
          'catch': {'after': false }
        }
      }
    ],
    'array-bracket-spacing':'error'
  }
}
