/// <reference types="Cypress" />

describe('Test opensourcecms', () => {
    beforeEach('Login to website', () => {
        cy.viewport(1200, 800)
        cy.visit('https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login')
    })

    // need to find way run specific test without before annotation
    it('Perform empty validation check', () => {
        // Long way of working with Promise (Closure)
        // cy.get('#txtUsername').then(el => { return el.text() }).as('Username');

        // Short way of working with Promise (invoke)
        // cy.get('#txtUsername').invoke('text').as('Username')
        cy.get('#txtUsername').text().as('Username')
        cy.get('#txtPassword').text().as('Password')
        cy.get('#btnLogin').contains('LOGIN').click()
        cy.get('#spanMessage').text().as('Username cannot be empty')
    })

    it('Perform login validation', () => {
        cy.fixture('opensourcecms').as('user')
        cy.get('@user').then(user => { cy.login(user.UserName, user.Password) })
        cy.get('#option-menu').text().as('Welcome Admin')
    })
    // it.only('should se arch "Contact" by "Company"', () => {
    //     cy.get('#customers').find('tr').contains('Yoshi TannXXX').click()
    //     // cy.get('#customers').find('tr').contains('Yoshi Tannamuri')
    // })
})
