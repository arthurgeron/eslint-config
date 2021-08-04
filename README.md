# @arthurgeron/eslint-config

ESLint config that provides the best practices alongside with my own code patterns.

https://www.npmjs.com/package/@arthurgeron/eslint-config

## Objective

This project goal is to establish a code pattern across multiple projects, make it easier to set up new projects as well as garantee projects maintain a reasonable level of [code quality](https://medium.com/@navitasinghal77/react-coding-standards-and-practices-3b133bcaea8).


## Intended use
This is intended to be used integrated with your CI tools (e.g. Jenkins), using this config just as a pre-commit hook is **not** enough to garantee the code pushed will follow the estabilished code patterns and rules.

## Requirements
- ESLint itself, plugins and configs listed in peer dependencies

## Installing

1. Run `yarn add @arthurgeron/eslint-config`

Configuring on a Web project:
```json
{
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ["@arthurgeron/eslint-config"]
}
```

Configuring on a React Native project:
```json
{
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ["@arthurgeron/eslint-config/native"]
}
```
Note: we also recommend removing previous rules.

set your .prettierc.js:
```js
const prettierrc = require('@arthurgeron/eslint-config/prettier');

module.exports = prettierrc;
```

## Configuring with your Visual Studio Code
We all know it's annoying to have to manually look at eslint errors on the terminal one by one to fix code issues, with these suggestions you will have ESLint integrated into your VSCode showing errors dynamically and inline.
### Install these extensions:
[dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Base ESLint extension
[rvest.vs-code-prettier-eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) - Better ESLint/Prettier integration and auto-fixing
[usernamehw.errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens) - Shows errors inline

### Add your node runtime to your ESLint config
Go into your VSCode settings  and set `eslint.runtime` to `"node"`, example:
```JSON
{
  "eslint.runtime": "node",
}
```
This will make sure your ESLint extension uses your current node version and runs correctly.

That's it, you are all set! Next time you open a file you should see all ESLint errors inline.
## Customization
You can override some configs to better suit your project's needs, such as `import-helpers/order-imports`, though modifiying other rules is not recommended as it would defeat the purpose of having a centralized pack of ESLint rules.

## ESLint? But my project is gigantic!
If your project has been around for some time and has gathered a good amount of lines I suggest you take this approach:

- Implement it as a pre-commit hook but only lint staged files.    
"What does that mean?" you might ask, well it means that only the **changed** files will be validated, only the files that you change will need to be adapted to fit the ESLint rules, considerabnly diminishing the initial impact of implementing it into your development process.    
### Example of stage only lint ([husky](https://github.com/typicode/husky)):
```json
// package.json
"scripts": {
  "lint": "eslint --ignore-path .gitignore ",
},
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{ts,js,jsx,tsx}": [
      "yarn lint"
    ]
  },
```
