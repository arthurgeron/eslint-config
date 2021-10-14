
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
  ignorePatterns: ["next.config.js"],
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:radar/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: [
    "eslint-plugin-no-inline-styles",
    "eslint-plugin-import-helpers",
    "radar",
  ],
  globals: {
    SocketIOClient: "readonly",
    GLOBAL: "readonly",
    process: "readonly",
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "comma-dangle": "off",
    "object-curly-newline": "off",
    "react/react-in-jsx-scope": "off",
    "camelcase": [2, { "properties": "never", "ignoreDestructuring": false, "allow": ["^must_","^firebase_"]  }],
    "no-undef": "warn",
    "react/no-multi-comp": "error",
    "radar/no-duplicate-string": "off",
    "radar/cognitive-complexity": ["error", 20],
    "no-inline-styles/no-inline-styles": 2,
    "quotes": ["error", "single"],
    "react/jsx-no-bind": "error",
    "no-unneeded-ternary": "error",
    "no-nested-ternary": "error",
    "no-inline-styles/no-inline-styles": "error",
    "no-tabs": ["error", {"allowIndentationTabs": true}],
    "no-shadow": "off",
    "no-console": ["error", { allow: ["warn", "error"] }],
  },
  overrides: [
    {
      files: ["*js"],
      extends: ["plugin:import/recommended"],
      rules: {
        "implicit-arrow-linebreak": "off",
        "jsx-props-no-spreading": "off",
        "no-shadow": ["error"],
        "import/named": "off",
        "import/no-unresolved": "off",
      }
    },
    {
      files: ["*.tsx", "*.ts"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:@typescript-eslint/recommended", "plugin:import/typescript"],
      rules: {
        "implicit-arrow-linebreak": "off",
        camelcase: "off",
        "@typescript-eslint/no-explicit-any": "error",
        "indent": "off",
        "@typescript-eslint/indent": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
        "jsx-props-no-spreading": "off",
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "quotes": ["error", "single"],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],
        eqeqeq: "error", // e.g. === instead of == when applicable
        "import-helpers/order-imports": [
          "warn",
          {
            "newlinesBetween": "always",
            "groups": [
              ["/react$/", "/^next/", "/^\@tradersclub/"],
              "module",
              "/^@(hooks/constants/types/components)/",
              ["parent", "sibling"],
              "index"
            ],
            "alphabetize": { "order": "asc", "ignoreCase": true }
          }
        ],
      },
    },
    {
      files: ["fonts.ts"],
      rules: {
        "prettier/prettier": "off",
      }
    }
  ],
};