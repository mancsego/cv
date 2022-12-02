module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    project: ['tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
