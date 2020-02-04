import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'
import { loginPage } from "../../pages/OSLoginPage.js"


Given(`I visit opensourcecms site`, () => cy.navigate())

And(`I check placeholder of {string}`, field => loginPage.checkPlaceHolder(field))

And(`I click on login button`, () => loginPage.clickLoginButton())

Then(`I check failed login message {string}`, message => loginPage.verifyUiLoginMessage(message))

Given(`I login as following`, dataTable => {
    dataTable.hashes().forEach(row => {
        loginPage.performLogin(row.UserName, row.Password)
        loginPage.clickLoginButton()
        loginPage.verifyUiLoginMessage(row.Message)
    });
})