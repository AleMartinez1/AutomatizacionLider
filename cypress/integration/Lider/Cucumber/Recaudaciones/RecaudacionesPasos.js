import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

import SeleccionMontoPage from '../../../../support/PageObjects/Recaudaciones/SeleccionMontoPage'
import SeleccionBancoPage from '../../../../support/PageObjects/Recaudaciones/SeleccionBancoPage'

const seleccionMontoPage = new SeleccionMontoPage()
const seleccionBancoPage = new SeleccionBancoPage()

//Solucion a uncaught:exception
Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})

Given('el usuario desea pagar su estado de cuenta', () => {
    cy.visit("https://botondepagodev.retailcard.cl/frontend/testing")
    cy.wait(2000)
    cy.formularioQA()
    cy.wait(10000)

})

And('selecciona pagar el monto facturado mensual', () => {
    seleccionMontoPage.getMontoFacturadoRadioButton().click()
})

And('ingresa su correo electronico', () => {
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
})

When('presiona siguiente', () => {
    seleccionMontoPage.getSiguienteButton().click({ force: true })
})
Then('el usuario debe seleccionar el banco', () => {
    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA')
})
