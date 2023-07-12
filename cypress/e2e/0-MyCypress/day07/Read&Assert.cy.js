describe('Read And Assert form files', () => {
    it('Read and Assert', () => {
        cy.readFile('cypress/fixtures/user.json').then((userdata) => {
            expect(userdata[7].name).to.equal('Nicholas Runolfsdottir V')
        })
    });
});