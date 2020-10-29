describe('Device change', ()=> {
    
    it('720p', ()=> {
        cy.viewport(1280,720)
    })

    it('1080p', ()=> {
        cy.viewport(1980,1080)
    })
})