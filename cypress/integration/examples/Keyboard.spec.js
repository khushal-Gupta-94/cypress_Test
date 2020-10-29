describe("Keyboard operation", ()=> {
    it("press enter", ()=> {
        cy.visit("https://www.google.com/")
        cy.get(".gLFyf").type("Khushal {enter}")
        cy.log("Task Completed")
    })
})