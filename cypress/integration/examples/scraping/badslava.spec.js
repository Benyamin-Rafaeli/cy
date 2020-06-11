/// <reference types="Cypress" />

const _ = require('lodash')
const moment = require('moment')

describe('Crawler', () => {

    it('crawls', () => {
        cy.visit('http://badslava.com/open-mics-state.php?state=NY&type=Comedy')

        cy
            .get('#demo', { timeout: 10000 })
            .children()
            .chunk(2)
            .map((components) => {
                return {
                    date: components[0].textContent,
                    table: Cypress.$(components[1])
                }
            })
            .flatMap((c) => {
                let th = c.table.find('th')
                let tbody = c.table.find('tbody')
                // let tableKeys = _.map(th, function (t) { return t.textContent })
                let tableKeys = _.map(th, (t) => { return t.textContent })
                // let tableRows = _.map(tbody, function (tb) {
                let tableRows = _.map(tbody, (tb) => {
                    return _.fromPairs(_.zip(tableKeys, Cypress.$(tb).find('td')))
                })
                // let finalRows = _.map(tableRows, function (tableRow) {
                let finalRows = _.map(tableRows, (tableRow) => {
                    return _.reduce(tableRow, (hash, td, key) => {
                        switch (key) {
                            case 'Email':
                                // td -> a -> href -> 'mailto:jimmypeople@..'
                                hash[key] = Cypress.$(td).find('a').attr('href').replace(/mailto\:/, '')
                                break

                            case 'Info':
                                let onclick = Cypress.$(td).find('a').attr('onclick')
                                if (!_.isUndefined(onclick)) {
                                    onclick = onclick.replace(/alert\(\'/, '').replace(/\'\).*/, '')
                                }
                                hash[key] = onclick
                                break

                            case 'Link':
                                hash[key] = Cypress.$(td).find('a').attr('href')
                                break

                            default:
                                hash[key] = td.textContent
                        }
                        return hash
                    }, {})
                })
                // debugger
                console.log(`finalRows - ${finalRows}`)
                return finalRows
            })
        // .debug()
    })

})
