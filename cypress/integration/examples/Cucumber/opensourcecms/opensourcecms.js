import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given(`I visit opensourcecms site`, () => {
    cy.visit('https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login')
})

Given(`I check placeholder of {string} and {string}`, (UserName, Password) => {
    // Short way of working with Promise (invoke)
    cy.get('#txtUsername').text().as(UserName)
    // cy.get('#txtUsername').invoke('text').as(UserName)
    cy.get('#txtPassword').text().as(Password)
})

And(`I check text of {string} button and click`, (text) => {
    cy.get('#btnLogin').contains(text).click()
})

Then(`I check the message {string}`, (message) => {
    // cy.get('#spanMessage').invoke('text').as(message)
    cy.get('#spanMessage').text().as(message)
})

Given(`I login as following`, dataTable => {
    dataTable.hashes().forEach(row => {
        if (row.UserName) {
            cy.get('#txtUsername').type(row.UserName)
        } else {
            cy.get('#txtUsername').clear()
        }
        if (row.Password) {
            cy.get('#txtPassword').type(row.Password)
        } else {
            cy.get('#txtPassword').clear()
        }

        cy.get('#btnLogin').click({ force: true })
        cy.get('#spanMessage').text().as(row.Message)
    });
})