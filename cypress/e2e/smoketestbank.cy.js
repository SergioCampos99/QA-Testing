describe("Test Suite - conjunto de pruebas", () => {

    beforeEach(() => {
    // runs before each test in the block  <---- Super Important
    //We dont need to add any command, variable or catching the element in any test. Just running it at the top of all the test cases will be enough
        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('#signin_button').click()
        cy.get('[name="user_login"]').type("username")
        cy.get('[name="user_password"]').type("password")
        cy.get('[name="submit"]').click()
    })

    it("Validar pagina de inicio", () => {

        cy.visit("http://zero.webappsecurity.com/index.html")
        cy.get('.active > img').should("be.visible")
        cy.get('.active > .custom').should("be.visible")
        cy.get('#homeMenu > div > strong').should("be.visible")
        cy.get('#onlineBankingMenu > div > strong').should("be.visible")
        cy.get('#feedback > div > strong').should("be.visible")
        cy.get('.brand').should("be.visible")
        cy.get('#online_banking_features > :nth-child(1)').should("be.visible")
        cy.get('#online_banking_features > :nth-child(2)').should("be.visible")
        cy.get('#online_banking_features > :nth-child(3)').should("be.visible")
        cy.get('#online_banking_features > :nth-child(4)').should("be.visible")
        cy.get('.extra-inner').should("be.visible")
        cy.get('#download_webinspect_link').contains("Download WebInspect")
        cy.get('#terms_of_use_link').contains("Terms of Use")
        cy.get('#contact_hp_link').contains("Contact Micro Focus")
        cy.get('#privacy_statement_link').contains("Privacy Statement")
        cy.get('.extra-inner > .container > :nth-child(2)').should("be.visible")
 
    })
    it("Validar transferencia Test E2E", () => {

        cy.get('#transfer_funds_tab > a').click()
        cy.get('[name="fromAccountId"]').select("1")
        cy.get('[name="toAccountId"]').select("5")
        cy.get('[name="amount"]').type("300")
        cy.get('[name="description"]').type("Prueba de transferencia automatizada")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction")
          
    })
    it("Validar el pago de una factura Test E2E", () => {
        
        cy.get('#pay_bills_tab > a').click()
        cy.get('[name="payee"]').select("Apple")
        cy.get('[name="account"]').select("Loan")
        cy.get('[name="amount"]').type("255")
        cy.get('[name="date"]').type("2025-10-08")
        cy.get(':nth-child(4) > .span12').click()
        cy.get('[name="description"]').type("Pago Apple prueba Test E2E")
        cy.get('#pay_saved_payees').click()
        cy.get('#alert_content').contains("The payment was successfully submitted")

    })
    it("Navegar y mostrar datos de transacciones", () => {
        
        cy.get('#account_activity_tab > a').click()
        cy.get('[name="accountId"]').select("Checking")
        cy.get('[name="accountId"]').select("Loan")
        cy.get('[name="accountId"]').select("Credit Card")
        cy.get('[name="accountId"]').select("Brokerage")
    })

    it("Encontrar transacciones entre fechas", () => {
        
        cy.get('#account_activity_tab > a').click()
        cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
        // cy.get('[name="description"]').type("")
        cy.get('[name="fromDate"]').type("1999-01-01")
        cy.get('fieldset > :nth-child(1)').click()
        cy.get('[name="toDate"]').type("2025-10-06")
        cy.get('fieldset > :nth-child(1)').click()
        cy.get('[name="fromAmount"]').type("0")
        cy.get('[name="toAmount"]').type("30000") //to find all the transactions because we already know that there is no transaction higher than this number
        cy.get('[name="type"]').select("Any")
        cy.get('.btn').click()

    })

    it("Añadir un pagador en la pestaña de Add New Payee", () => {
        
        cy.get('#pay_bills_tab > a').click()
        cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
        cy.get('[name="name"]').type("Santander")
        cy.get('[name="address"]').type("Calle Gomez Ibarra, 37, Oficina 16")
        cy.get('[name="account"]').type("ES294500876534572634")
        cy.get('[name="details"]').type("Banco Santander Vehiculo con matricula 5669LLB")
        cy.get('#add_new_payee').click()
        cy.get('#alert_content').contains("The new payee Santander was successfully created")
        
    })

    it("Validar navegacion en My Money Map", () => {

        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1168').click()
        cy.get('#ext-sprite-1259').should("not.be.visible")

    })

    it("Comprar moneda de otro pais en Pay Bills", () => {
        cy.get('#pay_bills_tab > a').click()
        cy.get('.ui-tabs-nav > :nth-child(3) > a').click()
        cy.get('[name="currency"]').select("Eurozone (euro)")
        cy.get('#sp_sell_rate').contains("euro")
        cy.get('[name="amount"]').type("300")
        cy.get('.controls > :nth-child(3)').click()
        cy.get('#pc_calculate_costs').click()
        cy.get('#pc_conversion_amount').should("be.visible").then(() => {
            cy.get('#purchase_cash').click()
        })
        cy.get('#alert_content').should("be.visible")
    })

    it("Deseleccionar todos los apartados de My money App - OutFlow Chart", () => {
    //    cy.get('#money_map_tab > a').click()
    //    cy.get('#ext-sprite-1251').should("be.visible")
    //    cy.get('#ext-sprite-1134').click()
    //    cy.get('#ext-sprite-1251').should("not.be.visible")
    //    cy.get('#ext-sprite-1253').should("be.visible")
    //    cy.get('#ext-sprite-1138').click()
    //    cy.get('#ext-sprite-1253').should("not.be.visible")
    //    cy.get('#ext-sprite-1255').should("be.visible")
    //    cy.get('#ext-sprite-1142').click()
    //    cy.get('#ext-sprite-1255').should("not.be.visible")
    //    cy.get('#ext-sprite-1257').should("be.visible")
    //    cy.get('#ext-sprite-1146').click()
    //    cy.get('#ext-sprite-1257').should("not.be.visible")
    //    cy.get('#ext-sprite-1259').should("be.visible")
    //    cy.get('#ext-sprite-1150').click()
    //    cy.get('#ext-sprite-1259').should("not.be.visible")
    //    cy.get('#ext-sprite-1261').should("be.visible")
    //    cy.get('#ext-sprite-1154 >').click()
    //    cy.get('#ext-sprite-1261').should("not.be.visible")
    //    cy.get('#ext-sprite-1263').should("be.visible")
    //    cy.get('#ext-sprite-1158 ').click()
    //    cy.get('#ext-sprite-1263').should("not.be.visible")
    //    cy.get('#ext-sprite-1265').should("be.visible")
    //    cy.get('#ext-sprite-1162').click()
    //    cy.get('#ext-sprite-1265').should("not.be.visible")
    //    cy.get('#ext-sprite-1267').should("be.visible")
    //    cy.get('#ext-sprite-1166').click()
    //    cy.get('#ext-sprite-1267').should("not.be.visible")
    //    cy.get('#ext-sprite-1269').should("be.visible")
    //    cy.get('#ext-sprite-1170').click()
    //    cy.get('#ext-sprite-1269').should("not.be.visible")

    //Imposibilidad de realizar el caso de prueba ya que cada sesion, la numerologia del identificador del elemento cambia constantemente
    //Se realizan pruebas exploratorias mediante otro software y comprobamos el correcto funcionamiento del sistema
    })

    it("Realizar una busqueda en la barra superior", () => {
        cy.get('[name="searchTerm"]')
        .should("be.visible") //Verificamos que la barra de busqueda este visible en todo momento
        .type('online{enter}') //Añadimos lo que queremos poner en la barra de busqueda y presionamos enter con el comando {enter} puesto que no tenemos boton de busqueda
        cy.get('[name="searchTerm"]')
        .should("be.visible")
        .type("transfer{enter}")
        cy.get('[name="searchTerm"]')
        .should("be.visible")
        .type("money{enter}")
        cy.get('[name="searchTerm"]')
        .should("be.visible")
        .type("help{enter}")
        cy.get('[name="searchTerm"]')
        .should("be.visible")
        .type("bills{enter}")
        //Realizamos el mismo paso con todos los metodos get()
    })

    it("Enviar un mensaje de Feedback", () => {
        cy.get('.brand').click()
        cy.get('#feedback > div > strong').click()
        cy.get('[name="name"]').type("Sergio")
        cy.get('[name="email"]').type("s.camposlacueva@gmail.com")
        cy.get('[name="subject"]').type("Help with bills")
        cy.get('[name="comment"]').type("This is a test performed from the QA department of Microsoft enviroment California by the Tester Sergio Campos Lacueva")
        if (cy.get('[name="clear"]').click()) {
            cy.get('[name="comment"]').should("be.empty")
            cy.get('[name="subject"]').should("be.empty")
            cy.get('[name="email"]').should("be.empty")
            cy.get('[name="name"]').should("be.empty")
            
        } else {
               cy.get('[name="clear"]').click() //Podemos colocar que vuelva a pulsar el boton en caso de no borrar la informacion escrita
        }
        cy.get('[name="name"]').type("Sergio")
        cy.get('[name="email"]').type("s.camposlacueva@gmail.com")
        cy.get('[name="subject"]').type("Help with bills")
        cy.get('[name="comment"]').type("This is a test performed from the QA department of Microsoft enviroment California by the Tester Sergio Campos Lacueva")
        cy.get('[name="submit"]').click()
        cy.get('.offset3').contains("Thank you for your comments, Sergio. They will be reviewed by our Customer Service staff and given the full attention that they deserve.")
    })

})