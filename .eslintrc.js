module.exports = {
    root: true,
    env: {
      node: true
    },
    'extends': [
      'plugin:vue/essential',
      '@vue/standard'
    ],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-return-assign': ["error", "always"],
      'no-extra-parens': ["error", "all", { "returnAssign": false }]
    },
    parserOptions: {
      parser: 'babel-eslint'
    }
  }
  
