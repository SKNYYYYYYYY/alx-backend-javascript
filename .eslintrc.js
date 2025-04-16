module.exports = {
	env: {
	  browser: false,
	  es6: true,
	  jest: true,
	},
	ignorePatterns: ['README.md', '*main*.js'],
	extends: [
	  'airbnb-base',
	  'plugin:jest/all',
	],
	globals: {
	  Atomics: 'readonly',
	  SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
	  ecmaVersion: 2018,
	  sourceType: 'module',
	},
	plugins: ['jest'],
	rules: {
		'import/extensions': ['error', 'ignorePackages', {
			js: 'never'
			}],
	  'no-console': 'off',
	  'no-shadow': 'off',
	  'no-restricted-syntax': [
		'error',
		'LabeledStatement',
		'WithStatement',
	  ],
	},
	overrides:[
	  {
		files: ['*.js'],
		excludedFiles: 'babel.config.js',
	  }
	]
  };