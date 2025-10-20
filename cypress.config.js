const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  screenshot: true,
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      username: "Sergiocampos99",
      password:"abc123456!",
      name: "Sergio",
      city:"Zaragoza",
      country:"Spain",
      creditCard:"ES298976123401876523",
      year:"29",
      month:"01",
    }
  },
});
