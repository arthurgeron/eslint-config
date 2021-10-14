module.exports = [
  'error',
  {
    selector: 'default',
    format: ['camelCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'typeProperty',
    format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'forbid',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'objectLiteralProperty',
    format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },

  {
    selector: 'variable',
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
];