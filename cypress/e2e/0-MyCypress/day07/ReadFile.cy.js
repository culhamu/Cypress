
describe('WriteandRead Files', () => {
    it('Read File', () => {
       cy.readFile('C:/Users/musta/OneDrive/Masaüstü/My Cypress Framework/cypress/fixtures/örnek.json').should('contain','babayigit') 
    });
});