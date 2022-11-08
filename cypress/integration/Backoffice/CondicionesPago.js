///<reference types="Cypress"/>

import CondicionDePagoPage from '../../support/PageObjects/BO-CondicionPago/CondicionPagoPage'
import MainPage from '../../support/PageObjects/BO-CondicionPago/MainPage'

describe('CondicionDePago', function () {

    const condicionPagoPage  = new CondicionDePagoPage()
    const mainPage = new MainPage()

    beforeEach(function () {

      cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
      cy.wait(2000)

      cy.loginBackoffice()

      mainPage.getBotonDePagoUnClick().click()
      mainPage.getBtAdministracion().click()
      mainPage.getBtCondicionesPago().click()
  
    })


    it('Agregar nueva condicion de pago exitoso', function () {

        let numeroAleatorio = Math.floor(Math.random()*31)+1;

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getInputDescripcion().type('descripcion test')
        condicionPagoPage.getInputCantidadCuotasISO().type(numeroAleatorio)
        condicionPagoPage.getBtnGuardarCondicionPago().click()
        condicionPagoPage.getBtnAceptarCondicionPago().click()
    })

    it('Agregar nueva condicion de pago solo con cantidadCuentasISO', function () {

        let numeroAleatorio = Math.floor(Math.random()*31)+1;

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getInputCantidadCuotasISO().type(numeroAleatorio)
        condicionPagoPage.getBtnGuardarCondicionPago().click()
    })

    it('Agregar nueva condicion de pago solo con Descripcion', function () {

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getInputDescripcion().type('descripcion test')
        condicionPagoPage.getBtnGuardarCondicionPago().click()
    })

    it('Agregar nueva condicion de pago con campos vacios', function () {

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getBtnGuardarCondicionPago().click()
    })
    
    it.only('Eliminar condicion de pago', function () {
        condicionPagoPage.getBtnDelete().click()
        condicionPagoPage.getBtnConfirmarEliminar().click()
        condicionPagoPage.getBtnAceptarEliminarCorrectamente().click()
    })

    


})