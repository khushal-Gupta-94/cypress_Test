describe("Search Test", ()=> {

    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include','/index.html')
    })
    it("Verify opened page", ()=> {
        
        cy.get('#searchTerm').type('Hello {enter}')
    })

    it("verify result page", ()=> {
        cy.get('h2').contains('Search Results:')
    })
})