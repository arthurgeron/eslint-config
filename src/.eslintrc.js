const namingConventionConfig = require("./rules/namingConvention");


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
    sourceType: "module",
  },
  ignorePatterns: ["next.config.js", "**/*.json", ".eslintrc.js", "jest.config.js", ".*/*", "node_modules/*"],
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:radar/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "eslint-plugin-no-inline-styles",
    "eslint-plugin-import-helpers",
    "radar",
    "@arthurgeron/react-usememo",
    "unicorn",
  ],
  globals: {
    SocketIOClient: "readonly",
    GLOBAL: "readonly",
    process: "readonly",
  },
  settings: {
    'import/ignore': ['react-native'],
    react: {
      version: "detect",
    },
  },
  rules: {
    // * JS Rules that conflict with TS
    // * Rules are defined separatedly in overrides
    "@typescript-eslint/indent": "off",
    "max-len": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    camelcase: "off",
    "object-curly-spacing": "off",
    "jsx-props-no-spreading": "off",
    "no-plusplus": "off",
    "indent": "off",
    "comma-dangle": "off",
    // * End of Conflicting Rules
    'unicorn/no-for-loop': 'error',
    "react/react-in-jsx-scope": "off",
    "no-undef": "warn",
    "react/jsx-closing-bracket-location": "off",
    "arrow-parens": "off",
    "linebreak-style": "off",
    "quotes": "off",
    "semi": "off",
    "no-shadow": "off",
    "react/no-multi-comp": "error",
    "radar/no-duplicate-string": "off",
    "radar/cognitive-complexity": ["warn", 25],
    '@arthurgeron/react-usememo/require-usememo': [2, { checkHookCalls: false }],
    "react/jsx-no-bind": [
      "error",
      {
        allowFunctions: true,
      },
    ],
    "no-unneeded-ternary": "error",
    "no-nested-ternary": "error",
    "no-inline-styles/no-inline-styles": "error",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-mixed-operators": "error",
    "no-unneeded-ternary": "error",
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "react",
            importNames: ["default"],
            message:
              "Importing React is not necessary on React => 17 / Next.JS use named imports when needed.",
          },
        ],
      },
    ],
    "react-hooks/exhaustive-deps": [
      "error",
      {
        "additionalHooks": "(useAnimatedStyle|useDerivedValue|useAnimatedProps)"
      }
    ]
  },
  overrides: [
    {
      files: ["*js", "*.jsx"],
      parser: "@babel/eslint-parser",
      parserOptions: {
        requireConfigFile: false
      },
      extends: ["plugin:import/recommended"],
      rules: {
        "import/no-unresolved": "off",
        "import/named": "off",
        "no-shadow": ["error"],
        "camelcase": [2, { "properties": "never", "ignoreDestructuring": false, "allow": ["^must_","^firebase_","^UNSAFE_"]  }],
      },
    },
    {
      files: ["*.tsx", "*.ts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      rules: {
        "@typescript-eslint/naming-convention": namingConventionConfig,
        "@typescript-eslint/no-explicit-any": "error",
        "react/prop-types": "off",
        "no-unused-vars": "off",
        "jsx-props-no-spreading": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],
        eqeqeq: ["error", "always", {"null": "ignore"}], // e.g. === instead of == when applicable
      },
    },
    {
      files: ['**/*.{spec,test}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{tsx,ts,jsx,js}'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:testing-library/react'],
      rules: {
        'import/no-dynamic-require': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'jest/no-mocks-import': 'off',
        "@arthurgeron/react-usememo/require-usememo": "off",
        "radar/no-identical-functions": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-empty-function": "off",
      }
    },
  ],
};