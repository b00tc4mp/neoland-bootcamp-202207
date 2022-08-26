const { DuplicityError } = require('../errors') // errores indexados en un index.js
const registerUser = require('../logic/registerUser')
const { connect, disconnect } = require('mongoose')
const { Users } = require('../models')

describe('Register User', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Users.deleteMany())

    it('succeeds registering a new user', async () => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return registerUser(name, email, password)
            .then(() => Users.find({ email }))
            .then(([user]) => {
                expect(user.name).toBe(name)
                expect(user.email).toBe(email)
                expect(user.password).toBe(password)
            })
    })

    it('fails with existing user', async () => { // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        await Users.create({ name, email, password })

        return registerUser(name, email, password)
            .catch(error => {
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toBe(`user with email ${email} already exists`)
            })
    })

    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})