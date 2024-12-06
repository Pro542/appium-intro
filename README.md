appium web setup

Setting up appium for chrome web testing (on mac)

1. Install appium with `npm i -g appium`
2. Install chromium driver `appium driver install chromium`
3. Install chromedriver `appium driver run chromium install-chromedriver`

Run `appium` on a one terminal to keep appium server running,

in another terminal run `npm start` to run the sample web server

in another terminal run `npm test` to run the test script. This will serve as the client to the appium server

No assertions used here, just basic setup for webdriver and appium for chrome
