const { default: BasePage } = require("../../page-Objects/BasePage")

import BasePage from '../../page-Objects/BasePage'


describe("Use pageobject model test", ()=> {

    it('test page object', ()=> {
        const basepage = new BasePage()
        basepage.pause(1000)
    })
})