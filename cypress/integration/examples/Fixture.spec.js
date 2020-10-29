describe("Using fixture data", ()=> {
    
    it("Demo Test", ()=> {

        cy.fixture('example').then(example => {
            const name = example.name
        })
         cy.log(name)
         cy.log("Task Completed")
    })
})