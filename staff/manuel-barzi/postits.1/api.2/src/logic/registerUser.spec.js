const { connect, disconnect } = require('mongoose')
const { expect } = require('chai')
const { User } = require('../models')
const { DuplicityError } = require('../errors')
const { registerUser } = require('.')

describe('registerUser', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on new user', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return registerUser(name, email, password)
            .then(res => {
                expect(res).to.be.undefined

                return User.find({ email })
            })
            .then(users => {
                expect(users).to.have.length(1)

                const [user] = users

                debugger

                expect(user.name).to.equal(name)
                expect(user.email).to.equal(email)
                expect(user.password).to.equal(password)
            })
    })

    it('fails on existing user', () => {  // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(() => registerUser(name, email, password))
            .catch(error => {
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('user already exists')
            })
    })

    after(() => disconnect())
})