module.exports = {
  env: {
    node: true,
    browser: true,
    'jest/globals': true
  },
  extends: [
    'standard'
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
