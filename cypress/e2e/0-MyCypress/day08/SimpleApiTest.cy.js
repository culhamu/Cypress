

describe('JSon Api Assertion', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'
    it('Api Aeertion1', () => {
        
        cy.request(requestUrl)
        .its('headers').its('date').should('include','Fri')
    });
});