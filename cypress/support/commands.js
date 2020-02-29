import '@percy/cypress'

Cypress.Commands.add('login', (userName, password) => {
    cy.get('#txtUsername').type(userName)
    cy.get('#txtPassword').type(password, { log: false }) // hide input value in log
    cy.get('#btnLogin').click({ force: true })
    cy.url().should('include', '/orangehrm/index.php')
})

Cypress.Commands.add('navigate', env => {
    let url = env == 'qa' ? Cypress.env('qa') : undefined

    cy.viewport(1200, 800)
    cy.visit(url, { retryOnStatusCodeFailure: true })
})