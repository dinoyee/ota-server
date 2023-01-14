module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  globals: {
    LogI: 'readonly',
    LogD: 'readonly',
    LogE: 'readonly',
    Env: 'readonly',
  },
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
  },
};
