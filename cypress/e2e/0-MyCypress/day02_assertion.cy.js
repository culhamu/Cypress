//// <reference types=”Cypress” />
describe('', () => {
    beforeEach(() => {
        cy.visit('https://qa.qualitydemy.com/login')
    });
    it('', () => {
        cy.get('.cookieButton > a').click()

        cy.get('.btn-sign-in-simple').should('have.text','Log in')
        cy.get('.btn-sign-in-simple').click()
        cy.url().should('include','login')
        
    });
});