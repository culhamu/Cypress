/// <reference types="Cypress" />
describe('Dropdown Menu Locate alma', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/dropdown')
    });
    it('Dropdown Menu', () => {
        cy.get('#dropdown').select('Option 1').should('have.value',('1')) 
        cy.get('#dropdown').select('Option 2').should('have.value',('2'))
    });
});