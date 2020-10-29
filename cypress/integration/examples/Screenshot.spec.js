describe("Screenshot", ()=> {
    it("Take complete page ss", ()=> {
        cy.screenshot({capture: 'fullPage'})
    })

    it("single element ss", ()=> {

        cy.get('#id').screenshot()
    })
})