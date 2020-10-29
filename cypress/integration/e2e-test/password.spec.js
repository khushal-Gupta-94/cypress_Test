describe("Password Test", ()=> {

    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','/index.html')
    })

    it("should click on sign in button", ()=> {
        cy.get('#signin_button').click()
    })

    it("should click in forgot password", ()=> {
        cy.contains('Forgot your password ?').click()
        //cy.get('.offset3 > a').click()
        cy.url().should('include','/forgot-password.html')
    })
})