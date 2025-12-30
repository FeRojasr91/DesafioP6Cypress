const el = require('./elements').ELEMENTS

class Login{
    
    ClickSignUpLogin (){
        cy.get(el.irSignUpLogin).click()
    }

    completarEmailLog(){
        cy.get(el.campoEmailLog).type(Cypress.env('emailRegistradoS')).should('be.visible')
    }

    completarPassLog(){
        cy.get(el.campoPassLog).type(Cypress.env('passwordRegistradaS'),{log:false}).should('be.visible')
    }

    completarPassLogError(passError){
        cy.get(el.campoPassLog).type(passError).should('be.visible')
    }

    clickEnLogin(){
        cy.get(el.botonLogin).click().should('be.visible')
    }

    validarInicioLogin(){
        cy.contains('Logout').should('be.visible')
    }

    validarMensajeError(){        
        cy.contains('Your email or password is incorrect!').should('be.visible')
    }    

}

export default new Login()