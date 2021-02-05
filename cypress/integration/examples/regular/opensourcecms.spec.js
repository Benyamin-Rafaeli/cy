/// <reference types="Cypress" />
import { loginPage } from './../pages/OSLoginPage.js'
import '@percy/cypress'

// todo: how to pass variable to test from CLI
describe('Test opensourcecms', () => {

    beforeEach('Navigate to website', () => cy.navigate('qa'))

    it('Test login page placeholders', () => {
        cy.percySnapshot()
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
        cy.percySnapshot('After')
    })

})
