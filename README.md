# React Native Device Farm Example

This repository is an example of how you can utilize AWS Device Farm for testing your React Native applications. We can take advantage of [Appium](http://appium.io/) and [WebdriverIO](https://webdriver.io/) to run our tests against our application on emulator/simulators and physical devices.

## Getting Started

Clone the repository and npm install. Verify you can run the application through React Native.

Once you are able to run the application your React Native CLI, you are now ready to install Appium.

This repository uses the following versions:

- Appium 1.9.1

- React Native 59.1

- React 16.8.3

- XCode 10.1

## Installing and Starting the Appium Server Locally

To test locally you will need the Appium server running. You can either use the Appium CLI or Appium Desktop App.

To use the CLI:

`npm install -g appium@1.9.1 && appium`

This will start a basic Appium server. You can see more about the CLI here http://appium.io/docs/en/writing-running-appium/server-args/

To use the Desktop App, go to http://appium.io/ _Note: you will need to download version 1.9.1 of the app_

You will also want to install appium-doctor to ensure your environment is setup to use Appium correctly:

`npm install -g appium-doctor`

See more information here: https://github.com/appium/appium-doctor

## Build Android APK

To build the Android APK, we can use the Gradle build script in the _android_ folder:

`cd android && ./gradlew assembleRelease`

The APK should be located at android/app/build/outputs/apk/release/app-release-unsigned.apk.

## Build iOS .app

To build the iOS .app file for a simulator device, open the _RNDeviceFarm.xcodeproj_ file in the _ios_ directory.

Now, select the iOS simulator you wish to build for and then go to _Product -> Scheme -> Manage Schemes_. Update the scheme _Build Configuration_ to _Release_ in the _Run_ tab. This will build our application in production mode.

Finally, click _Product -> Clean and Product -> Build_. This will create a .app file in your XCode build output directory. The default should be ~/Library/Developer/Xcode/DerivedData/. Once your app builds and you have verified the .app file exists, you are ready to test on the simulator locally.

## Running tests locally

To run the tests locally using Appium, you will need an APK for Android or a .app file for the iOS simulator.

`cd integration && npm install`

This will install the WebdriverIO and dependencies we need to test.

You can edit the _wdio.*.local.conf.js_ files for local testing (update app location, change simulator, ...).

Once you are ready to test, start the Appium server, start the emualtor/simulator, and run the desired test. Example:

`npm run test:android:local`

This would run the tests locally for Android.

## Deploying to Device Farm

To deploy to Device Farm, simply run the package script to generate the zip file needed.

`npm run package`

In the AWS console, start a new run in Device Farm, upload the APK or IPA (not .app file) and use the zip file for your test package.

For the Appium YAML configuration, use either the _appium.android.yml_ file or the _appium.ios.yml_ file.
