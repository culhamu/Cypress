
describe('POST işlemi', () => {

    const requestUrl='https://jsonplaceholder.cypress.io/comments'
    it('Test', () => {
        
        cy.request('POST',requestUrl,{

            userId:501,
            title:"Cypress Test Operation",
            body:"JSon",
            name:"Mustafa"
        }).should((response)=>{

            expect(response.body.name).to.eq("Mustafa")
            expect(response.body.title).to.eq("Cypress Test Operation")
        
          })
    });
});