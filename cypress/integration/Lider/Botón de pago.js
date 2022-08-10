/// <reference types="Cypress"/>

import ClientesPage from '../../support/PageObjects/BDP/ClientesPage'
import NoClientesPage from '../../support/PageObjects/BDP/NoClientesPage'

describe('Tests', function () {

    const clientesPage = new ClientesPage()
    const noClientesPage = new NoClientesPage()

    beforeEach(function () {
        cy.visit("https://190.151.104.181/NuevoSitioBDP/payment?token=eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJ5VWJ2RXlIUE5sOUpsamNCMHlMVS11SmQ5ZUtBUVUza3A1aXY1cFA0YVNrIn0.eyJleHAiOjE2NTkxMjA1MDAsImlhdCI6MTY1OTEyMDIwMCwianRpIjoiZjQ2OWFhNWQtMDRlNC00NDZhLWFkYzUtNjMwODk5NjIwNTQ0IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay1kZXYucmV0YWlsY2FyZC5jbC9hdXRoL3JlYWxtcy9ib3RvbnBhZ28iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiNjc5ZmQyZjEtZDM3NC00NzlhLWI2YzMtNmI0ODE2N2IzYjFmIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiYm90b25wYWdvIiwic2Vzc2lvbl9zdGF0ZSI6ImQ2ZjcwMzcyLWYyOTctNDBmZC1iNDIzLTI0YjI5ZmNhYmM1NyIsImFjciI6IjEiLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoicHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIyMTk5MjkzNjYiLCJ1cmwiOiJodHRwczovL2dvb2dsZS5jbCJ9.g4QPjDUyRoUND0qWeas_zGKKKQQueh3_qwy-dmgoRE71rVTuejVw46uu8fL18V2yJ1RIMvLiwyiKVncUN6QFUUn_OPj18myAseHJgBYjS5oFkUtfU2EagDIAcjcb46oCt8LhjwiSfZjCmw4RFYKEvX4pMplqdvYUwB8JXZCmHvrKNjlflykP8qn6UflxMzNJBScw_1NYSVgueRk7beLNo6o-YuqhH8HeyjRGg_vLm8BHBmWcfps4UKm8WhdlJWj0bx41fOZKgNaBVcLjGds4IdCk_8QdHwClV8aPK5GYRLLcsle7qdPzBhkcvPCCDDGBCks5dDoohDrYPHI2nTNe5A")
    })

    it.only('Campos requeridos', function () {

        cy.get(':nth-child(8) > input').click() // pagar
        cy.get('#expirationDate-error').should('contain.text', 'Fecha de vencimiento es requerido')
        cy.get('#cvv-error').should('contain.text', 'CVV es requerido')
        cy.get('#pin-error').should('contain.text', 'Clave PIN es requerida')
        cy.get('#installment-error').should('contain.text', 'Seleccione una opción.')

    })

    it('Caso exitoso', function () {

        cy.asersionesTextos()

        clientesPage.getExpirationDateInput().type(04 / 26)
        clientesPage.getCvvInput().type('673')
        clientesPage.getPinInput().type('6000')
        clientesPage.getCuotasSelect().select('3 cuotas')
        clientesPage.getPagarButton().click()

    })

    it('Pagar con otra tarjeta', function () {

        cy.asersionesTextos()
        noClientesPage.getOtraTarjetaButton().click()
        noClientesPage.getRutInput().type('')
        noClientesPage.getNumeroTarjetaInput().type('')
        clientesPage.getExpirationDateInput().type(04 / 26)
        clientesPage.getCvvInput().type('673')
        clientesPage.getPinInput().type('6000')
        clientesPage.getCuotasSelect().select('3 cuotas')
        clientesPage.getPagarButton().click()

    })

    it('Datos incorrectos', function () {
        cy.asersionesTextos()
        clientesPage.getExpirationDateInput().type(01 / 25)
        clientesPage.getCvvInput().type('123')
        clientesPage.getPinInput().type('0000')
        clientesPage.getCuotasSelect().select('3 cuotas')
        clientesPage.getPagarButton().click()
        cy.ErrorGroup1()

    })


    it('Tiempo de espera', function () {

        // cy.wait(000) ---->consultar tiempo de sesion activa
        //cy.get('#cardRegistration > .back > a') //volver a la orden de pago

    })


})