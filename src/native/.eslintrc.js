const baseConfig = require('../index');

module.exports = {
  ...baseConfig,
  extends: [...baseConfig.extends, "@react-native-community"],
}