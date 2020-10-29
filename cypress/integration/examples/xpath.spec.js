describe("Use xpath for running test on chrome", ()=> {
    
    before(function() {
        cy.visit("https://www.google.com/")
    })
    it("Test method for xpath use", ()=> {
        cy.xpath("//input[@id='value']")
    })
})