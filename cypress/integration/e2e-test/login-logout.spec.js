describe("Login/logout functionality", ()=> {
   
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','/index.html')
        cy.get('#signin_button').click()
    })
    
    it("login with invalid username", ()=> {
        // cy.get('#login_form').should('be.visible')
        // cy.get('#user_login').type('invalid username')
        // cy.get('#user_password').type('invalid password')
        cy.login('invalid username','invaid password')
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
    })

    it("login with valid username", ()=> {
        cy.fixture('example').then(example => {
            const username = example.user
            const password = example.pwd
            cy.login(username, password)  
        })

        cy.url().should('include', '/account-summary.html')
    })

    it("logout from application", ()=> {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include','/index.html')
    })
})