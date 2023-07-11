/// <reference types="Cypress" />
import { faker } from '@faker-js/faker';

describe('Faker Kullanimi', () => {
    //Kurulum islemi yapiyoruz
    //www.npmjs.com adresine gidiyoruz
    //npm install --save-dev @faker-js/faker ile kurulum yapilir
    //Cypress'te 3 farkli degisken tanimlamasi yapilir

    //1)let variablename=   deger atanabilir ve degistirilebilir
    //2)var variablename=   deger atanabilir ve degistirilebilir
    //3)const variablenam=  deger atanabilir ve degistirilemez

    //import { faker } from '@faker-js/faker';
    it('Automation Exercise Test', () => {
        
        cy.visit('https://www.automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        let firstname=faker.person.firstName('male')
        let lastname=faker.person.lastName()

        cy.get('[data-qa="signup-name"]').type(firstname+' '+lastname)

        let email=faker.internet.email()

        cy.get('[data-qa="signup-email"]').type(email)
        cy.get('[data-qa="signup-button"]').click()

        cy.get('#id_gender1').click()

        let password=faker.internet.password()
        cy.get('[data-qa="password"]').type(password)
        
        cy.get('[data-qa="first_name"]').type(firstname)
        cy.get('[data-qa="last_name"]').type(lastname)

        let adress=faker.location.streetAddress()
        cy.get('[data-qa="address"]').type(adress)

        cy.get('[data-qa="country"]').select(1)

        let state=faker.location.state()
        cy.get('[data-qa="state"]').type(state)

        let city=faker.location.city()
        cy.get('[data-qa="city"]').type(city)

        let zipcode=faker.location.zipCode('#####')
        cy.get('[data-qa="zipcode"]').type(zipcode)

        let phone=faker.phone.number('555-###-##-##')
        cy.get('[data-qa="mobile_number"]').type(phone)

        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('have.text','CREATED!')

 

    });
});