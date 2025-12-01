const el = require('./elements').ELEMENTS

class FormRegUser{
    
    accesarURL(url) {
        cy.visit(url, 'signup')
        cy.contains('Enter Account InformationAddress Information').should('be.visible')        
    }

    validarAccesoFormulario(){
        cy.get('h2[class="title text-center"]').should('have.text','Enter Account InformationAddress Information')
    }

    completarGenero(){
        cy.get(el.campoGenero).click()
    }

    completarPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    completarDia(days){
        cy.get(el.campoDia).select(days)
    }

    completarMes(month){
        cy.get(el.campoMes).select(month)
    }

    completarAnno(year){
        cy.get(el.campoAnno).select(year)
    }

    completarFirstName(firstName){
        cy.get(el.campoFirstName).type(firstName)
    }

    completarLastName(lastName){
        cy.get(el.campoLastName).type(lastName)
    }

    completarCompany(company){
        cy.get(el.campoCompany).type(company)
    }

    completarAddress1(address1){
        cy.get(el.campoAddress1).type(address1)
    }

    completarAddress2(address2){
        cy.get(el.campoAddress2).type(address2)
    }

    completarCountry(country){
        cy.get(el.campoCountry).select(country)
    }

    completarState(state){
        cy.get(el.campoState).type(state)
    }

    completarCity(city){
        cy.get(el.campoCity).type(city)
    }

    completarZipcode(zipcode){
        cy.get(el.campoZipcode).type(zipcode)
    }

    completarMobileNumber(mobileNumber){
        cy.get(el.campoMobileNumber).type(mobileNumber)
    }    

    clickCrearCuenta(){
        cy.get(el.botonCrearCuenta).click()
    }
    clickBotonContinuar(){
        cy.get(el.botonContinuar).click()
    }
    MensajeCuentaCreadaOK(){
        cy.get(el.mensajeCuentaCreada).should('have.text','Account Created!')
    }

}

export default new FormRegUser()