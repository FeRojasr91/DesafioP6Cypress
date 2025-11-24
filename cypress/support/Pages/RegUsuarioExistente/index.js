const el = require('./elements').ELEMENTS

class RegUserExis{
    
    accesarURL(urlEx) {
        cy.visit(urlEx, 'login')
        cy.contains('New User Signup!').should('be.visible')        
    }

    completarName(userName){
        cy.get(el.campoUserNameEx).type(userName)
    }

    completarEmail(email){
        cy.get(el.campoEmailEx).type(email)
    }

    clickEnSignUp(){
        cy.get(el.botonSignUpEx).click()
    }

    validarMensajeError(error){
        cy.contains(error).should('be.visible')
    }

}

export default new RegUserExis()