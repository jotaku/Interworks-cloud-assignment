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

// The name of the cookie holding whether the user has accepted the cookie policy
const COOKIE_NAME = 'WCSession_apps.interworkscloud.com_v4_CookieAcceptance';
// The value of the cookie holding whether the user has accepted
const COOKIE_VALUE = 'Accepted=1';

Cypress.on('window:before:load', window => {
  window.document.cookie = `${COOKIE_NAME}=${COOKIE_VALUE}`;
});
