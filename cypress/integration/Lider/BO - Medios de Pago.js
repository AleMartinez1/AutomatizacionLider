describe('Medios de pago', function () {

  //Solucion a uncaught:exception
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })


  beforeEach(function () {
    // ingresamos a la pagina 

    cy.visit("https://botondepagodev.retailcard.cl/backoffice/login")
    cy.loginBackoffice()
    //cy.viewport(1550, 1750)
  })



  it('01 - Nuevo medio de pago', function () {

    cy.get('.sidebar_body__mAqjs > :nth-child(1)').click()
    cy.get('.sidebar_body__mAqjs > :nth-child(3)').click()
    cy.get('.animate__animated > :nth-child(2)').click()


    cy.wait(500)
    cy.get('._button_icon__iS_fm').click()

    

    cy.get('#idPayMethod').type('ID_TEST_DEMO')
    cy.get('#name').type('test automation')
    cy.get('#displayName').type('test auto uno')
    cy.get('#type').select('ETPay')
    cy.get('#bank').select('Banco Prueba')
    cy.get('#habilitado').click()
    cy.get('tr > :nth-child(1) > .select_selects__W0NK0').select('Web')
    cy.get('tr > :nth-child(2) > ._input_label__gfcd1 > ._input_input__PipBM').type('123')
    cy.get(':nth-child(3) > ._input_label__gfcd1 > ._input_input__PipBM').type('9000')
    cy.get(':nth-child(4) > ._input_label__gfcd1 > ._input_input__PipBM').type('98765')
    cy.wait(1500)
    cy.get(':nth-child(8) > ._button_BlueButton__YhRsF').click()
    cy.get(':nth-child(4) > h2').should('contain.text', 'Se ha guardado el medio de pago')
    cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()

  })

   it('01 - editar medio', function () {

    cy.get('.sidebar_body__mAqjs > :nth-child(1)').click()
    cy.get('.sidebar_body__mAqjs > :nth-child(3)').click()
    cy.get('.animate__animated > :nth-child(2)').click()

    cy.get('.pagination_pagination__2yOxT > :nth-child(3)').click()
    cy.get('[style="text-align: end;"]').last().click()
    cy.get('#name').type('test automation EDITADO')
    cy.wait(1500)
    cy.get(':nth-child(8) > ._button_BlueButton__YhRsF').click()
    cy.get(':nth-child(4) > h2').should('contain.text', 'Se ha guardado el medio de pago')
    cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()


  })

  it('01 - filtrar ', function () {

    cy.get('.sidebar_body__mAqjs > :nth-child(1)').click()
    cy.get('.sidebar_body__mAqjs > :nth-child(3)').click()
    cy.get('.animate__animated > :nth-child(2)').click()

    cy.get('._input_input__PipBM').type('ID_TEST')
    cy.wait(2000)
    cy.get('._button_BlueButton__YhRsF').click()
    cy.get('[style="text-align: end;"]').click()
    cy.get('.modal_modalStyle__k3eyN > h2').should('contain.text','Editar Medio de pago')

  })

  it('01 - borrar medio', function () {

    cy.get('.sidebar_body__mAqjs > :nth-child(1)').click()
    cy.get('.sidebar_body__mAqjs > :nth-child(3)').click()
    cy.get('.animate__animated > :nth-child(2)').click()

    cy.get('.pagination_pagination__2yOxT > :nth-child(3)').click()
    cy.get('[style="width: 10%;"]').last().click()
    cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()
    cy.get('.modal_modalStyle__k3eyN > h2').should('contain.text','Se ha eliminado Medio de Pago')
    cy.get('.modal_deleteButtons__4PKE4 > ._button_BlueButton__YhRsF').click()
  })





})