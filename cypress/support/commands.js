import '@percy/cypress'

// extend functionality by lodash for scraping
const _ = require('lodash')

const commands = ['chunk', 'map', 'flatMap']
_.each(commands, (fn) => {
    Cypress.Commands.add(fn, { prevSubject: true }, (...args) => {
        return _[fn](...args)
    })
})

Cypress.Commands.add('login', (userName, password) => {
    cy.get('#txtUsername').type(userName)
    cy.get('#txtPassword').type(password, { log: false }) // hide input value in log
    cy.get('#btnLogin').click({ force: true })
    cy.url().should('include', '/orangehrm/index.php')
})

Cypress.Commands.add('navigate', env => {

    let url
    switch (env) {
        case 'qa':
            url = Cypress.env('qa')
            break;
        case 'dev':
            url = Cypress.env('dev')
            break;
        default:
            url = Cypress.env('default')
            break;
    }

    // let url = env == 'qa' ? Cypress.env('qa') : undefined

    cy.viewport(1200, 800)
    cy.visit(url, { retryOnStatusCodeFailure: true })
})