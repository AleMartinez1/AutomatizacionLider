describe('Recaudaciones', function () {

    //Solucion a uncaught:exception
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  
    const seleccionMontoPage = new SeleccionMontoPage()
    const seleccionBancoPage = new SeleccionBancoPage()
  
    beforeEach(function () {
      // ingresamos a la pagina 
       
      cy.visit("https://botondepagodev.retailcard.cl/backoffice/login") 
      cy.wait(2000)
    })
  
  
  
    it('01 - Nuevo medio de pago', function () {
      
    })
})