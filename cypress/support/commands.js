// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('CompletarFormularioUsuario',
   (password, firstname, lastName, company, address1, address2, state, city, zipcode, mobileNumber)=>{
    cy.get('#password').type(password)
    cy.get('#first_name').type(firstname)
    cy.get('#last_name').type(lastName)    
    cy.get('#company').type(company) 
    cy.get('#address1').type(address1) 
    cy.get('#address2').type(address2)     
    cy.get('#state').type(state) 
    cy.get('#city').type(city) 
    cy.get('#zipcode').type(zipcode) 
    cy.get('#mobile_number').type(mobileNumber) 
 })





Cypress.Commands.add('informarRegistroUsuario',(userName, email)=>{
    cy.get('input[data-qa="signup-name"]').type(userName)
    cy.get('input[data-qa="signup-email"]').type(email)    
 })



Cypress.Commands.add('newVisit', (url) => {
   //Validar que la URL sea un string válido
   if (typeof url !== 'string' || !/^https?:\/\//.test(url)){
      throw new Error('newVisit: URL inválida');
   }
   //Crea una nueva ventana de navegación
   cy.window({ log: false }).then((win) => {
      win.addEventListener('load', () => resolve(), {once:true });
      // activar la navegación
      win.location.href = url;
   });

   //Comprueba si el documento está en estado 'Completo'. Relacionado con lo configurado en cypress.config.js baseUrl: 'https://automationexercise.com/',
   cy.document().its('readyState').should('equal', 'complete');
});

/**Se agrega para este Desafio */
Cypress.on('uncaught:exception', (err, runnable) => {
  return false; // Previene que Cypress falle por errores de la aplicación. Caso particular de este ejercicio, 
  // se debe a que en la venta, el popup del mensaje al agregar producto al carro de compra, hay una variable oculta que es 
  // (View Cart) igual a la usada en mi validacion para continuar con el flujo.
}); 