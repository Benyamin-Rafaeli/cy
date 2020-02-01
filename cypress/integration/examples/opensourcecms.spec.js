/// <reference types="Cypress" />
import { loginPage } from "./pages/OSLoginPage.js"
import '@percy/cypress';

describe('Test opensourcecms', () => {
    beforeEach('Navigate to website', () => {
        cy.viewport(1200, 800)        
        cy.visit('/', {retryOnStatusCodeFailure: true})                
    })

    it('Test login page placeholders', () => {            
        // const uniqueName = `${Cypress.spec.name.slice(0, -3)}_${Cypress.moment().millisecond()}`  
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
        cy.percySnapshot('_After')
    })

    // it('Perform login validation', () => {
    //     cy.fixture('opensourcecms').as('user')
    //     cy.get('@user').then(user => { cy.login(user.UserName, user.Password) })
    //     cy.get('#option-menu').text().as('Welcome Admin')
    // })
})
