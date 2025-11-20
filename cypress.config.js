const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    viewportWidth: 700,
    viewportHeight: 450,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
