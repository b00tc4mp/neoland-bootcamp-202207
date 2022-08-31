const { DuplicityError } = require('../../errors') // errores indexados en un index.js
const { authenticateUser } = require('../../logic')
const { connect, disconnect } = require('mongoose')
const { User } = require('../../models')
const { updateEmail } = require('../../logic')

describe('Update Email', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => User.deleteMany())

    it('succeeds updating user email', () => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'
        const newEmail = 'pepito2@grillo.com'

        return User.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(async userId => {
                await updateEmail(userId, newEmail)
                return userId
            })
            .then(userId => User.findById(userId))
            .then(user => expect(user.email).toEqual(newEmail))
        
    })

    it('fails with existing email', () => { // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const email2 = 'pepito2@grillo.com'

        return Promise.all([User.create({ name, email, password }), User.create({ name, email: email2, password })])
            .then(() => authenticateUser(email, password))
            .then(userId => updateEmail(userId, email2))
            .then(() => {
                throw new Error('should not reach this point') // fuerzo error si el catch no captura el error primero
            })
            .catch(error => {
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toEqual(`user with email ${email2} already exists`)
            })
    })

    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})