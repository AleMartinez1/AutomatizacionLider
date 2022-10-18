import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import SeleccionMontoPage from '../../../../support/PageObjects/Recaudaciones/SeleccionMontoPage'
import SeleccionBancoPage from '../../../../support/PageObjects/Recaudaciones/SeleccionBancoPage'

const seleccionMontoPage = new SeleccionMontoPage()
const seleccionBancoPage = new SeleccionBancoPage()

//Solucion a uncaught:exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('un usuario que desea pagar su estado de cuenta', () => {
    cy.visit("https://botondepagodev.retailcard.cl/frontend/testing")
    cy.wait(2000)
    cy.formularioQA()
    cy.wait(10000)

})

And('selecciona pagar el monto facturado mensual', () => {
    seleccionMontoPage.getMontoFacturadoRadioButton().click()
})

And('ingresa su correo electronico {word}', (email) => {
    seleccionMontoPage.getEmailInput().type(email)
})

When('presiona siguiente', () => {
    seleccionMontoPage.getSiguienteButton().click({ force: true })
})

