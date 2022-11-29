import 'cypress-file-upload';
//Recaudaciones
Cypress.Commands.add("formularioQA", () => {
    //Rut
    cy.get('form > :nth-child(1) > p').should('contain.text', 'rut: ingresar sin punto ni guion ( un rut valido )')
    cy.get(':nth-child(1) > input').type('12345678') //Rut
    cy.wait(1000)
    cy.get(':nth-child(2) > input').type('WEB') //Canal
    cy.wait(1000)
    cy.get(':nth-child(3) > input').type('80000') //Monto mensual
    cy.wait(1000)
    cy.get(':nth-child(4) > input').type('15000') //Monto minimo
    cy.get(':nth-child(5) > input').type('2022-09-10') //Fecha de vencimiento
    cy.wait(1000)
    cy.get('.styleButton_yellowButton__OwYg3').click() //Siguiente
})

Cypress.Commands.add("verificarError", () => {
    cy.get('.modal_errorModal__tXGSo > h1').should('contain.text', 'Ha ocurrido un error') //titulo modal de error
    cy.get('.modal_errorModal__tXGSo > .styleButton_blueButton__SJ0lA').click() //aceptar modal de error*/

    cy.get('h1') //error inesperado
    cy.get('.redirect_card__Dx_UF > p') //Ocurrio un inconveniente al procesar tu pago, lamentamos las molestias porfavor vuelva a intentar
})

Cypress.Commands.add("Integracion", () => {
    cy.get('.input-wrapper').type('111111111')
    cy.get('.authorize-account-password-wrapper > .input-container > .input-wrapper').type('1111')
    cy.get('.custom-button-container').click()
    cy.wait(10000)
    cy.get('.custom-button-container').click()
    cy.wait(10000)
    cy.get(':nth-child(1) > input').type('11111111')
    cy.get('.custom-button-container').click()
    cy.wait(5000)
    cy.get('.input-wrapper').type('12')
    cy.wait(1500)
    cy.get('.custom-button-container').click()
    cy.wait(5000)
})



//#########################################################################
//BDP



Cypress.Commands.add("asersionesTextos", () => {
    cy.get('.text > :nth-child(2)').should('contain.text', 'Pago en Línea') //LEVEL bienvenido a pago en linea
    cy.get('.conteiner-form > .title').should('contain.text', 'Datos de tarjeta')
    cy.get('.conteiner-form > .subtitle').should('contain.text', 'Ingresa los datos de tu tarjeta Lider Bci. Los datos marcados con un ')
    //cy.get('.footer > span')// terminos y condiciones
})

Cypress.Commands.add("ErrorGroup1", () => {
    cy.get('#title-mapped').should('contain.text', 'Lo sentimos')
    cy.get('#message-mapped').should('contain.text', 'group 1')
    cy.get('#button-mapped').click()
})

//Backoffice
Cypress.Commands.add("loginBackoffice", () => {
    cy.get('#user').type('jpenac')
    cy.get('#password').type('Lider2022')
    cy.get('._button_BlueButton__YhRsF').click()
    cy.get('h1').should('contain.text', 'Administrador Transaccional')

})
/*Cypress.Commands.add('login', (username, password) => {
  cy.session([username, password], () => {
    cy.visit('https://botondepagodev.retailcard.cl/backoffice/login')
    cy.get('#user').type(username)
    cy.get('#password').type(password)
    cy.get('._button_BlueButton__YhRsF').click()
  })
})*/

Cypress.Commands.add('altaUsuario', () =>{
    
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
