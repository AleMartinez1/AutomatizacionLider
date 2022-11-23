describe('Transacciones Recaudaciones', function () {

    //Solucion a uncaught:exception
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })


    beforeEach(function () {
        // ingresamos a la pagina 

        cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
        cy.loginBackoffice()
       // cy.viewport(2350, 1750)
    })



    it('01 - Filtrar por Rut pagador', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(1)').click()
        cy.get(':nth-child(2) > [style="width: 100%; display: flex; justify-content: space-between; align-items: center; cursor: pointer;"]').click()
        cy.get('.animate__animated > p').click()
        cy.get(':nth-child(3) > ._input_label__gfcd1 > ._input_input__PipBM').type('15.341.117-4')
        cy.wait(1500)
        cy.get('._button_BlueButton__YhRsF').click(        )
        cy.get(':nth-child(1) > [style="width: 10%;"]').click()
        cy.get('.modal_modalStyle__k3eyN > h2').should('contain.text','Detalles Log Mensaje')


    })





})