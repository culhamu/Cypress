class Homepage{
    getLoginlink(){
      return  cy.get('.btn-sign-in-simple')
    }
    getVisit(){
        return  cy.visit('https://qa.qualitydemy.com/')
    }
}
export default Homepage









