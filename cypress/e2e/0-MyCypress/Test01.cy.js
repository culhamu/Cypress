describe('Temel Cypress Komutlari', () => {
    it('cy.visit.komutu', () => {
        cy.visit('/')//base url tanımlaniysa
       cy.visit('https://www.amazon.com')//base url tanımlı değilse

    });

    it('cy.visit komutu.2', () => {
        cy.visit('/about-us')
    });

    it.skip('cy.title.komutu', () => {//skip komutu bu testin es gecilmesini saglar
        cy.visit('/')
        cy.title().should('eq','Wise Quarter Course – Deliver more than expected')
        cy.title().should('include','expected')
        cy.title().should('contain','Deliver')
    });
    it.only('cy.url ve cy.location', () => {//only komutu ise sadece o testin calismasini saglar
        cy.visit('/')
        cy.url().should('eq','https://wisequarter.com/')
        cy.url().should('include','wisequarter')
        cy.location('pathname').should('eq','/about-us')
        
    });

   
});