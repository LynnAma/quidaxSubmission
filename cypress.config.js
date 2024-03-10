const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


module.exports = defineConfig({
  //specPattern: "cypress/e2e/bdd-cucumber/features/*.feature",
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  retries: {
    runMode: 2,
  },

  e2e: {
     setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
     preprocessor.addCucumberPreprocessorPlugin(on, config);
     on("file:preprocessor", browserify.default(config));
     return config;
    },

    baseUrl : "https://demo.seleniumeasy.com"
  },
});


