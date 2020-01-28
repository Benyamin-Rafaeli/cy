/// <reference types="Cypress" />
import { loginPage } from "./pages/OSLoginPage.js"
import '@percy/cypress';

const OSurl = 'https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login'

describe('Test opensourcecms', () => {
    beforeEach('Navigate to website', () => {
        cy.viewport(1200, 800)
        cy.visit(OSurl)
        // cy.percySnapshot()
    })

    it('Test login page placeholders', () => {
        loginPage.checkPlaceHolder('Username')
        loginPage.checkPlaceHolder('Password')
    })

    it('Test login page all invalid permutations', () => {
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
    })

    // it('Perform login validation', () => {
    //     cy.fixture('opensourcecms').as('user')
    //     cy.get('@user').then(user => { cy.login(user.UserName, user.Password) })
    //     cy.get('#option-menu').text().as('Welcome Admin')
    // })
    // cy.percySnapshot('After')
})
