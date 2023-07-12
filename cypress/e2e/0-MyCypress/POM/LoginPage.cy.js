class Homepage{
    getLoginlink(){
        return cy.contains('log in',{matchCase:false})
    }
}
export default Homepage