// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


import 'cypress-file-upload';
//Recaudaciones
Cypress.Commands.add("formularioQA", () => {
    //Rut
    cy.get('form > :nth-child(1) > p').should('contain.text', 'rut: ingresar sin punto ni guion ( un rut valido )')
    cy.get(':nth-child(1) > input').type('12345678')//Rut
    cy.wait(1000)
    cy.get(':nth-child(2) > input').type('WEB')//Canal
    cy.wait(1000)
    cy.get(':nth-child(3) > input').type('80000')//Monto mensual
    cy.wait(1000)
    cy.get(':nth-child(4) > input').type('15000')//Monto minimo
    cy.get(':nth-child(5) > input').type('2022-09-10')//Fecha de vencimiento
    cy.wait(1000)
    cy.get('.styleButton_yellowButton__OwYg3').click()//Siguiente

})

Cypress.Commands.add("verificarError", () => {
    cy.get('.modal_errorModal__tXGSo > h1').should('contain.text','Ha ocurrido un error')//titulo modal de error
    cy.get('.modal_errorModal__tXGSo > .styleButton_blueButton__SJ0lA').click()//aceptar modal de error*/

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
    cy.get('#title-mapped').should('contain.text','Lo sentimos')
    cy.get('#message-mapped').should('contain.text','group 1')
    cy.get('#button-mapped').click()
})