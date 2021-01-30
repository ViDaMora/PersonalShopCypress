describe('My First Cypress Test', () => {
    it('first assert', () => {
        expect(true).to.equal(true)
    })

  /*  it('first assert', () => {
        //AAA PATERN
        cy.visit('https://example.cypress.io') //ARRAGE 
        cy.contains('type').click()             //ACT
        cy.url().should('include','/commands/actions')//ASSERT 


        cy.get('.action-email')
            .type("morajara@udea.edu.co")
                .should('have.value','morajara@udea.edu.co')
    })*/
    
    
    it('Search Product Personal Shop', () => {
        //AAA PATERN
        cy.visit('http://localhost:8080/#/') //ARRAGE 
        cy.get("#search").clear().type("teclado {enter}")
        cy.get(".card-text").contains("Teclado").click()
    })
    
})