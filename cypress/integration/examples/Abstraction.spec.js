class HomePage {
    static loadPage(){
        cy.visit("https://www.google.com/")
    }

    static wait(number){
        cy.wait(number)
    }
}

class childPage extends HomePage {
    static pageRefresh(){
        cy.reload()
    }
}

describe("Abstraction property used", ()=> {
    
    before(function() {
        //run before  all tests inside describe
        //setup test data or test context
        // seed or reset the database
        childPage.loadPage()
    })

    after(function() {

        //run after all test inside describe
        //test clean up
        //clean cookies and local storage

    })

    beforeEach(function() {
        // run before each it block
    })

    afterEach(function() {
        //run after each it block
    })

    it("Test by calling methods", ()=> {
        childPage.wait(1000)
        childPage.pageRefresh()
    })
    
})