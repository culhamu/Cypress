
describe('Dummy Assertion', () => {

    const requestUrl='https://dummy.restapiexample.com/api/v1/employees'


    it('Dummy assert', () => {
        cy.request(requestUrl).should((response => {
            assert.equal(response.body.data[13].id,14)
            assert.equal(response.body.data[13].employee_age,43)
            assert.equal(response.body.data[13].employee_name,'Haley Kennedy')
        }))
    });
});