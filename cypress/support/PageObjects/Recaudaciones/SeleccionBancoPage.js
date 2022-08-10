class SeleccionBancoPage {

    getBancoSelect() {
        return cy.get('#typeofpay')
    }

    getSiguienteButton() {
        return cy.get('.styleButton_blueButton__SJ0lA')
    }

    getCancelarButton() {
        return cy.get('.styleButton_yellowButton__OwYg3')
    }


}
export default SeleccionBancoPage;