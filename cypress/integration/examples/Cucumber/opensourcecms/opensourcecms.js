import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'

Given(`I visit opensourcecms site`, () => {
    cy.visit('https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login')
})

Given(`I check placeholder of {string} and {string}`, (UserName, Password) => {
    // Short way of working with Promise (invoke)
    cy.get('#txtUsername').invoke('text').as(UserName) // Username real
    cy.get('#txtPassword').invoke('text').as(Password) // Password real
})

And(`I check text of {string} button and click`, (text) => {
    cy.get('#btnLogin').contains(text).click()
})

Then(`I check the message {string}`, (message) => {
    cy.get('#spanMessage').invoke('text').as(message)
})

Given(`I login as following`, dataTable => {
    dataTable.hashes().forEach(row => {
        cy.get('#txtUsername').clear()
        cy.get('#txtPassword').clear()
        if (row.UserName) cy.get('#txtUsername').type(row.UserName)
        if (row.Password) cy.get('#txtPassword').type(row.Password)
        cy.get('#btnLogin').click({ force: true })
        cy.get('#spanMessage').text().as(row.Message)
    });
})