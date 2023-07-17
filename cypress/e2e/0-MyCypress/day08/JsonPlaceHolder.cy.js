describe('JSON place Holder Assert', () => {
    const requestUrl='https://jsonplaceholder.cypress.io/comments'
    /*
    {
    "postId": 2,
    "id": 6,
    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
    "email": ",'Presley.Mueller@myrl.com),
    "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  }
    */
    it('JSON PLace Holder Test', () => {
        cy.request(requestUrl).should((response =>{
            assert.equal(response.body[5].id,6)
            assert.equal(response.body[5].email,'Presley.Mueller@myrl.com')
            assert.equal(response.body[5].name,'et fugit eligendi deleniti quidem qui sint nihil autem')
        }))
        
    });
});




