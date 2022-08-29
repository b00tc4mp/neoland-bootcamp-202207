const { DuplicityError } = require('../errors') // errores indexados en un index.js
const { authenticateUser } = require('../logic')
const { connect, disconnect } = require('mongoose')
const { Users } = require('../models')
const { updateEmail } = require('.')

describe('Update Email', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Users.deleteMany())

    it('succeeds updating user email', () => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'
        const newEmail = 'pepito2@grillo.com'

        return Users.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(async userId => {
                await updateEmail(userId, newEmail)
                return userId
            })
            .then(userId => Users.findById(userId))
            .then(user => expect(user.email).toEqual(newEmail))
        
    })

    it('fails with existing email', () => { // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const email2 = 'pepito2@grillo.com'

        return Promise.all([Users.create({ name, email, password }), Users.create({ name, email: email2, password })])
            .then(() => authenticateUser(email, password))
            .then(userId => updateEmail(userId, email2))
            .catch(error => {
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toEqual(`user with email ${email2} already exists`)
            })
    })

    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})