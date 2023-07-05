describe('', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('google 3 idiot', () => {
        cy.get('#APjFqb').type('3 idiot{enter}')
        
        
    });
    it('google er ryan kurtarmak armasi', () => {
        cy.get('#APjFqb').type('Er ryan kurtarmak{enter}')
    });
});