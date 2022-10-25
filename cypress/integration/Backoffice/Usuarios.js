///<reference types="Cypress"/>

describe('Usuarios', function () {

    beforeEach(function () {

        cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
        cy.wait(2000)

        cy.get('#user').type('opoblete.ext')
        cy.get('#password').type('Lider2022')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.get('h1').should('contain.text', 'Administrador Transaccional')

    })

    it('Alta Usuarios exitoso', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('._button_icon__iS_fm > p').click()
        cy.get('#userName').type('Prueba Cuatro')
        cy.get(':nth-child(1) > ._input_label__gfcd1 > #name').type('Test Cuatro')
        cy.get('#email').type('sofitestCuatro@gmail.com')
        cy.get('#habilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()
        cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()
        cy.wait(2000)

    })

    it('Alta Usuarios solo con campo userName', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('._button_icon__iS_fm > p').click()
        cy.get('#userName').type('Prueba Dos')
        cy.get('#habilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()
        cy.wait(2000)
    })

    
    it('Alta Usuarios solo con campo NombreApellido', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('._button_icon__iS_fm > p').click()
        cy.get(':nth-child(1) > ._input_label__gfcd1 > #name').type('Test Dos')
        cy.get('#habilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()
        cy.wait(2000)
    })

    it('Alta Usuarios solo con campo Mail', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('._button_icon__iS_fm > p').click()
        cy.get('#email').type('sofitest@gmail.com')
        cy.get('#habilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()
        cy.wait(2000)
    })

    it('Alta Usuarios sin completar campos', function () {

        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('._button_icon__iS_fm > p').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()
        cy.wait(2000)
    })

    it('Eliminar Usuario', function () {
        
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('[style="background-color: rgb(233, 240, 246);"]').click()
        cy.get(':nth-child(4) > :nth-child(6) > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="delete"]').last().click()
        cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()
        cy.wait(3000)
        cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()
       
    }) 

    it('Editar Usuario correctamente', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get(':nth-child(1) > :nth-child(5) > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="edit"]').first().click()
        cy.get(':nth-child(1) > ._input_label__gfcd1 > #name').clear().type('Editar Uno')
        cy.get('#email').clear().type('abcEditar@lan.cl')
        cy.get('#deshabilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()  
        cy.wait(3000)
    })

    it('Editar Usuario sin completar campos', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get(':nth-child(1) > :nth-child(5) > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="edit"]').first().click()
        cy.get(':nth-child(1) > ._input_label__gfcd1 > #name').clear()
        cy.get('#email').clear()
        cy.get('#deshabilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()  
        cy.wait(3000)
    })
    it('Editar Usuario solo con un campo', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get(':nth-child(1) > :nth-child(5) > [style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"] > [alt="edit"]').first().click()
        cy.get(':nth-child(1) > ._input_label__gfcd1 > #name').clear()
        cy.get('#email').clear().type('hola@mail.com')
        cy.get('#deshabilitado').click()
        cy.get(':nth-child(4) > ._button_BlueButton__YhRsF').click()  
        cy.wait(3000)
    })
    it('Filtrar usuario por Usuario', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('#user').type('usuarioPrueba')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.wait(3000)

    })
    it('Filtrar usuario por Nombre', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('#name').type('Felipe')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.wait(3000)
    })
    it('Buscar el nombre por el usuario', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('#user').type('Felipe')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.wait(3000)
        cy.get('.table_messageTextAlerts__aTUYB > p').should('contain.text','Lo sentimos, el servicio no se encuentra disponible en este momento. Por favor, inténtalo nuevamente')

    })
    it('Buscar el usuario por el Nombre', function () {
        cy.get('.sidebar_body__mAqjs > :nth-child(2)').click()
        cy.get('.animate__animated > p').click()
        cy.get('#name').type('usuarioPrueba')
        cy.get('._button_BlueButton__YhRsF').click()
        cy.wait(3000)
        cy.get('.table_messageTextAlerts__aTUYB > p').should('contain.text','Lo sentimos, el servicio no se encuentra disponible en este momento. Por favor, inténtalo nuevamente')
    })



})