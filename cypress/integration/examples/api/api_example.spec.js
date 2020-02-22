/// <reference types="Cypress" />

// context('Test API from the Fake JSON Server', () => {
//     const myUrl = 'http://localhost:3000/todos';
//     const myTitle = 'my fucking test';

//     beforeEach('DELETE before creating a new value', () => {
//         cy.request({
//             method: 'DELETE',
//             url: `${myUrl}/3`,
//             failOnStatusCode: false
//         }).then(res => expect(res.body).to.be.empty)
//     })

//     it('Test GET functionality of JSON Sever', () => {
//         cy.request(`${myUrl}/1`).its('body').should('have.property', 'id');
//     })

//     // explicit version
//     it('Test POST  functionality of JSON Sever', () => {
//         cy.request({
//             method: 'POST',
//             url: myUrl,
//             body: {
//                 'id': 3,
//                 'title': myTitle,
//                 'author': 'kaka maika'
//             }
//         }).then(res => expect(res.body).has.property('title', myTitle))
//     })
// })

describe('todos API', () => {

    // /**
    //  * @typedef {Object} Todo
    //  * @property {number} id
    //  * @property {string} task
    //  */

    // /** @type {Todo[]} */

    const initialItems = [
        {
            "id": 1,
            "task": "read something"
        },
        {
            "id": 2,
            "task": "write something"
        }
    ]

    const getItems = () => cy.request(testUrl).its('body')

    // /** @type {(todo:Todo) => Cypress.Chainable} */

    const add = item => cy.request('POST', testUrl, item)

    const deleteItem = item => cy.request('DELETE', `${testUrl}/${item.id}`)

    const deleteAll = () => getItems().each(deleteItem)

    const reset = () => {
        deleteAll()
        initialItems.forEach(add)
    }

    beforeEach(reset)
    afterEach(reset)

    let testUrl
    before(() => testUrl = Cypress.env('dev') + '/todos')

    // duplicated block
    it('returns JSON', () => {
        cy.request(testUrl)
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })

    it('loads 2 items', () => cy.request(testUrl).its('body').should('have.length', 2))

    it('loads the initial items', () => getItems().should('deep.eq', initialItems))

    it('returns id + task objects', () => getItems().each(value => expect(value).to.have.all.keys('id', 'task')))

    it('adds an item', () => {
        const randomId = Cypress._.random(0, 10000)
        const item = { id: randomId, task: 'life' }

        add(item)
        cy.request(`${testUrl}/${randomId}`).its('body').should('deep.eq', item)
    })

    it('deletes an item', () => {
        const id = initialItems[0].id
        cy.request('DELETE', `${testUrl}/${id}`)
        getItems().should('have.length', 1)
    })



    // it('returns JSON', () => cy.request('/todos').its('headers').its('content-type').should('include', 'application/json'))

    // it('loads 2 items', () => cy.request('/todos').its('body').should('have.length', 2))

    // it('loads the initial items', () => getItems().should('deep.eq', initialItems))

    // it('returns id + task objects', () => getItems().each(value => expect(value).to.have.all.keys('id', 'task')))

    // it('adds an item', () => {
    //     const randomId = Cypress._.random(0, 10000)
    //     const item = { id: randomId, task: 'life' }

    //     add(item)
    //     cy.request(`/todos/${randomId}`).its('body').should('deep.eq', item)
    // })

    // it('deletes an item', () => {
    //     const id = initialItems[0].id
    //     cy.request('DELETE', `/todos/${id}`)
    //     getItems().should('have.length', 1)
    // })
})
