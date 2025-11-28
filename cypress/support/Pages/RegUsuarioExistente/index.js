const el = require('./elements').ELEMENTS

class RegUserExis{
    
    accesarURL(urlEx) {
        cy.visit(urlEx, 'login')
        cy.contains('New User Signup!').should('be.visible')        
    }

    completarName(userName){
        cy.get(el.campoUserNameEx).type(userName)
    }

    completarEmail(){
        cy.get(el.campoEmailEx).type(Cypress.env('emailRegistradoS'))
    }

    clickEnSignUp(){
        cy.get(el.botonSignUpEx).click()
    }

    validarMensajeError(error){
        cy.contains(error).should('be.visible')
    }

}

export default new RegUserExis()