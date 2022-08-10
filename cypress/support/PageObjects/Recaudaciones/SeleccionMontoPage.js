class SeleccionMontoPage{

    getOpcionPagoText() 
    {
    return cy.get('.seccionPago_subtitle__3Nknu')
    }

    getMontoFacturadoRadioButton() 
    {
        return cy.get(':nth-child(3) > .selectTypePago_flexRow__a0R5w > .checkbox_container__8miTL > .checkbox_checkmark__tIoSP')
    }

    getMontoMinimoRadioButton() 
    {
        return cy.get(':nth-child(4) > .selectTypePago_flexRow__a0R5w > .checkbox_container__8miTL > .checkbox_checkmark__tIoSP') 
    }

    getMontoEleccionRadioButton() 
    {
        return cy.get(':nth-child(5) > .selectTypePago_flexRow__a0R5w > .checkbox_container__8miTL > .checkbox_checkmark__tIoSP')
    }

    getMontoEleccionInput() 
    {
        return cy.get('#amount')
    }

    getEmailInput() 
    {
        return cy.get('#email')
    }

    getSiguienteButton() 
    {
        return cy.get('.styleButton_blueButton__SJ0lA')
    }

    getCancelarButton() 
    {
        return cy.get('.styleButton_yellowButton__OwYg3')
    }

}
export default SeleccionMontoPage;