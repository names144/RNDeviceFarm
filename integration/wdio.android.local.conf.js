/**
 * WebDriver Configuration for Local Testing (Android Emulator)
 */
const path = require('path');
const { config } = require('./wdio.shared.conf');

config.capabilities = [{
  maxInstances: 1,
  platformName: 'Android',
  deviceName: 'Android Emulator', // Needed to connect to emulator
  // Change the path below to find the .apk file
  app: path.resolve(__dirname, '../android/app/build/outputs/apk/release/app-release-unsigned.apk'),
  automationName: 'UiAutomator2',
}];

exports.config = config;
