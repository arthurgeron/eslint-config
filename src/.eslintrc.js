const namingConventionConfig = require('./rules/namingConvention');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  ignorePatterns: ['next.config.js'],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:radar/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'eslint-plugin-no-inline-styles',
    'eslint-plugin-import-helpers',
    'radar',
  ],
  globals: {
    SocketIOClient: 'readonly',
    GLOBAL: 'readonly',
    process: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'comma-dangle': 'off',
    'object-curly-newline': 'off',
    'react/react-in-jsx-scope': 'off',
    'camelcase': [2, { 'properties': 'never', 'ignoreDestructuring': false, 'allow': ['^must_','^firebase_','^UNSAFE_']  }],
    'no-undef': 'warn',
    'react/no-multi-comp': 'error',
    'radar/no-duplicate-string': 'off',
    'radar/cognitive-complexity': ['warn', 25],
    'no-inline-styles/no-inline-styles': 2,
    'react/jsx-no-bind': [
      'error',
      {
        allowFunctions: true,
      },
    ],
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'no-inline-styles/no-inline-styles': 'error',
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-shadow': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message:
              'Importing React is unecessary on React => 17, use named imports when necessary.',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*js'],
      extends: ['plugin:import/recommended'],
      rules: {
        'implicit-arrow-linebreak': 'off',
        'jsx-props-no-spreading': 'off',
        'no-shadow': ['error'],
        'import/named': 'off',
        'import/no-unresolved': 'off',
        quotes: 'off',
      },
    },
    {
      files: ['*.tsx', '*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
      rules: {
        'implicit-arrow-linebreak': 'off',
        camelcase: 'off',
        '@typescript-eslint/naming-convention': namingConventionConfig,
        '@typescript-eslint/no-explicit-any': 'error',
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'react/prop-types': 'off',
        'no-unused-vars': 'off',
        'jsx-props-no-spreading': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-shadow': ['error'],
        quotes: 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': ['error'],
        eqeqeq: 'error', // e.g. === instead of == when applicable
        'import-helpers/order-imports': [
          'warn',
          {
            newlinesBetween: 'always',
            groups: [
              ['/react$/', '/^next/'],
              'module',
              '/^@(hooks/constants/types/components)/',
              ['parent', 'sibling'],
              'index',
            ],
            alphabetize: { order: 'asc', ignoreCase: true },
          },
        ],
      },
    },
    {
      files: ['**/*.test.js'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
    },
    {
      files: ['fonts.ts'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
