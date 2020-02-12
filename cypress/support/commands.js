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
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import '@percy/cypress'

Cypress.Commands.add('login', (userName, password) => {
    cy.get('#txtUsername').type(userName)
    cy.get('#txtPassword').type(password, { log: false }) // hide input value in log
    cy.get('#btnLogin').click({ force: true })
    cy.url().should('include', '/orangehrm/index.php')
})

Cypress.Commands.add('navigate', () => {
    cy.viewport(1200, 800)
    cy.visit('/', { retryOnStatusCodeFailure: true })
})

Cypress.Commands.add('loginTrello', () => {
    const url = 'https://trello.com/login'
    const timeToWait = 3000
    cy.viewport(1200, 800)
    cy.visit(url, { retryOnStatusCodeFailure: true })
    cy.get('#user').type('mediapp100@gmail.com')

    // cy.wait(timeToWait)
    cy.get('show-when-password').should('be.ok')
    // .debug()

    // cy.get('#password').type('KH9ER32W8dtwmvN2')
    // cy.wait(timeToWait)
    // cy.pause()
    // cy.get('#login').click()
    // cy.pause()

})