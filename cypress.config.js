const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      it("Pantalla Grande",()=>{
        cy.viewport(1920, 1080)

      })
    },
  },
});
