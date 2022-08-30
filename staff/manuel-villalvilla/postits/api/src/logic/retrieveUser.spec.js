const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User } = require('../models')
const { authenticateUser, retrieveUser } = require('../logic')
const { NotFoundError } = require('../errors')

describe('Retrieve User', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => User.deleteMany())

    it('should retrieve user successfully', () => { // happy path
        const name = 'Pedro'
        const email = 'pedro@pedrito.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(userId => retrieveUser(userId))
            .then(user => {
                expect(user).toBeInstanceOf(Object)
                expect(user.name).toEqual(name)
                expect(user.email).toEqual(email)
            })
    })

    it('should fail retrieving user', async () => { // unhappy path
        const userId = new ObjectId().toString()
        try {
            const user = await retrieveUser(userId)
            throw new Error('should not reach this point')
        } catch (error) {
            expect(error).toBeInstanceOf(NotFoundError)
            expect(error.message).toEqual('user not found')
        }
    })


    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})