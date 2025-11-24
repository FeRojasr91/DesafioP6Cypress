//const el = require('./elements').ELEMENTS
import { ELEMENTS as el } from './elements'

class EjecutarCompra{

    clickElegirCategoria(){
        cy.get(el.botonElegirCategoria).click()
    }

    clickCategoriaProduct(){
        cy.get(el.botonCategoriaProducto).click()
    }

    clickBotonAgregaCarro(){
        cy.contains('.productinfo', 'Add to cart').find(el.botonAgregarCarrito).click()       
    }

    ValidarMensajeOkCarro(){
        cy.contains('Added!').should('be.visible')    
    }

    clickBotonIrCarrito(){
        cy.get(el.botonIrCarrito).click()        
    }

    clickBotonProcederCheckout(){
        cy.get(el.botonProcederCheckout).click()
    }

    clickBotonPago(){
        cy.get(el.botonPago).click()
    }

    mensajeVentanaPago(){
        cy.contains(el.verVentanaPago, 'Payment').should('be.visible')        
    }

    completarNomTarjeta(nombretar){
        cy.get(el.campoNomTarjeta).type(nombretar)
    }

    completarNumTarjeta(numtar){
        cy.get(el.campoNumTarjeta).type(numtar)
    }

    completarCVC(cvctar){
        cy.get(el.campoCVC).type(cvctar)
    }

    completarExpMes(mesExp){
        cy.get(el.campoExpMes).type(mesExp)
    }

    completarExpAnno(annoExp){
        cy.get(el.campoExpAnno).type(annoExp)
    }

    clickConfirmarOrden(){
        cy.get(el.botonConfirmarPago).click()
    }

    mensajePagoExitoso(){
        cy.contains(el.textoConfirmaPago, 'Congratulations! Your order has been confirmed!').should('be.visible')         
    }

    clickContinuarAInicio(){
        cy.get(el.botonContinuarAInicio).click()
    }    

}

export default new EjecutarCompra()