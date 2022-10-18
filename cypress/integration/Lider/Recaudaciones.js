/// <reference types="Cypress"/>
//Importar Clases POM
import SeleccionMontoPage from '../../support/PageObjects/Recaudaciones/SeleccionMontoPage'
import SeleccionBancoPage from '../../support/PageObjects/Recaudaciones/SeleccionBancoPage'

describe('Recaudaciones', function () {

  //Solucion a uncaught:exception
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })

  const seleccionMontoPage = new SeleccionMontoPage()
  const seleccionBancoPage = new SeleccionBancoPage()

  beforeEach(function () {
    // ingresamos a la pagina 
    //cy.visit('https://pmt-sandbox.etpayment.com/session/hMNQPe7GFdbFvKxQ2xbUrEDzyfbQUIRFQkM7lmiKTo1xtnbK29qibBBCr7zwjzLX')  
    cy.visit("https://botondepagoqa.retailcard.cl/frontend/testing") //Pagina solo para QA
    cy.wait(2000)
  })



  it('01 - Pagar monto FACTURADO del mes', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoFacturadoRadioButton().click()//Facturado
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(2000)

    seleccionBancoPage.getBancoSelect().select('Banco Prueba')//.should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    cy.Integracion()
    cy.get('.td-title').should('contain.text', 'Detalle de la transacción')
    cy.wait(20000)
    
  })

  it('02 - Pagar monto MINIMO del mes', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoMinimoRadioButton().click()//Minimo
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(2000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA').should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)
    cy.Integracion()

    cy.get('.td-title').should('contain.text', 'Detalle de la transacción')
  })

  it('03 - Pagar monto A ELECCION del mes', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoEleccionRadioButton().click()//Monto a eleccion
    seleccionMontoPage.getMontoEleccionInput().clear().type('30000')
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })

    cy.get('.errorStyle').should('contain.text','El monto máximo es $')
    cy.wait(2000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA').should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)
    cy.Integracion()

    cy.get('.td-title').should('contain.text', 'Detalle de la transacción')
  })

  it('04 - Asersiones de comprobante de pago', function () {

    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoFacturadoRadioButton().click()//Facturado
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(2000)

    seleccionBancoPage.getBancoSelect().select('Banco Prueba')//.should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    cy.Integracion()
    cy.get('.td-title').should('contain.text', 'Detalle de la transacción')
    cy.wait(20000)

    cy.get('.td-title').should('contain.text', 'Pago exitoso')
    cy.get('.element').should('contain.text', 'Se ha procesado correctamente tu pago por un monto toal de:')
    cy.get('#date').should('contain.text', 'Fecha')
    cy.get('#element').should('contain.text', 'Monto')
    cy.get('.').should('contain.text', 'Ante cualquier consulta favor llamar a Servicio al Cliente fono 600 600 57 57')
   
  })

  it('05 - verificar envio de mail', function () {
   
  })

  it('06 - Pagar monto Superior al maximo', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoEleccionRadioButton().click()//Monto a eleccion
    seleccionMontoPage.getMontoEleccionInput().clear().type('90000')
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })

    cy.get('.errorStyle').should('contain.text','El monto máximo es $80000')
 
  })

  it('07 - Pagar monto Inferior al minimo', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoEleccionRadioButton().click()//Monto a eleccion
    seleccionMontoPage.getMontoEleccionInput().clear().type('10000')
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })

    cy.get('.errorStyle').should('contain.text','El monto minimo es $15000')

  })

  it('08 - No ingresar monto a elección', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoEleccionRadioButton().click()//Monto a eleccion
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })

    cy.get('.errorStyle').should('contain.text','El monto minimo es $15000')

  })

  it('09 - Caso fallido - Modal de error', function () {
    cy.formularioQA()
    cy.wait(10000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoFacturadoRadioButton().click()
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    seleccionBancoPage.getBancoSelect().select('ETPAY_BANCOPRUEBA')//.should('have.value', 'ETPAY_BANCOPRUEBA')
    seleccionBancoPage.getSiguienteButton().click({ force: true })
    cy.wait(10000)

    cy.verificarError()

  })

  it('10 - Modal politicas de seguridad', function () {
    cy.formularioQA()
    cy.wait(2000)

    //politicas de seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(1)').should('contain.text', 'Política de Seguridad')// politica de seguridad
    cy.get('.footer_footerBody__RdECZ > :nth-child(1)').click()
    cy.get('element').should('contain.text', 'Politicas de seguridad')//texto
    cy.get('element').click()//cerrar

  })


  it('11 - Modal politicas de privacidad', function () {
    cy.formularioQA()
    cy.wait(2000)

    //politicas de privacidad
    cy.get('.footer_footerBody__RdECZ > :nth-child(2)').should('contain.text', 'Política de Privacidad')// politica de privacidad
    cy.get('.footer_footerBody__RdECZ > :nth-child(2)').click()
    cy.get('element').should('contain.text', 'Términos y condiciones')//texto
    cy.get('element').click()//cerrar

  })

  it('12 - Banco Requerido', function () {
    cy.formularioQA()
    cy.wait(2000)

    seleccionMontoPage.getOpcionPagoText().should('contain.text', 'Selecciona una opción de pago')
    seleccionMontoPage.getMontoFacturadoRadioButton().click()//Facturado
    seleccionMontoPage.getEmailInput().type('m.alejandro.tito@gmail.com')
    seleccionMontoPage.getSiguienteButton().click({ force: true })
    cy.wait(2000)
    seleccionBancoPage.getSiguienteButton().click()
    cy.get('.errorStyle').should('contain.text', 'Selección de banco es requerida')
  })
})