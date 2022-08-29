const { CredentialsError, NotFoundError } = require('../errors') // errores indexados en un index.js
const { authenticateUser } = require('../logic')
const { connect, disconnect } = require('mongoose')
const { Users } = require('../models')

describe('Authenticate User', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Users.deleteMany())

    it('succeeds authenticating a user', () => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return Users.create({ name, email, password })
            .then(user => {
                return authenticateUser(email, password)
                    .then(userId => {
                            expect(typeof userId).toBe('string')
                            expect(userId).toBe(user.id)
                    })
            })
    })

    it('fails on non-existing user', () => { // unhappy path
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return authenticateUser(email, password)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with email ${email} not found`)
            })
    })

    it('fails with wrong credentials', () => { // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return Users.create({ name, email, password })
            .then(user => authenticateUser(email, '123123124'))
            .catch(error => {
                expect(error).toBeInstanceOf(CredentialsError)
                expect(error.message).toBe('email or password incorrect')
            })
    })

    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})