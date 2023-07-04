context('context kullanimi', () => {
    it('google ziyaret', () => {
       cy.visit('https://www.google.com')
       cy.title().should('contains','Google')
    });
});