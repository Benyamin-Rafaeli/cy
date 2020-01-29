/// <reference types="Cypress" />

export class OSLoginPage {

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

    checkPlaceHolder(field) {
        // Long way of working with Promise (Closure)
        // cy.get('#txtUsername').then(el => { return el.text() }).as('Username');
        // Short way of working with Promise (invoke)
        // cy.get('#txtUsername').invoke('text').as('Username')
        const selector = cy.contains('Username') ? '#txtUsername' : '#txtPassword';
        cy.get(selector).text().as(field)
    }

    // it.only('should se arch "Contact" by "Company"', () => {
    //     cy.get('#customers').find('tr').contains('Yoshi TannXXX').click()
    //     // cy.get('#customers').find('tr').contains('Yoshi Tannamuri')
    // })
}

export const loginPage = new OSLoginPage();