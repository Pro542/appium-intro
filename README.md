appium web setup

### For web

Setting up appium for chrome web testing (on mac)

1. Install appium with `npm i -g appium`
2. Install chromium driver `appium driver install chromium`
3. Install chromedriver `appium driver run chromium install-chromedriver`

Run `appium` on a one terminal to keep appium server running,

in another terminal run `npm start` to run the sample web server

in another terminal run `npm test` to run the test script. This will serve as the client to the appium server

No assertions used here, just basic setup for webdriver and appium for chrome

### For android

This is the method mentioned in the [quickstart docs](https://appium.io/docs/en/latest/quickstart/)

1. Install appium with `npm i -g appium` (if not already)
2. Install driver with `appium driver install uiautomator2`
3. Check if anything is wrong with `appium driver doctor uiautomator2`
If `ANDROID_HOME` or `JAVA_HOME` are not set, add this to `~/.zshrc` (assuming you're in mac and use zsh)
```
# appium
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/tools/bin:$ANDROID_HOME/platform_tools
export JAVA_HOME=$(/usr/libexec/java_home)
export PATH=$PATH:${JAVA_HOME}/bin
```
Try 3. again. If it says apkanalyzer or any tool is not found for Android, go to
Tools > SDK Manager > SDK Tools and check `[ ] Android SDK Command-line Tools (latest)`
If any other issue is shown for 3., you will need to fix it as explained.

Run `appium` on one terminal,

Start the emulator (running default app on android studio should do),

Run `node test-android.js` to run the script.

