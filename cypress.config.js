const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshot: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
