module.exports = [
  'error',
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
    filter: {
      regex: "^(__esModule)",
      match: false
    },
  },
  {
    selector: 'typeProperty',
    format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
    filter: {
      regex: "^(__esModule)",
      match: false
    },
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'objectLiteralProperty',
    format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
    filter: {
      regex: "^(__esModule)",
      match: false
    },
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'enumMember',
    format: ['PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'variable',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'import',
    format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
  },
  {
    selector: 'function',
    format: ['camelCase', 'PascalCase'],
  },
  {
    selector: 'parameter',
    format: ['camelCase', 'PascalCase'],
    "filter": {
      "regex": "^[A-Z]*$",
      "match": false
    },
    leadingUnderscore: 'allow',
  },
];