const { connect, disconnect } = require('mongoose')
const { Users } = require('../models')
const { authenticateUser, retrieveUser } = require('../logic')
const { FormatError } = require('../errors')

describe('Retrieve User', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => Users.deleteMany())

    it('should retrieve user successfully', () => { // happy path
        const name = 'Pedro'
        const email = 'pedro@pedrito.com'
        const password = '123123123'

        return Users.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(userId => retrieveUser(userId))
            .then(user => {
                expect(user).toBeInstanceOf(Object)
                expect(user.name).toEqual(name)
                expect(user.email).toEqual(email)
            })
    })

    it('should fail retrieving user', async () => { // unhappy path
        const userId = '630ccf7ae7300a5c88dcWRONG'
        try {
            const user = await retrieveUser(userId) 
        } catch (error) {
            expect(error).toBeInstanceOf(FormatError)
            expect(error.message).toEqual('user id not valid')
        }
    })


    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})