const baseConfig = require('../index');

module.exports = {
  ...baseConfig,
  extends: ['@react-native', ...baseConfig.extends.filter((item) => !item.startsWith('next'))],
}