class BasePage {
    pause(millisecond) {
        cy.wait(millisecond)
    }
}

export default BasePage