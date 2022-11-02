
///<reference types="Cypress"/>

describe('Login', function () {

    beforeEach(function () {
      cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
      cy.wait(2000)
        
    })

    it.only('Login exitoso', function () {
        cy.loginBackoffice()
    })

    it('Login con datos incorrectos', function () {
        cy.get('#user').type('opoblete.ext')
        cy.get('#password').type('Lider20')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.get('.login_card__I_tRd > p').should('contain.text','El nombre de usuario y contraseña no coinciden, por favor inténtalo nuevamente.')
        cy.wait(2000)
    })

    it('Login solo con campo username', function () {
        cy.get('#user').type('opoblete.ext')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.get(':nth-child(3) > .login_headInput__uZX_2 > [style="color:#FF7280"]').should('contain.text','Contraseña es requerida')
    })

    it('Login solo con campo password', function () {
        cy.get('#password').type('Lider2022')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.get(':nth-child(2) > .login_headInput__uZX_2 > [style="color:#FF7280"]').should('contain.text','Nombre de usuario es requerido ')

    })

    it('Login sin completar campos', function () {
        cy.get('._button_BlueButton__YhRsF').click()
        cy.get(':nth-child(2) > .login_headInput__uZX_2 > [style="color:#FF7280"]').should('contain.text','Nombre de usuario es requerido ')
        cy.get(':nth-child(3) > .login_headInput__uZX_2 > [style="color:#FF7280"]').should('contain.text','Contraseña es requerida')
    })


})