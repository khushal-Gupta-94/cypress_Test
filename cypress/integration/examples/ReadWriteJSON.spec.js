describe("Read or write JSOn/ text file", () => {
    it("Write data into JSON file", () => {
        cy.writeFile("log.json", { name: "Khushal", age: 26 })
    })

    it("write to text file", () => {
        cy.writeFile("log1.txt", "Hello Khushal Gupta")
    })

    it("Read and verify data from JSON file", () => {
        cy.readFile("log.json").its("age").should("eq", 26)

        cy.readFile("log1.txt").should("eq", "Hello Khushal Gupta")

        cy.document().its("contentType").should("eq", "text/html")

        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })
})
