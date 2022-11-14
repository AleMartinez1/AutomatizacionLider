class CondicionDePagoPage{

    getAgregarNuevaCondicion(){
        return cy.get('._button_icon__iS_fm > p')
    }

    getInputDescripcion(){
        return cy.get('#description')
    }
    
    getInputCantidadCuotasISO(){
        return cy.get('#iso')
    }

    getBtnGuardarCondicionPago(){
        return cy.get(':nth-child(3) > ._button_BlueButton__YhRsF')
    }

    getBtnEditar(){
        return cy.get(':nth-child(1) > [style="text-align: end;"] > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="edit"]')
    }
    
    getInputDescripcionEditar(){
        return cy.get('#description')
    }

    getInputCantidadCuotasISOEditar(){
       return cy.get('#iso')
    }

    getBtnGuardarEditar(){
        return cy.get(':nth-child(3) > ._button_BlueButton__YhRsF')
    }

    getBtnConfirmarEdicion(){
       return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    

    
    getBtnDelete(){
       return cy.get(':nth-child(1) > [style="width: 10%;"] > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="trash"]')
    }
    getBtnConfirmarEliminar(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    getBtnAceptarEliminarCorrectamente(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }

    getInputIndentificador(){
        return cy.get(':nth-child(1) > ._input_label__gfcd1 > ._input_input__PipBM')
    }

    getInputDescripcionFiltro(){
        return cy.get(':nth-child(2) > ._input_label__gfcd1 > ._input_input__PipBM')
    }

    getLimpiarFiltros(){
        return cy.get('a')
    }

    getBtnBuscarCondicionesPagos(){
        return cy.get('._button_BlueButton__YhRsF')
    }
    getBtnAceptarCondicionPago(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }


 
}

export default CondicionDePagoPage;