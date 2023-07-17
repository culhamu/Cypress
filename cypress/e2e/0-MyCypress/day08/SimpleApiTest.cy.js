

describe('JSon Api Assertion', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'
    it('Api Aeertion1', () => {
        
        cy.request(requestUrl)
        .its('headers').its('date').should('include','Fri')
    });

    it('Api Assertion 2', () => {
        cy.request({
            url:requestUrl,
            method: 'GET'
        }).its('headers').its('date').should('include','Fri')
    });
});