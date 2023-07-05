///<reference types="Cypress"/>

/*
TEST  – 1 Pozitif
1-  http://www.automationexercise.com 
2-  Signup/Login sayfasına git
3-  “Login to your account” yazısının bulunduğunu doğrula
4-  “New User Signup!” yazısının varlığını doğrula
5-  babayigit@gmail.com 123456 ile giriş yap
6-  Giriş yaptığını doğrula
7-  Çıkış yap
8-  Çıkış yapıldığını doğrula



*/

describe('', () => {
    beforeEach(() => {
        cy.visit('http://www.automationexercise.com') 
    
    });
    it('', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('be.visible')
        cy.get('.signup-form > h2').should('have.text','New User Signup!')
        cy.get('[data-qa="login-email"]').type('babayigit@gmail.com')
        cy.get('[data-qa="login-password"]').type('123456{enter}')
        cy.get(':nth-child(10) > a').should('include.text','Logged in as Murat BABAYİĞİT')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('.login-form > h2').should('have.text','Login to your account')
        cy.log('Pozitif Login Testi Tamamlandi')
    });
});




