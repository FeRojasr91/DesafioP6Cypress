const el = require('./elements').ELEMENTS

class RegUser{
    
    accesarURL(url) {
        cy.visit(url, 'login')
        cy.contains('New User Signup!').should('be.visible')        
    }

    completarName(userName){
        cy.get(el.campoUserName).type(userName)
    }

    completarEmail(email){
        cy.get(el.campoEmail).type(email)
    }

    clickEnSignUp(){
        cy.get(el.botonSignUp).click()
    }
    


}
export default new RegUser()