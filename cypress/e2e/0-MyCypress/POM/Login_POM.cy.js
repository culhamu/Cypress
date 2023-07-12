import Homepage from "./LoginPage.cy";

describe('POM ile login', () => {
    it('Login testi', () => {
        const homepage = new Homepage()
        cy.visit('https://qa.qualitydemy.com/')
        homepage.getLoginlink
    });
});