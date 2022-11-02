///<reference types="Cypress"/>

describe('Login', function () {

    beforeEach(function () {
      cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
      cy.wait(2000)
        
    })

    it.only('Login exitoso', function () {
        cy.loginBackoffice()
    })

    


})