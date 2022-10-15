const { connect, disconnect } = require('mongoose')
const { User } = require('../models')
const { NotFoundError} = require('../errors')
const { retrieveUser } = require('.')

describe('retrieve User', () => {
    beforeAll(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    it('succeeds on existing user', () => {  // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user =>
                retrieveUser(user.id)
                    .then(user =>{
                        expect(user).toBeDefined()
                        expect (user.name).toEqual(name)
                        expect (user.email).toEqual(email)

                        expect(user.password)....
                })
            )
    })

    it('fails on non-existing user', () => {  // unhappy path
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return retrieveUser(email, password)
            .catch(error => {
                expect(error).toBeInstanceOf(NotFoundError)
                expect(error.message).toEqual(`user with email ${email} not found`)
            })
    })

    it('fails on existing user but wrong password', () => {  // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(user =>
                retrieveUser(email, password + '-wrong')
                    .catch(error => {
                        expect(error).toBeInstanceOf(AuthError)
                        expect(error.message).toEqual('wrong password')
                    })
            )
    })

    afterAll(() => disconnect())
})