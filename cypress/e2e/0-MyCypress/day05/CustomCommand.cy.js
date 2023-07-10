/// <reference types="Cypress" />

describe('Custom Command', () => {
    it.skip('Pozitif Login Testi 1', () => {
       cy.visit('https://qa.qualitydemy.com/')
       cy.get('.btn-sign-in-simple').click()
       cy.get('#login-email').type('mb@babayigit.net')
       cy.get('#login-password').type('M123456.b{enter}')

    });
    it.skip('Komutla Login Testi', () => {
        
        cy.QualityDemyLogin('mb@babayigit.net','M123456.b')
    });
    it('Komutla Negatif Login Testi', () => {
        cy.QualityDemyLogin('mb@babayigit.net','M123456b')
    });
});