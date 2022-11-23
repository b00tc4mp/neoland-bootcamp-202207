const { connect, disconnect, Types: { ObjectId} } = require('mongoose')
const { User } = require('../../../models')
const { NotFoundError } = require('errors')
const  retrieveUser  = require('.')
const { expect } = require('chai')

const { MONGO_URL_TEST } = process.env

describe('retrieveUser', () => {
    before(() => connect(MONGO_URL_TEST))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing user', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user => 
           
                retrieveUser(user.id)
                    .then(user => {
                        expect(user).to.exist
                        expect(user.name).to.equal(name)
                        expect(user.email).to.equal(email)

                        expect(user.password).to.be.undefined
                    })
            )
    })

    it('fails on non-existing user', () => {  // unhappy path
       const userId = new ObjectId().toString()

        return retrieveUser(userId)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${userId} not found`)
            })
    })


    after(() => disconnect())
})