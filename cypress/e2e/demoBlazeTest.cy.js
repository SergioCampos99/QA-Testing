describe("Smoke Test pagina web y diferentes apartados", () => {

    beforeEach(() => {
    // runs before each test in the block  <---- Super Important
    //We dont need to add any command, variable or catching the element in any test. Just running it at the top of all the test cases will be enough
        cy.visit("https://www.demoblaze.com/")
        
    })


    it("Validar pagina de inicio", () => {
        cy.get('.active > .d-block').should("be.visible")
        cy.get('#nava').should("be.visible")
        cy.get('.active > .nav-link').should("be.visible")
        cy.get(':nth-child(2) > .nav-link').should("be.visible")
        cy.get(':nth-child(3) > .nav-link').should("be.visible")
        cy.get('#cartur').should("be.visible")
        cy.get('#login2').should("be.visible")
        cy.get('#signin2').should("be.visible")
        cy.get('#cat').should("be.visible")
        cy.get(':nth-child(1) > .thumbnail > .caption').should("be.visible")
        cy.get('.col-sm-3').should("be.visible")

    })

    it("Crear una cuenta de usuario (Happy Path)", () => {
        cy.get('#signin2').click()
        cy.get('#sign-username').type("Sergiocampos99")
        cy.get('#sign-password').type("abc123456!")
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
    })

    it.only("Iniciar sesion y comprar un producto", () => {
        cy.get('#login2').click()
        cy.get('#loginusername').type('Sergiocampos99', { force: true, delay: 100 })
        cy.wait(1000)
        cy.get('#loginpassword').type("abc123456!")
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.active > .nav-link').click()
        cy.get(':nth-child(8) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('#tbodyid > :nth-child(1) > :nth-child(2)').should("be.visible")
        cy.get('#tbodyid > :nth-child(2) > :nth-child(2)').should("be.visible")
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#name').type("Sergio", {force:true,delay: 100})
        cy.get('#country').type("Spain", {force:true,delay: 100})
        cy.get('#city').type("Zaragoza", {force:true,delay: 100})
        cy.get('#card').type("ES299808653423457651", {force:true, delay:100})
        cy.get('#month').type("01")
        cy.get('#year').type("29")
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').contains("Thank you for your purchase!").should("be.visible")
        cy.get('.lead').should("be.visible")
        cy.wait(1000) //cypress trabaja tan rapido que algunas paginas web no pueden soportar esa rapidez, asi que añadimos de forma sencilla
        // y rapida el metodo wait para esperar almenos 1 segundo
        cy.get('.confirm').click()
        cy.wait(1000)
        //nos deberia de redirigir al menu principal
        cy.get('#nava').should("be.visible")
        cy.get('#contcont > :nth-child(1) > .col-lg-3').should("be.visible")
    })

})