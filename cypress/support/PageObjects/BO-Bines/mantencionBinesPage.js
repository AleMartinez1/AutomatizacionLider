class mantencionBinesPage{

    getBtnCrearBin(){
        return cy.get('._button_icon__iS_fm > p')
    }
    getBtnInputBin(){
        return cy.get('#bin')
    }
    getInputCard(){
        return cy.get('#card')
    }
    getInputLargoTarjeta(){
        return cy.get('#longCard')
    }
    getInputDescripcion(){
        return cy.get('#description')
    }
    getSelectGrupo(){
        return cy.get('#group')
    }

    getBtnGuardarBin(){
        return cy.get('.modals_modalColumn__3CEB4 > :nth-child(4) > ._button_BlueButton__YhRsF')
    }
    getBtnSeGuardoBin(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }

    getBtnEliminarBin(){
        return cy.get(':nth-child(1) > :nth-child(6) > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="trash"]')
    }

    getBtnEliminarRegistroBin(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }

    getBtnSeEliminoBin(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    
    getInputLargoTarjetaFiltro(){
        return cy.get(':nth-child(1) > ._input_label__gfcd1 > ._input_input__PipBM')
    }
    getInputDescripcionFiltro(){
        return cy.get(':nth-child(2) > ._input_label__gfcd1 > ._input_input__PipBM')
    }
    getBtnBuscarFiltro(){
        return cy.get('._button_BlueButton__YhRsF')
    }

    getBtnLimpiarFiltro(){
        return cy.get('a')
    }

    getBtnEditarBin(){
        return cy.get(':nth-child(1) > [style="text-align: end;"] > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="edit"]')
    }

    getInputCardEditar(){
        return cy.get('#card')
    }
    getInputLargoTarjetaEditar(){
        return cy.get('#longCard')
    }

    getInputDescripcionEditar(){
        return cy.get('#description')
    }

    getInputGrupoEditar(){
        return cy.get('#group')
    }

    getBtnGuardarEdicion(){
        return cy.get('.modals_modalColumn__3CEB4 > :nth-child(4) > ._button_BlueButton__YhRsF')
    }
    getSeGuardoBinEditar(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }

}

export default mantencionBinesPage;