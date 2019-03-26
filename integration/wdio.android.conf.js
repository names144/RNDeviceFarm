/**
 * WebDriver Configuration for Device Farm (Android)
 */
const { config } = require('./wdio.shared.conf');

config.capabilities = [{
  maxInstances: 1,
}];

exports.config = config;
