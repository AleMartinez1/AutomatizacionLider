describe('Transacciones BDP Un Click', function () {

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



    it('01 - Filtrar ', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > :nth-child(1)').click()
        cy.get(':nth-child(1) > ._input_label__gfcd1 > ._input_input__PipBM').type('219929366')
        cy.wait(1500)
        cy.get('._button_BlueButton__YhRsF')
        cy.wait



    })





})