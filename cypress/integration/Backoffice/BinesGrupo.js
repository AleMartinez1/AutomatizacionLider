//<reference types="Cypress"/>

import MainBinesGrupo from '../../support/PageObjects/BO-Bines grupo/MainBinesGrupo'
import BinesGrupo from '../../support/PageObjects/BO-Bines grupo/BinesGrupo'

describe('Bines Grupo Test', function () {

    const mainBinesGrupo  = new MainBinesGrupo ()
    const binesGrupo = new BinesGrupo ()

    
    beforeEach(function () {
        
        cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
        cy.wait(2000)

        cy.loginBackoffice()
        mainBinesGrupo.getBotonDePagoUnClick().click()
        mainBinesGrupo.getBtAdministracion().click()
        mainBinesGrupo.getBtnBines().click()
        mainBinesGrupo.getBtnBinesGrupo().click()
    })

    it('Agregar nuevo Bin Grupo exitoso', function () {

        binesGrupo.agregarNuevoBinGrupo().click()
        binesGrupo.descripcionCampoBinGrupo().type('nueva descripcion')
        binesGrupo.mensajeCampoBinGrupo().type('nuevo mensaje')
        binesGrupo.btnGuardarBinGrupo().click()
        binesGrupo.seHaGuardadoBinGrupo().click()        
    })

    it('Agregar Bin Grupo solo con campo descripcion', function () {

        binesGrupo.agregarNuevoBinGrupo().click()
        binesGrupo.descripcionCampoBinGrupo().type('nueva descripcion')
        binesGrupo.btnGuardarBinGrupo().click()
    })

    it('Agregar Bin solo con campo mensaje', function () {

        binesGrupo.agregarNuevoBinGrupo().click()
        binesGrupo.mensajeCampoBinGrupo().type('nuevo mensaje')
        binesGrupo.btnGuardarBinGrupo().click()
        
    })

    it('Agregar nuevo Bin con campos vacios', function () {

        binesGrupo.agregarNuevoBinGrupo().click()
        binesGrupo.btnGuardarBinGrupo().click()  
    })
        

    it('editar Bin exitoso', function () {

        binesGrupo.btnEditarBinGrupo().last().click()
        binesGrupo.descripcionEditarCampoBinGrupo().clear().type('nueva descripcion')
        binesGrupo.mensajeEditarCampoBinGrupo().clear().type('nuevo mensaje')
        binesGrupo.btnGuardarEdicionBinGrupo().click()
        binesGrupo.btnSeHaEditadoBinGrupo().click()  

    })

    it('editar bin grupo solo con campo descripcion', function () {

        binesGrupo.btnEditarBinGrupo().click()
        binesGrupo.descripcionEditarCampoBinGrupo().clear().type('nueva descripcion')
        binesGrupo.btnGuardarEdicionBinGrupo().click()
    })

    it('editar bin grupo solo campo mensaje', function () {

        binesGrupo.btnEditarBinGrupo().click()
        binesGrupo.mensajeEditarCampoBinGrupo().clear().type('nuevo mensaje')
        binesGrupo.btnGuardarEdicionBinGrupo().click()
    })

    it('editar bin grupo con campos vacios', function () {

        binesGrupo.btnEditarBinGrupo().click()
        binesGrupo.btnGuardarEdicionBinGrupo().click()        
    })

    it('Eliminar Bin Grupo', function () {
        binesGrupo.btnEliminar().click()
        binesGrupo.btnEliminarRegistroBines().click()
        binesGrupo.seHaEliminadoBines().click()
    })


    it('Filtrar por descripcion', function () {
      binesGrupo.campoFiltroDescripcion().type('bin')  
      binesGrupo.btnBuscarFiltro().click()
    })

    it('Filtrar por id en el campo descripcion', function () {
       binesGrupo.campoFiltroDescripcion().type('48')
       binesGrupo.btnBuscarFiltro().click()
    })
  
    it('Filtrar por mensaje en el campo descripcion', function () {
        binesGrupo.campoFiltroDescripcion().type('nuevo')
        binesGrupo.btnBuscarFiltro().click()
    })

    it('Limpiar filtros', function () {
       binesGrupo.linkLimpiarFiltro().click()
    })

})