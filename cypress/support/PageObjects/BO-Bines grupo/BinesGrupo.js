class BinesGrupo{
    agregarNuevoBinGrupo(){
        return cy.get('._button_icon__iS_fm > p')
    }
    descripcionCampoBinGrupo(){
        return cy.get('#description')
    }
    mensajeCampoBinGrupo(){
        return cy.get('#message')
    }
    btnGuardarBinGrupo(){
        return cy.get('.modals_modalColumn__3CEB4 > :nth-child(3) > ._button_BlueButton__YhRsF')
    }
    seHaGuardadoBinGrupo(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    btnEditarBinGrupo(){
        return cy.get(':nth-child(1) > [style="text-align: end;"] > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="edit"]')
    }
    descripcionEditarCampoBinGrupo(){
        return cy.get('#description')
    }
    mensajeEditarCampoBinGrupo(){
        return cy.get('#message')
    }
    btnGuardarEdicionBinGrupo(){
        return cy.get('.modals_modalColumn__3CEB4 > :nth-child(3) > ._button_BlueButton__YhRsF')
    }
    btnSeHaEditadoBinGrupo(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    btnEliminar(){
        return cy.get(':nth-child(1) > :nth-child(5) > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="trash"]')
    }
    btnEliminarRegistroBines(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    seHaEliminadoBines(){
        return cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF')
    }
    campoFiltroDescripcion(){
        return cy.get('._input_input__PipBM')
    }
    btnBuscarFiltro(){
        return cy.get('._button_BlueButton__YhRsF')
    }
    linkLimpiarFiltro(){
        return cy.get('._button_BlueButton__YhRsF')
    }

}


export default BinesGrupo;