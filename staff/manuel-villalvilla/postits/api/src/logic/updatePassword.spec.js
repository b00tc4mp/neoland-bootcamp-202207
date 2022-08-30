const { connect, disconnect } = require('mongoose')
const { authenticateUser, updatePassword } = require('.')
const { CredentialsError } = require('../errors')
const { User } = require('../models')

describe('Update Password', () => {
    beforeAll(() => connect('mongodb://localhost:27017/test'))

    beforeEach(() => User.deleteMany())

    it('should succeed updating password', () => {
        const name = 'Josefo'
        const email = 'josefo@tocino.com'
        const password = '123123123'
        const newPassword = '124124124'

        return User.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(userId => updatePassword(userId, password, newPassword))
            .then(() => User.findOne({ email }))
            .then(user => expect(user.password).toBe(newPassword))
    })

    it('should fail with wrong old password', () => {
        const name = 'Josefo'
        const email = 'josefo@tocino.com'
        const password = '123123123'
        const newPassword = '124124124'

        return User.create({ name, email, password })
            .then(() => authenticateUser(email, password))
            .then(userId => updatePassword(userId, '123123124', newPassword))
            .then(() => {
                throw new Error('should not reach this point')
            })
            .catch(error => {
                expect(error).toBeInstanceOf(CredentialsError)
                expect(error.message).toEqual('wrong password')
            })
    })

    afterAll(() => disconnect('mongodb://localhost:27017/test'))
})