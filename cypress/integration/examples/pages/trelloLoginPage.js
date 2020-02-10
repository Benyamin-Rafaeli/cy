/// <reference types="Cypress" />

export class trelloLoginPage {

    performLogin(userName, password) {
        if (userName) {
            cy.get('#txtUsername').click()
            cy.get('#txtUsername').should('have.focus')
            // cy.get('#txtUsername').type(userName)
            // this is example with xpath
            cy.xpath('.//*[@id="txtUsername"]').type(userName)
        } else {
            cy.get('#txtUsername').clear()
        }
        if (password) {
            cy.get('#txtPassword').click()
            cy.get('#txtPassword').should('have.focus')
            cy.get('#txtPassword').type(password)
        } else {
            cy.get('#txtPassword').clear()
        }
    }

    clickLoginButton() {
        cy.get('#btnLogin').click({ force: true })
    }

    verifyUiLoginMessage(message) {
        cy.get('#spanMessage').text().as(message)
    }

}

export const loginPage = new trelloLoginPage();