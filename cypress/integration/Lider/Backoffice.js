
///<reference types="Cypress"/>

describe('Regresion Backoffice', function () {

    beforeEach(function () {
      cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
      cy.wait(2000)
    })

    it('Login', function () {
    
        
        cy.get('#user').type('opoblete.ext')
        cy.get('#password').type('Lider2022')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.get('h1').should('contain.text','Administrador Transaccional')

        //Alta usuarios

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('._button_icon__iS_fm > p').click()
        cy.get('#userName').type('Sofi')
        cy.get(':nth-child(1) > ._input_label__gfcd1 > #name').type('Sofi Test')
        cy.get('#email').type('sofiaFerrazzano@landscape.cl')
        cy.get('#habilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()
        cy.get(':nth-child(4) > h2').should('contain.text','Se ha guardado el registro de usuarios')
        cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()

    })

    

})