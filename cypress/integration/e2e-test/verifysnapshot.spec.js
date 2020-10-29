const pages = ["http://zero.webappsecurity.com/index.html"]

const size = ["iphone-6", [1200,800]]

describe("verify snapshot test", ()=> {

    // it("snapshot test", ()=> {
    //     cy.visit('http://zero.webappsecurity.com/index.html')
    //     cy.matchImageSnapshot()
    // })
    size.forEach(size => {
        pages.forEach(page => {
        it(`Should match ${page} in resolution ${size}`, ()=> {
            let currentTime = new Date(Date.UTC(2020,1,1)).getDate()
            cy.clock(currentTime) 
            cy.setResolution(size)
            cy.visit(page)
            cy.matchImageSnapshot()
            //for single element
            //cy.get('h1').matchImageSnapshot()
        })
        })
    })
})