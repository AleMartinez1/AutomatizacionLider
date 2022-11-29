class MainBinesGrupo{

    getBotonDePagoUnClick(){
        return cy.get('.sidebar_body__mAqjs > :nth-child(1)')
    }
    getBtAdministracion(){
        return cy.get('.sidebar_body__mAqjs > :nth-child(2) > :nth-child(1) > :nth-child(1) > p')
    }
    getBtnBines(){
        return cy.get('div[style="padding: 10px 0px 9px;"] > [style="width: 100%; display: flex; justify-content: space-between; align-items: center; cursor: pointer;"]')
    }

    getBtnBinesGrupo(){
        return cy.get('div[style="padding: 10px 0px 9px;"] > [style="padding: 0px 0px 0px 20px;"] > .animate__animated > :nth-child(2)')
    }
}

export default MainBinesGrupo;