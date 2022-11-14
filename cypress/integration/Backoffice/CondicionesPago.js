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
        cy.wait(2000)

    })

    it('Agregar nueva condicion de pago solo con cantidadCuentasISO', function () {

        let numeroAleatorio = Math.floor(Math.random()*31)+1;

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getInputCantidadCuotasISO().type(numeroAleatorio)
        condicionPagoPage.getBtnGuardarCondicionPago().click()
        cy.wait(2000)

    })

    it('Agregar nueva condicion de pago solo con Descripcion', function () {

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getInputDescripcion().type('descripcion test')
        condicionPagoPage.getBtnGuardarCondicionPago().click()
        cy.wait(2000)

    })

    it('Agregar nueva condicion de pago con campos vacios', function () {

        condicionPagoPage.getAgregarNuevaCondicion().click()
        condicionPagoPage.getBtnGuardarCondicionPago().click()
        cy.wait(2000)

    })

    it('editar condicion de pago exitoso', function () {

        let numeroAleatorio = Math.floor(Math.random()*31)+1;

        condicionPagoPage.getBtnEditar().click()
        condicionPagoPage.getInputDescripcion().clear().type('editar Test')
        condicionPagoPage.getInputCantidadCuotasISOEditar().clear().type(numeroAleatorio)
        condicionPagoPage.getBtnGuardarEditar().click()
        condicionPagoPage.getBtnConfirmarEdicion().click()
    })

    it('editar condicion de pago solo campo cantidadCuotasISO', function () {

        let numeroAleatorio = Math.floor(Math.random()*31)+1;

        condicionPagoPage.getBtnEditar().click()
        condicionPagoPage.getInputDescripcion().clear()
        condicionPagoPage.getInputCantidadCuotasISOEditar().clear().type(numeroAleatorio)
        condicionPagoPage.getBtnGuardarEditar().click()
        condicionPagoPage.getBtnConfirmarEdicion().click()
    })

    it('editar condicion de pago solo campo descripcion', function () {

        condicionPagoPage.getBtnEditar().click()
        condicionPagoPage.getInputDescripcion().clear().type('editar Test')
        condicionPagoPage.getInputCantidadCuotasISOEditar().clear()
        condicionPagoPage.getBtnGuardarEditar().click()
    })

    it('editar condicion de pago con campos vacios', function () {

        condicionPagoPage.getBtnEditar().click()
        condicionPagoPage.getInputDescripcion().clear()
        condicionPagoPage.getInputCantidadCuotasISOEditar().clear()
        condicionPagoPage.getBtnGuardarEditar().click()
        
    })

    it('Eliminar condicion de pago', function () {
        condicionPagoPage.getBtnDelete().click()
        condicionPagoPage.getBtnConfirmarEliminar().click()
        condicionPagoPage.getBtnAceptarEliminarCorrectamente().click()
        cy.wait(2000)

    })

    //filtros

    it('Filtrar por descripcion', function () {

        condicionPagoPage.getInputDescripcionFiltro().type('cuotas')
        condicionPagoPage.getBtnBuscarCondicionesPagos().click()
        
        
    })

    it('Filtrar por identificador', function () {
        condicionPagoPage.getInputIdentificador().type('16')
        condicionPagoPage.getBtnBuscarCondicionesPagos().click()
        
    })

    it('Filtrar por descripcion e identificador', function () {

        condicionPagoPage.getInputIdentificador().type('16')
        condicionPagoPage.getInputDescripcionFiltro().type('cuotas')
        condicionPagoPage.getBtnBuscarCondicionesPagos().click()
        
    })

    


})