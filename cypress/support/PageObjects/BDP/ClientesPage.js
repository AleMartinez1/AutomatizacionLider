class ClientesPage {

    getExpirationDateInput() {
        return cy.get('#expirationDate')
    }

    getCvvInput() {
        return cy.get('#cvv')
    }

    getPinInput() {
        return cy.get('#pin')
    }

    getCuotasSelect() {
        return cy.get('#installment')
    }

    getPagarButton() {
        return cy.get(':nth-child(8) > input')
    }



}
export default ClientesPage;