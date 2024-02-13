module.exports = (TSConfig) => {
  const mappedTSConfigPaths = Object.keys(TSConfig.compilerOptions.paths).reduce((acc, current, index, data) => {
    const parsed = current.replace('/*', '');
    if (!acc.read[parsed]) {
      acc.read[parsed] = true;
      acc.keys += parsed;
      acc.keys += index < data.length - 1 ? '|' : ')/';
    }
    return acc;
  }, {
    read: {},
    keys: '/^(',
  });

  return [
    "warn",
    {
      newlinesBetween: "always",
      groups: [
        ["/react$/", "/^next/"],
        "module",
        mappedTSConfigPaths.keys,
        ["parent", "sibling"],
        "index",
      ],
      alphabetize: { "order": "asc", "ignoreCase": true }
    }
  ]
}