

describe('WriteandRead Files', () => {
    it('Write Files', () => {
        cy.writeFile('C:/Users/musta/OneDrive/Masaüstü/My Cypress Framework/cypress/fixtures/örnek.json','{\n"username":"mb@babayigit.net"\n}')
    });
});