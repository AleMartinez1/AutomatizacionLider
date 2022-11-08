class MainPage {

    getBotonDePagoUnClick(){
        return cy.get('.sidebar_body__mAqjs > :nth-child(1)')
    }

    getBtAdministracion(){
        return cy.get('.sidebar_body__mAqjs > :nth-child(2) > :nth-child(1) > :nth-child(1) > p')
    }
    getBtCondicionesPago(){
        return cy.get('.animate__animated > :nth-child(3)')
    }
        
}

export default MainPage;