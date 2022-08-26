const { CredentialsError } = require('../errors') // errores indexados en un index.js
const authenticateUser = require('../logic/authenticateUser')
const { connect, disconnect } = require('mongoose')
const { Users } = require('../models')
const jwt = require('jsonwebtoken')

describe('Authenticate User', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Users.deleteMany())

    it('succeeds authenticating a user', async () => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        await Users.create({ name, email, password })

        await authenticateUser(email, password, (error, token) => {
            expect(error).toBeNull()
            expect(typeof token).toBe('string')

            jwt.verify(token, 'ilovethisshit', (error, decoded) => {
                expect(error).toBeNull()
                // expect(typeof decoded).toBe('string')
            })

        })
    })

    it('fails with wrong credentials', async () => { // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        await Users.create({ name, email, password })

        await authenticateUser(email, '123123124', (error, token) => {
            expect(error).toBeInstanceOf(CredentialsError)
            expect(token).toBeUndefined()
        })
    })

    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})