
describe('POST Create', () => {

    const bodyRequest={"name":"Murat","salary":20000}
    it('Test', () => {
        
        cy.request({
            url:'https://dummy.restapiexample.com/api/v1/create',
            method:'POST',
            body:{"name":"Muhsin","salary":20000,"age":30}

        })
    });

    it('Test 02', () => {
        
        cy.request({
            url:'https://dummy.restapiexample.com/api/v1/create',
            method:'POST',
            body:bodyRequest

        }).then
    });
});