module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    // 'plugin:@typescript-eslint/stylistic-type-checked',
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

    /**
     * Codestyle */

    'perfectionist/sort-array-includes': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-enums': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-exports': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-imports': [
      'warn',
      {
        groups: [
          'type',
          'react',
          ['builtin', 'external'],
          'fsd',
          'internal-type',
          'internal',
          ['parent-type', 'sibling-type', 'index-type'],
          ['parent', 'sibling', 'index'],
          'side-effect',
          'style',
          'object',
          'unknown'
        ],
        'custom-groups': {
          value: {
            react: ['react', 'react-dom/*'],
            fsd: [
              '@app/**',
              '@entities/**',
              '@pages/**',
              '@shared/**',
              '@widgets/**'
            ]
          },
          type: {
            react: ['react', 'react-dom/*']
          }
        },
        'newlines-between': 'always'
      }
    ],
    'perfectionist/sort-interfaces': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        groups: ['id', 'unknown', 'shorthand', 'predicate', 'callback'],
        'custom-groups': {
          id: 'id',
          predicate: 'is[A-Z]*',
          callback: 'on[A-Z]*'
        }
      }
    ],
    'perfectionist/sort-jsx-props': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        groups: ['key', 'id', 'unknown', 'shorthand', 'predicate', 'callback'],
        'custom-groups': {
          key: 'key',
          id: 'id',
          predicate: 'is[A-Z]*',
          callback: 'on[A-Z]*'
        }
      }
    ],
    'perfectionist/sort-maps': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-named-exports': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-named-imports': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ],
    'perfectionist/sort-object-types': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        groups: ['id', 'unknown', 'shorthand', 'predicate', 'callback'],
        'custom-groups': {
          id: 'id',
          predicate: 'is[A-Z]*',
          callback: 'on[A-Z]*'
        }
      }
    ],
    'perfectionist/sort-objects': [
      'warn',
      {
        type: 'natural',
        order: 'asc',
        groups: ['id', 'unknown', 'shorthand', 'predicate', 'callback'],
        'custom-groups': {
          id: 'id',
          predicate: 'is[A-Z]*',
          callback: 'on[A-Z]*'
        }
      }
    ],
    'perfectionist/sort-union-types': [
      'warn',
      {
        type: 'natural',
        order: 'asc'
      }
    ]
  }
}
