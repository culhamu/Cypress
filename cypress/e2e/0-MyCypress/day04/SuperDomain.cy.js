/// <reference types="Cypress" />

describe('SuperDomain', () => {
    it('Aynı class ta iki farkli visit', () => {
        cy.visit('https://www.amazon.com')
        cy.visit('https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A13896617011&ref=nav_em__nav_desktop_sa_intl_computers_tablets_0_2_6_4')
        //cy.visit('https://www.google.com')
    });
    it('Farkli adres', () => {
        cy.visit('https://www.google.com')
    });
});