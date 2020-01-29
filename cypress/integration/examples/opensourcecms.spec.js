/// <reference types="Cypress" />
import { loginPage } from "./pages/OSLoginPage.js"
import '@percy/cypress';

const OSurl = 'https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login'

describe('Test opensourcecms', () => {
    beforeEach('Navigate to website', () => {
        cy.viewport(1200, 800)
        cy.visit(OSurl, {retryOnStatusCodeFailure: true})
    })

    it('Test login page placeholders', () => {
        // cy.percySnapshot('Before')
        loginPage.checkPlaceHolder('Username')
        loginPage.checkPlaceHolder('Password')
        // cy.percySnapshot('After')
    })

    it('Test login page all invalid permutations', () => {
        // cy.percySnapshot('Before')
        loginPage.performLogin('admin', 'password')
        loginPage.clickLoginButton()
        loginPage.verifyUiLoginMessage('Invalid credentials')

        loginPage.performLogin('', '')
        loginPage.clickLoginButton()
        loginPage.verifyUiLoginMessage('Username cannot be empty')

        loginPage.performLogin('', 'opensourcecms')
        loginPage.clickLoginButton()
        loginPage.verifyUiLoginMessage('Username cannot be empty')

        loginPage.performLogin('opensourcecms', '')
        loginPage.clickLoginButton()
        loginPage.verifyUiLoginMessage('Password cannot be empty')
        // cy.percySnapshot('After')
    })

    // it('Perform login validation', () => {
    //     cy.fixture('opensourcecms').as('user')
    //     cy.get('@user').then(user => { cy.login(user.UserName, user.Password) })
    //     cy.get('#option-menu').text().as('Welcome Admin')
    // })
})
