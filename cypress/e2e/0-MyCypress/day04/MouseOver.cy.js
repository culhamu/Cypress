/// <reference types="Cypress" />

describe('Hover Over', () => {
    it('', () => {
        cy.visit('https://www.amazon.com')
        cy.get('.icp-nav-link-inner').trigger('mouseover')
        cy.wait(2000)
        cy.get('#nav-flyout-icp > .nav-template > #icp-flyout-mkt-change > .nav-text > .icp-mkt-change-lnk').click()
        cy.get('.a-dropdown-prompt').click()
        cy.get('.a-dropdown-prompt').select('Turkey')
    });
});