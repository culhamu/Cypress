/// <reference types="Cypress" />

describe('Amazon Search', () => {
    it.skip('Amazon Iphone Search', () => {
        cy.AmazonSearch('Iphone')
    });
    it('Amazon Search', () => {
        cy.AmazonSearch('Nutella')
    });
});