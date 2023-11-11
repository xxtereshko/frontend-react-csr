module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react-refresh', 'perfectionist'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      {
        allowConstantExport: true
      }
    ],
    'perfectionist/sort-array-includes': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        'ignore-case': false
      }
    ],
    'perfectionist/sort-enums': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        'ignore-case': false
      }
    ],
    'perfectionist/sort-exports': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        'ignore-case': false
      }
    ],
    'perfectionist/sort-imports': [
      'warn',
      {
        groups: [
          'type',
          ['builtin', 'external'],
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'object',
          'unknown'
        ],
        'custom-groups': {
          value: {},
          type: {}
        },
        'newlines-between': 'always',
        'internal-pattern': ['@shared/*']
      }
    ],
    'perfectionist/sort-interfaces': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        'ignore-case': false, //TODO: add onClick bottom
        'custom-groups': {
          top: 'id'
        },
        groups: ['top', 'multiline']
      }
    ],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        'ignore-case': false,
        'custom-groups': {
          callbacks: 'on*'
        },
        groups: ['shorthand', 'multiline', 'callbacks', 'unknown']
      }
    ]
  }
}
