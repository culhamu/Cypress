import Homepage from "../../POM/Homepage.cy";
import LoginPage from "../../POM/LoginPage.cy";
describe('POM ile Login', () => {
    it('Login testi', () => {
        const homePage = new Homepage()
        const loginPage=new LoginPage()   
       
        //cy.get('.btn-sign-in-simple').click()
        homePage.getVisit()
        homePage.getLoginlink().click()
        loginPage.getUserEmail()
        loginPage.getPasswordBox()
        loginPage.getLoginButton()
        loginPage.getAssert()
        
    });
    
});




