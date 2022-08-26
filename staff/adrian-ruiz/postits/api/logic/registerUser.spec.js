const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { expect } = require('chai')
const User = require('../models/user')
const registerUser = require('./registerUser')
const { DuplicityError } = require('errors')

describe('registerUser', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    it('succeeds registering a new user', async () => { //happy path

        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'


        const result = await registerUser(name, email, password)
        expect(result).to.be.undefined

        const users = await User.find()
        expect(users).to.have.length(1)
        const [user] = users

        expect(user.name).to.equal(name)
        expect(user.email).to.equal(email)
        expect(user.password).to.equal(password)
    })

    it('should fail when user already exists', async () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
        try {
            const user = await User.create({ name, email, password })

            const result = await registerUser(name, email, password)


        } catch (error) {
            expect(error).to.be.an.instanceof(DuplicityError)
            expect(error.message).to.equal(`User with email ${email} already exists`)

            const totalUsers = await User.find()
            expect(totalUsers).to.have.lengthOf(1)

            const user = totalUsers[0]
            expect(user._id).to.be.an.instanceOf(ObjectId)
            expect(user.name).to.equal('SpecTesting')
            expect(user.email).to.equal('spec@testing.com')
            expect(user.password).to.equal('123123123Aa!')
        }
    })

    after(() => disconnect())
})