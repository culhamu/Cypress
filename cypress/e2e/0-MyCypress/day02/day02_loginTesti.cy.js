describe('qualitydemy sitesi login olma', () => {
    beforeEach(() => {
        cy.visit('https://qa.qualitydemy.com/login')
    });
    it('qualitydemy sitesi login test', () => {
      //1. yol
        cy.get('.cookieButton > a').click()
       // cy.get('.btn-sign-in-simple').click()

        //2.yol
       // cy.contains('Log in').click()

        //3. yol
        cy.contains('log in',{matchCase:false}).click()
        
        cy.get('#login-email').type('mb@babayigit.net')
        cy.get('#login-password').type('M123456.b{enter}')
       // cy.get('#sign_up > :nth-child(3) > .btn').click()
    });
});