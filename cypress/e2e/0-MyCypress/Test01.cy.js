describe('Temel Cypress Komutlari', () => {
    it('cy.visit.komutu', () => {
        cy.visit('/')//base url tanımlaniysa
       cy.visit('https://www.amazon.com')//base url tanımlı değilse

    });

    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    });

    it('cy.title.komutu', () => {
        cy.visit('/')
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected')
        cy.title().should('include','expected')
        cy.title().should('contain','Deliver')
    });
    it.only('cy.url ve cy.location', () => {
        cy.visit('/')
        cy.url().should('eq','http://wisequarter.com')
        cy.url().should('include','wisequarter')
        
    });
   
});