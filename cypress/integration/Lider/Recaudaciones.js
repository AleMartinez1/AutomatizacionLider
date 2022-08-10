/// <reference types="Cypress"/>
//Importar Clases POM
import SeleccionMontoPage from '../../support/PageObjects/Recaudaciones/SeleccionMontoPage'
import SeleccionBancoPage from '../../support/PageObjects/Recaudaciones/SeleccionBancoPage'

describe('Recaudaciones', function () {

  //Solucion a uncaught:exception
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  const seleccionMontoPage =new SeleccionMontoPage()
  const seleccionBancoPage =new SeleccionBancoPage()

  beforeEach(function () {
    // ingresamos a la pagina   
    cy.visit("https://botondepagodev.retailcard.cl/frontend/testing") //Pagina solo para QA
  })

  it('Caso fallido - Modal de error', function () {
    cy.wait(2000)
    cy.formularioQA()
    cy.wait(10000)
    
    seleccionMontoPage.getOpcionPagoText().should('contain.text','Selecciona una opción de pago') 
    seleccionMontoPage.getMontoFacturadoRadioButton().click()
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA').should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    //politicas de privacidad y seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(1)').should('contain.text', 'Política de Seguridad')// politica de seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(2)').should('contain.text', 'Política de Privacidad')// politica de privacidad
    
    cy.verificarError()

  })

  it('Pagar monto FACTURADO del mes', function () {
    cy.wait(2000)
    cy.formularioQA()
    cy.wait(10000)
    
    seleccionMontoPage.getOpcionPagoText().should('contain.text','Selecciona una opción de pago') 
    seleccionMontoPage.getMontoFacturadoRadioButton().click()//Facturado
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA').should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    //politicas de privacidad y seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(1)').should('contain.text', 'Política de Seguridad')// politica de seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(2)').should('contain.text', 'Política de Privacidad')// politica de privacidad
    
  })

  it('Pagar monto MINIMO del mes', function () {
    cy.wait(2000)
    cy.formularioQA()
    cy.wait(10000)
    
    seleccionMontoPage.getOpcionPagoText().should('contain.text','Selecciona una opción de pago') 
    seleccionMontoPage.getMontoMinimoRadioButton().click()//Minimo
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA').should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    //politicas de privacidad y seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(1)').should('contain.text', 'Política de Seguridad')// politica de seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(2)').should('contain.text', 'Política de Privacidad')// politica de privacidad
    
  })


  it('Pagar monto A ELECCION del mes', function () {
    cy.wait(2000)
    cy.formularioQA()
    cy.wait(10000)
    
    seleccionMontoPage.getOpcionPagoText().should('contain.text','Selecciona una opción de pago') 
    seleccionMontoPage.getMontoEleccionInput().click()//Monto a eleccion
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA').should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    //politicas de privacidad y seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(1)').should('contain.text', 'Política de Seguridad')// politica de seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(2)').should('contain.text', 'Política de Privacidad')// politica de privacidad
    
  })



})