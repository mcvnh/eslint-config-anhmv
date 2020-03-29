module.exports = {
  extends: 'eslint:recommended',
  rules: {
    // https://eslint.org/docs/rules/max-len
    'max-len': [
      'error',
      {
        'code': 120, // maximum line length should be 120
        'tabWidth': 2,
        'ignoreComments': false,
        'ignoreTrailingComments': false,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      }
    ],

    // https://eslint.org/docs/rules/brace-style
    'brace-style': [
      'error',
      '1tbs'
    ],

    // https://eslint.org/docs/rules/comma-style
    'comma-style': [
      'error',
      'last'
    ],

    // https://eslint.org/docs/rules/comma-dangle
    'comma-dangle': [
      'error',
      {
        'arrays': 'only-multiline',
        'objects': 'only-multiline',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }
    ],

    // https://eslint.org/docs/rules/curly
    'curly': [
      'error',
      'all'
    ],

    // https://eslint.org/docs/rules/eol-last
    'eol-last': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/func-names
    'func-names': [
      'error',
      'as-needed'
    ],

    // https://eslint.org/docs/rules/indent
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],

    // https://eslint.org/docs/rules/key-spacing
    'key-spacing': [
      'error',
      {
        'afterColon': true,
        'beforeColon': false,
        'mode': 'minimum'
      }
    ],

    // https://eslint.org/docs/rules/keyword-spacing
    'keyword-spacing': [
      'error',
      {
        'before': true,
        'after': true
      }
    ],

    'no-console': 'warn',
    'no-debugger': 'warn',

    // https://eslint.org/docs/rules/no-implicit-coercion
    // disallow the type conversion with shorter notations.
    'no-implicit-coercion': 'error',

    // https://eslint.org/docs/rules/no-multi-spaces
    'no-multi-spaces': 'error',

    // https://eslint.org/docs/rules/no-trailing-spaces
    'no-trailing-spaces': 'error',

    // https://eslint.org/docs/rules/quote
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true
      }
    ],

    // https://eslint.org/docs/rules/semi
    'semi': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/space-before-blocks
    'space-before-blocks': [
      'error',
      'always'
    ],

    // https://eslint.org/docs/rules/space-before-function-paren
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'always',
      'asyncArrow': 'always'
    }],

    // https://eslint.org/docs/rules/space-infix-ops
    'space-infix-ops': 'error',

    //https://eslint.org/docs/rules/space-unary-ops
    'space-unary-ops': 'error',
  }
};

