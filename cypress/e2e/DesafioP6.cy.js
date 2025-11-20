/// <reference types='cypress'/>
import { crearRegUsuariosAzar } from '../support/Factories/regUsuarios'
import RegUser from '../support/Pages/RegUsuarios'

describe('Desafió P06 Cypress', function() { 

   
  
  beforeEach(function(){
    cy.newVisit('https://automationexercise.com/')
    cy.url().should('include','automationexercise')
  })
  
  const RegistroUsuarioFaker = crearRegUsuariosAzar()
  it.only('Realizar Registro Exitoso', function(){

    cy.get('a[href="/login"]').click()
    cy.informarRegistroUsuario(RegistroUsuarioFaker.userName, RegistroUsuarioFaker.email)
    RegUser.clickEnSignUp()

  })







})