describe("Test Suite - Pruebas Orange HRM", () => {
    beforeEach(() => {
    // runs before each test in the block  <---- Super Important
    //We dont need to add any command, variable or catching the element in any test. Just running it at the top of all the test cases will be enough
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.get('[name="username"]').type("Admin")
        cy.get('[name="password"]').type("admin123")
        cy.get('.oxd-button').click()
    })   
    it("Validar pagina de inicio", () => {
        cy.get('.orangehrm-login-branding > img').should("be.visible")
        cy.get('.orangehrm-login-branding').should("be.visible")
        cy.get('.orangehrm-login-logo').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should("be.visible")
        cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').should("be.visible")
        cy.get('.orangehrm-login-slot').should("be.visible")
        cy.get('.orangehrm-login-footer-sm').should("be.visible")
    })
    it("Añadir usuario en el sistema y verificarlo", () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        cy.get('.oxd-autocomplete-text-input > input').type("tester  user")
        
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
        // cy.get('.oxd-select-dropdown > :nth-child(2)').click()
        // cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type("SergioCampos99")
        // cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("ABCdef123!")
        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("ABCdef123!")
        // cy.get('.oxd-button--secondary').click()
    })

    it.only("Añadir un post en el apartado de Buzz", () => {
        cy.get(':nth-child(12) > .oxd-main-menu-item').click()
        cy.get('.oxd-buzz-post-input').type("Hellow World!, I am using Cypress and this is a test made by Sergio")
        cy.get('.oxd-buzz-post-slot > .oxd-button').click()
        
    })

})