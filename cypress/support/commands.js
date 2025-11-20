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