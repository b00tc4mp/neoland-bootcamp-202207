const { connect, disconnect } = require('mongoose')
const { expect } = require('chai')
const { User } = require('../models')
const { NotFoundError, AuthError } = require('../errors')

const { authenticateUser } = require('.')

describe('authenticateUser', () => {

    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    it('succeds authenticating on existing user', () => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user =>
                authenticateUser(email, password)
                    .then(userId =>
                        expect(userId).to.equal(user.id)
                        //crea en base de datos y recoge el userId      
                    )
            )

    })
    it('fails with wrong credentials', () => { // unhappy path
        // const id = 'user-123123123123'
        // const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123!'

        return authenticateUser(email, password)
            .catch(error => {
                debugger
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with email ${email} not found`)
            })
    })
    it('fails on existing user but wrong password', () => {  // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user =>
                authenticateUser(email, password + '-wrong')
                    .catch(error => {
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal('wrong password')
                    })
            )
    })

    after(() => disconnect())
})
