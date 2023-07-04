describe('Locate alma', () => {
    it('cy.get komutu', () => {
        cy.visit('/')
        cy.get('#APjFqb').type('cypress{enter}')
        cy.get('div#hdtb-msb div:nth-child(2) > a').click
    });
});