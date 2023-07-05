///<reference types="Cypress"/>
describe('', () => {
    beforeEach(() => {
        cy.visit('http://www.automationexercise.com')  
    });
    it('', () => {
      /*
      TEST-2 Negatif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  baba71@gmail.com 123456 ile giriş yap
4-  Giriş yapılamadığını doğrula 
*/
cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
cy.get('[data-qa="login-email"]').type('baba71@gmail.com')
cy.get('[data-qa="login-password"]').type('123456{enter}')
cy.get('.login-form > form > p').should('include.text','Your email or password is incorrect!')
cy.log('Negatif Login Testi Yapildi')

    });
});