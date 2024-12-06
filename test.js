const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'mac',
  browserName: 'chrome',
  'appium:automationName': 'Chromium',
};

const wdOpts = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    await driver.url('http://localhost:8000');
    const buttonElem = await driver.$("button[data-qa='button']");
    await buttonElem.click();

    const inputBox = await driver.$("input[data-qa='textinput']");
    await inputBox.addValue('test');
    await inputBox.addValue(123);
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
