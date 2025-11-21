/// <reference types='cypress'/>
import { crearRegUsuariosAzar } from '../support/Factories/regUsuarios'
import {completarFormRegUsuario} from '../support/Factories/FormularioUsuario'
import RegUser from '../support/Pages/RegUsuarios'
import FormRegUsuario from '../support/Pages/FormRegUsuario'

describe('Desafió P06 Cypress', function() { 

   
  
  beforeEach(function(){
    cy.newVisit('https://automationexercise.com/')
    cy.url().should('include','automationexercise')
  })
  
  const RegistroUsuarioFaker = crearRegUsuariosAzar()
  const LlenarFormularioFaker = completarFormRegUsuario()
  it.only('Realizar Registro Exitoso', function(){

    //Crear cuenta ingresando UserName y Email
    cy.get('a[href="/login"]').click()
    cy.informarRegistroUsuario(RegistroUsuarioFaker.userName, RegistroUsuarioFaker.email)
    RegUser.clickEnSignUp()

    //Completar Formulario
    cy.get('h2[class="title text-center"]').should('have.text','Enter Account InformationAddress Information')
    FormRegUsuario.completarGenero()
    FormRegUsuario.completarDia(3)
    FormRegUsuario.completarMes(2)
    FormRegUsuario.completarAnno('2001')
    FormRegUsuario.completarCountry('Australia')
    //FormRegUsuario.completarCountry()
    cy.CompletarFormularioUsuario(LlenarFormularioFaker.password,LlenarFormularioFaker.firstName,LlenarFormularioFaker.lastName,LlenarFormularioFaker.company,LlenarFormularioFaker.address1,LlenarFormularioFaker.address2,LlenarFormularioFaker.state,LlenarFormularioFaker.city,LlenarFormularioFaker.zipCode,LlenarFormularioFaker.mobileNumber)
    FormRegUsuario.clickCrearCuenta()
    cy.get('h2[class="title text-center"]').should('have.text','Account Created!')
    FormRegUsuario.clickBotonContinuar()  
       
  })


  //Continuar con los otros Test









})