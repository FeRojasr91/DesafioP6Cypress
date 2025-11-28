/// <reference types='cypress'/>
import { crearRegUsuariosAzar } from '../support/Factories/regUsuarios'
import {completarFormRegUsuario} from '../support/Factories/FormularioUsuario'
import RegUser from '../support/Pages/RegUsuarios'
import FormRegUsuario from '../support/Pages/FormRegUsuario'
import RegUserExis from '../support/Pages/RegUsuarioExistente'
import Login from  '../support/Pages/LoginUser'
import EjecutarCompra from '../support/Pages/EjecutarCompraOK'

describe('Desafió P06 Cypress', function() { 

  /*before(function(){
        cy.fixture('credencialesFixture').then((datos)=>{
            this.credencialesExt = datos
        })
    }) Se cambia esto para no usar this, por lo señalado abajo para poder ejecutar varios test a la vez.
     Añadiendolo en el beforeEach el fixture*/
    
  
  beforeEach(function(){
    cy.fixture('credencialesFixture').as('credencialesExt')
    cy.newVisit('https://automationexercise.com/')
    cy.url().should('include','automationexercise')
  })
  
  const RegistroUsuarioFaker = crearRegUsuariosAzar()
  const LlenarFormularioFaker = completarFormRegUsuario()
  it('Realizar Registro Exitoso', function(){

    //Crear cuenta ingresando UserName y Email
    Login.ClickSignUpLogin()
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
    FormRegUsuario.MensajeCuentaCreadaOK()
    FormRegUsuario.clickBotonContinuar()  
       
  })

  it('Realizar Registro con Usuario/Correo existente', function(){
    Login.ClickSignUpLogin()    
    /**Para evistar el error de código al ejecutar varios test a la vez, Cypress señala que no usemos this. Por tanto, se ejecuta de la siguiente manera */
    //RegUserExis.completarName(this.credencialesExt.users.usuarioRegistrado)
    //RegUserExis.completarEmail(this.credencialesExt.emails.emailRegistrado)
    cy.get('@credencialesExt').then((datos) => {
    RegUserExis.completarName(datos.users.usuarioRegistrado)
    RegUserExis.completarEmail()
    })    
    RegUserExis.clickEnSignUp()
    RegUserExis.validarMensajeError('Email Address already exist!')
  })

  it('Realizar Login exitoso', function(){
    Login.ClickSignUpLogin()            
    Login.completarEmailLog()
    Login.completarPassLog()
    Login.clickEnLogin()    
    Login.validarInicioLogin()
  })

  it ('Error de inicio de sesión', function() {
    Login.ClickSignUpLogin()
    cy.get('@credencialesExt').then((datos) => {         
    Login.completarEmailLog()
    Login.completarPassLogError(datos.passwordInvalida.passwordNoRegistrada) //Revisar
    Login.clickEnLogin()
    Login.validarMensajeError()
    })
    
  })

  it('Ejecutar Compra, incluyendo pago', function() {
    Login.ClickSignUpLogin()
           
    Login.completarEmailLog()
    Login.completarPassLog()
    Login.clickEnLogin()
    
    Login.validarInicioLogin()
    EjecutarCompra.clickElegirCategoria()
    EjecutarCompra.clickCategoriaProduct()
    EjecutarCompra.clickBotonAgregaCarro()
    EjecutarCompra.ValidarMensajeOkCarro()
    EjecutarCompra.clickBotonIrCarrito()
    EjecutarCompra.clickBotonProcederCheckout()
    EjecutarCompra.clickBotonPago()
    EjecutarCompra.mensajeVentanaPago()

    cy.get('@credencialesExt').then((datos) => { //También debería incorporar estos datos en cypress.env.json
    EjecutarCompra.completarNomTarjeta(datos.datosTarOk.nomTarjeta)
    EjecutarCompra.completarNumTarjeta(datos.datosTarOk.numTarjeta)
    EjecutarCompra.completarCVC(datos.datosTarOk.cvcTarjeta)
    EjecutarCompra.completarExpMes(datos.datosTarOk.mesExp)
    EjecutarCompra.completarExpAnno(datos.datosTarOk.annoExp)
    EjecutarCompra.clickConfirmarOrden()
    })

    EjecutarCompra.mensajePagoExitoso()
    EjecutarCompra.clickContinuarAInicio()
    Login.validarInicioLogin()

  })



})