describe("Smoke Test pagina web y diferentes apartados", () => {

    beforeEach(() => {
    // runs before each test in the block  <---- Super Important
    //We dont need to add any command, variable or catching the element in any test. Just running it at the top of all the test cases will be enough
        cy.visit("/")
        
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
        cy.get('#sign-username').type(Cypress.env("username"), { force: true, delay: 100 })
        cy.get('#sign-password').type(Cypress.env("password"), {force:true, delay: 100})
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
    })

    it("Iniciar sesion y comprar un producto", () => {
        cy.get('#login2').click()
        cy.get('#loginusername').type(Cypress.env("username"), { force: true, delay: 100 })
        cy.wait(1000)
        cy.get('#loginpassword').type(Cypress.env("password"), {force:true, delay: 100})
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
        cy.get('#name').type(Cypress.env("name"), {force:true,delay: 100})
        cy.get('#country').type(Cypress.env("country"), {force:true,delay: 100})
        cy.get('#city').type(Cypress.env("city"), {force:true,delay: 100})
        cy.get('#card').type(Cypress.env("creditCard"), {force:true, delay:100})
        cy.get('#month').type(Cypress.env("month"))
        cy.get('#year').type(Cypress.env("year"))
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('contain', "Thank you for your purchase!")
        cy.get('.lead').should("be.visible")
        cy.wait(1000) //cypress trabaja tan rapido que algunas paginas web no pueden soportar esa rapidez, asi que añadimos de forma sencilla
        // y rapida el metodo wait para esperar almenos 1 segundo
        cy.get('.confirm').click()
        cy.wait(1000)
        //nos deberia de redirigir al menu principal
        cy.get('#nava').should("be.visible")
        cy.get('#contcont > :nth-child(1) > .col-lg-3').should("be.visible")
    })

    it("Validar informacion de producto", () => {
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.name').contains("Samsung galaxy s6")
        cy.get('#more-information > p').should("be.visible")
        cy.get('.price-container').should("be.visible")
        cy.get('.col-sm-12 > .btn').should("be.visible")
        cy.get('.item > img').should("be.visible")
        
    })

    it("Enviar mensaje de contacto", () => {
        cy.get(':nth-child(2) > .nav-link').click()
        cy.get('#recipient-email').type(Cypress.env ("fakeEmail"), {force:true, delay:100})
        cy.get('#recipient-name').type(Cypress.env("name"), {force: true, delay: 100})
        cy.get('#message-text').type("This is a test performed by the QA Team", {force:true, delay:100})
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })

    it("Reproducir, parar y cerrar video sobre About Us", () => {
        cy.get(':nth-child(3) > .nav-link').click()
        cy.get('.vjs-poster').click()
        cy.wait(7000) //esperamos a que se reproduzca almenos 7 segundos
        cy.get('#example-video_html5_api').click()
        cy.wait(1000)
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        //muchos de los elementos que nos iremos encontrando en la pagina web tienen un ancho y un alto de 0px y tendremos que ver como poder clicar el objeto o si podemos
        //utilizar teclas con el metodo cy.press e indicando la tecla o teclas que queremos pulsar        
    })

    it('Validation test Automated from the new Update in Cypress', function() {
        cy.get('div.list-group a:nth-child(2)').click();
        cy.get('div.list-group a:nth-child(3)').click();
        cy.get('div.list-group a:nth-child(4)').click();
        cy.get('div.list-group a:nth-child(2)').click();
        cy.get('#tbodyid div:nth-child(1) > div.card > div.card-block > h4.card-title > a.hrefch').click();
        cy.get('#more-information p').click();
        cy.get('#more-information p').should('be.visible');
        cy.get('#tbodyid').click();
        cy.get('#tbodyid h3.price-container').should('be.visible');
        cy.get('#tbodyid h2.name').click();
        cy.get('#tbodyid h2.name').should('have.text', 'Samsung galaxy s6');
        cy.get('#imgp img').click();
    });

});

