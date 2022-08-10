class NoClientesPage {

    getRutInput() {
        return cy.get('#rut')
    }

    getNumeroTarjetaInput() {
        return cy.get('div > #CardNumber')
    }

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

    getOtraTarjetaButton() {
        return cy.get('.link > a')
    } 

}
export default NoClientesPage;