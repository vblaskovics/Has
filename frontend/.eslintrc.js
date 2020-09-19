module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  rules: {
    'react/state-in-constructor': 'off',
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
}
