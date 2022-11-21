//<reference types="Cypress"/>

import mainBinesPage from '../../support/PageObjects/BO-Bines/mainBinesPage'
import mantencionBinesPage from '../../support/PageObjects/BO-Bines/mantencionBinesPage'

describe('CondicionDePago', function () {

    const MainBinesPage = new mainBinesPage()
    const MantencionBinesPage = new mantencionBinesPage()

    beforeEach(function () {

        cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
        cy.wait(2000)

        cy.loginBackoffice()

        MainBinesPage.getBotonDePagoUnClick().click()
        MainBinesPage.getBtAdministracion().click()
        MainBinesPage.getBtnBines().click()
        MainBinesPage.getBtnBinesEntrar().click()

    })


    it('Agregar nuevo Bin exitoso', function () {

        let numeroAleatorio = Math.floor(Math.random() * 31) + 1;

        MantencionBinesPage.getBtnCrearBin().click()
        MantencionBinesPage.getBtnInputBin().type(numeroAleatorio)
        MantencionBinesPage.getInputCard().type('cardTest')
        MantencionBinesPage.getInputLargoTarjeta().type('Test')
        MantencionBinesPage.getInputDescripcion().type('testUNO')
        MantencionBinesPage.getSelectGrupo().click()
        MantencionBinesPage.getBtnSeGuardoBin().click()
    })

    it('Agregar Bin solo con card', function () {

        MantencionBinesPage.getBtnCrearBin().click()
        MantencionBinesPage.getInputCard().type('cardTest')
        MantencionBinesPage.getBtnSeGuardoBin().click()

        
    })

    it('Agregar Bin solo con Largo Tarjeta', function () {

        MantencionBinesPage.getBtnCrearBin().click()
        MantencionBinesPage.getInputLargoTarjeta().type('Test')
        MantencionBinesPage.getBtnSeGuardoBin().click()

        
    })


    it('Agregar nueva Bin solo con Descripcion', function () {

        MantencionBinesPage.getBtnCrearBin().click()
        MantencionBinesPage.getInputDescripcion().type('testUNO')
        MantencionBinesPage.getBtnSeGuardoBin().click()

        
    })
    it('Agregar nuevo Bin solo con el grupo', function () {

        MantencionBinesPage.getBtnCrearBin().click()
        MantencionBinesPage.getSelectGrupo().click()
        MantencionBinesPage.getBtnSeGuardoBin().click()

    })

    it('Agregar nueva condicion de pago con campos vacios', function () {

        
        MantencionBinesPage.getBtnCrearBin().click()
        MantencionBinesPage.getBtnInputBin().type()
        MantencionBinesPage.getInputCard().type('')
        MantencionBinesPage.getInputLargoTarjeta().type('')
        MantencionBinesPage.getInputDescripcion().type('')
        MantencionBinesPage.getSelectGrupo().click()
        MantencionBinesPage.getBtnSeGuardoBin().click()
    })
        

    it('editar Bin exitoso', function () {
        let numeroAleatorio = Math.floor(Math.random() * 31) + 1;

        MantencionBinesPage.getBtnEditarBin().click()
        MantencionBinesPage.getBtnInputBinEditar().clear().type(numeroAleatorio)
        MantencionBinesPage.getInputCardEditar().clear().type()
        MantencionBinesPage.getInputLargoTarjetaEditar().clear().type('16')
        MantencionBinesPage.getInputDescripcionEditar().clear().type('texto editado')
        MantencionBinesPage.getSelectGrupo().clear().click()
        MantencionBinesPage.getBtnGuardarEdicion().click()
        MantencionBinesPage.getSeGuardoBinEditar().click()

    })

    it('editar condicion de pago solo campo Bin y Card', function () {

        let numeroAleatorio = Math.floor(Math.random() * 31) + 1;

        MantencionBinesPage.getBtnEditarBin().click()
        MantencionBinesPage.getBtnInputBinEditar().clear().type(numeroAleatorio)
        MantencionBinesPage.getInputCardEditar().clear().type()
        MantencionBinesPage.getBtnGuardarEdicion().click()
    })

    it('editar condicion de pago solo campo descripcion', function () {

        MantencionBinesPage.getBtnEditarBin().click()
        MantencionBinesPage.getInputDescripcionEditar().clear().type('texto editado')
        MantencionBinesPage.getBtnGuardarEdicion().click()
    })

    it('editar condicion de pago con campos vacios', function () {

        MantencionBinesPage.getBtnEditarBin().click()
        MantencionBinesPage.getBtnInputBinEditar().clear().click()
        MantencionBinesPage.getInputCardEditar().clear()
        MantencionBinesPage.getInputLargoTarjetaEditar().clear().click()
        MantencionBinesPage.getInputDescripcionEditar().clear()
        MantencionBinesPage.getSelectGrupo().clear().click()
        MantencionBinesPage.getBtnGuardarEdicion().click()
        
    })

    it('Eliminar condicion de pago', function () {
        MantencionBinesPage.getBtnEliminarBin().click()
        MantencionBinesPage.getBtnEliminarRegistroBin().click()
        MantencionBinesPage.getBtnSeEliminoBin().click()
    })


    it('Filtrar por descripcion', function () {
        MantencionBinesPage.getInputDescripcionFiltro().type('condicion pago')
        MantencionBinesPage.getBtnBuscarFiltro().click()
    })

    it('Filtrar por largo tarjeta ', function () {
        MantencionBinesPage.getInputLargoTarjetaFiltro().type('16')
        MantencionBinesPage.getBtnBuscarFiltro().click()
    })

    it('Filtrar por descripcion e identificador', function () {
        MantencionBinesPage.getInputLargoTarjetaFiltro().type('13')
        MantencionBinesPage.getInputDescripcionFiltro().type('condicion pago')

        MantencionBinesPage.getBtnBuscarFiltro().click()
    })

    it('Limpiar filtros', function () {
        MantencionBinesPage.getInputLargoTarjetaFiltro().type('13')
        MantencionBinesPage.getInputDescripcionFiltro().type('condicion pago')
        MantencionBinesPage.getBtnLimpiarFiltro().click()
    })

})