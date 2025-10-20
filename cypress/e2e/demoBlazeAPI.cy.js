describe("API Demoblaze", () => {
    
    
    
    it("trae todos los productos", () => {
        cy.visit("/")
        cy.intercept('GET', '**/entries').as('getProducts')
        cy.get('#nava').should('be.visible')
        cy.wait('@getProducts').then((interception) => {
        console.log(interception.response.body)
        })

        //Este test nos arroja el siguiente resultado
        //         {Items: Array(9), LastEvaluatedKey: {…}}
        // Items
        // : 
        // Array(9)
        // 0
        // : 
        // {cat: 'phone', desc: 'The Samsung Galaxy S6 is powered by 1.5GHz octa-co…ks 32GB of \ninternal storage cannot be expanded. ', id: 1, img: 'imgs/galaxy_s6.jpg', price: 360, …}
        // 1
        // : 
        // {cat: 'phone', desc: 'The Nokia Lumia 1520 is powered by 2.2GHz quad-cor…agon 800 processor and it comes with 2GB of RAM. ', id: 2, img: 'imgs/Lumia_1520.jpg', price: 820, …}
        // 2
        // : 
        // {cat: 'phone', desc: 'The Motorola Google Nexus 6 is powered by 2.7GHz q…ragon 805 processor and it comes with 3GB of RAM.', id: 3, img: 'imgs/Nexus_6.jpg', price: 650, …}
        // 3
        // : 
        // {cat: 'phone', desc: 'The Samsung Galaxy S7 is powered by 1.6GHz octa-co… can be expanded up\n to 200GB via a microSD card.', id: 4, img: 'imgs/galaxy_s6.jpg', price: 800, …}
        // 4
        // : 
        // {cat: 'phone', desc: 'It comes with 1GB of RAM. The phone packs 16GB of …r and a \n1.2-megapixel front shooter for selfies.', id: 5, img: 'imgs/iphone_6.jpg', price: 790, …}
        // 5
        // : 
        // {cat: 'phone', desc: 'Sony Xperia Z5 Dual smartphone was launched in Sep…s by 1920 pixels at a PPI of 424 pixels per inch.', id: 6, img: 'imgs/xperia_z5.jpg', price: 320, …}
        // 6
        // : 
        // {cat: 'phone', desc: 'The HTC One M9 is powered by 1.5GHz octa-core Qual… can be expanded up to 128GB via a microSD card. ', id: 7, img: 'imgs/HTC_M9.jpg', price: 700, …}
        // 7
        // : 
        // {cat: 'notebook', desc: 'Sony is so confident that the VAIO S is a superior… notebook is better, thanks to a \nlighter weight.', id: 8, img: 'imgs/sony_vaio_5.jpg', price: 790, …}
        // 8
        // : 
        // {cat: 'notebook', desc: 'REVIEW\n \nSony is so confident that the VAIO S is a…splay, more \nstorage space, and a Blu-ray drive. ', id: 9, img: 'imgs/sony_vaio_5.jpg', price: 790, …}
        // length
        // : 
        // 9
        // [[Prototype]]
        // : 
        // Array(0)
        // LastEvaluatedKey
        // : 
        // {id: '9'}
        // [[Prototype]]
        // : 
        // Object
    })

    it.only("Iniciar sesión por UI", () => {
        cy.visit("/")
        cy.intercept('POST', '**/login').as('loginCall')

        cy.get('#login2').click()
        cy.get('#loginusername').type(Cypress.env("username"), {force:true, delay: 100})
        cy.get('#loginpassword').type(Cypress.env("password"), {force:true, delay: 100})
        cy.get('#logInModal .btn-primary').click()

        cy.wait('@loginCall').then((interception) => {
        console.log(interception.response.body)
        })
        })


})


