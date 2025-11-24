const el = require('./elements').ELEMENTS

class Login{
    
    ClickSignUpLogin (){
        cy.get(el.irSignUpLogin).click()
    }

    completarEmailLog(email){
        cy.get(el.campoEmailLog).type(email)
    }

    completarPassLog(password){
        cy.get(el.campoPassLog).type(password)
    }

    clickEnLogin(){
        cy.get(el.botonLogin).click()
    }

    validarInicioLogin(){
        cy.contains('Logout').should('be.visible')
    }

    validarMensajeError(error){        
        cy.contains(error).should('be.visible')
    }    

}

export default new Login()