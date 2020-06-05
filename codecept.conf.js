const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://bluescapeqainterview.wordpress.com/contact/',
      show: true,
      windowSize: '1200x900',
	  waitForNavigation: "networkidle0"
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Bluescape',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  multiple: {
    basic: {
    // run all tests in chrome and firefox
      browsers: ["chrome", "firefox"]
    },
    "smoke": {
      // run only tests containing "@smoke" in name
      "grep": "@smoke",

      // store results into `output/smoke` directory
      "outputName": "smoke",

      "browsers": [
        "chrome",
        {"browser": "chrome", "windowSize": "maximize"}
      ]
    }
  }
}
