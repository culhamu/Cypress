///<reference types="Cypress"/>
//Before - After İşlevleri
describe('', () => {
    before(() => {//Tüm testlerden önce bir kere çalışır
        cy.visit('https://www.google.com') 
  });
  beforeEach(() => { //Her bir testten önce bir kere çalışır
    cy.log('yeni bir test başlıyor')
  });
    it('google da 3 Idiots', () => {
        cy.get('#APjFqb').type('3 idiots{enter}')
        
    });
});




