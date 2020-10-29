describe("First Automation code", ()=> {
    it.skip("Exception Test", ()=> {
        //assertion
        expect(true).to.equal(true)

        // open google.com with wait for 10 sec.
        cy.visit("https://www.google.com/", {timeout : 10000})

        //validate that google page is opened or not
        cy.url().should("include","google.com")

        //validate that gmail is present or not
        cy.get("div.gb_h a.gb_g").first().should("be.visible").should("have.text","Gmail")

        //reload the page
        cy.reload()

        // used to check count of the elements
     //   cy.get('.tile').its('length').should("have.length",11)


    })

     it.skip("Assignment", ()=> {

        //calling login fuction written in command.js file
        cy.login()

         //override time
         const date = new Date().getTime()
         cy.clock(date)
         cy.log(date)   

         cy.visit("http://books.toscrape.com/index.html")
         cy.clearCookies({ log: true })
         cy.clearLocalStorage("local storage is clear",{ log: true })
         cy.title().should('include','title of the page')

         cy.url().should('include','/index.html')
         cy.log('Website is launched successfully.')

         cy.contains('Poetry').click()
         cy.url().should('include','/poetry_23')
         cy.log('Poetry page is opened successfully')

         cy.get('a').contains('Olio').click()
         cy.url().should('include','olio_984')
         cy.log('Olio product page is opened successfully')

         cy.get('p.price_color').first().should('have.text','£23.88')
     })

     it('Assignment 2', ()=> {
        
        //give alias
        cy.get('#id').as('id')
        cy.get('@id').click()

        //for inserting input
        cy.get('#id').clear()
        cy.get('#id').type('Used to insert text')
     })

    // it("Wait and pause", ()=> {
    //     // wait for 3 sec
    //     cy.wait(3000)
    //     // to pause script
    //     cy.pause()
    // })
})
