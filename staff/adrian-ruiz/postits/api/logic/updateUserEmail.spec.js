require('dotenv').config()
const { RegexError, FormatError, AuthError } = require('errors')
const { User, Note } = require('../models')
const updateUserEmail = require('./updateUserEmail')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiaspromise)
const { env : {MONGO_URL_TEST}} = process

describe('updateUserEmail', () => {
    before(() => connect(MONGO_URL_TEST))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('Success updating email', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const newEmail = 'specUpdated@testing.com'

        return (async () => {
            const user = await User.create({ name, email, password })

            const result = await updateUserEmail(user.id, newEmail)

            const updatedUser = await User.findById(user.id)
            expect(result).to.be.undefined
            expect(updatedUser.id).to.equal(user.id)
            expect(updatedUser.email).to.equal('specUpdated@testing.com')
        
        })()
    })

    it('Fails if new email does not match RegEx', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const newEmail = 'spec@@Updated@testing.com'

        return (async () => {
            const user = await User.create({ name, email, password })

            expect(() => updateUserEmail(user.id, newEmail)).to.throw(RegexError, 'Email is not valid')

            const updatedUser = await User.findById(user.id)
            expect(updatedUser.id).to.equal(user.id)
            expect(updatedUser.email).to.equal('spec@testing.com')
        
        })()
    })

    it('Fails if userId is not valid', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const newEmail = 'spec@@Updated@testing.com'

        const badId = '1234Avas132'

        return (async () => {
            const user = await User.create({ name, email, password })

            expect(() => updateUserEmail(badId, newEmail)).to.throw(FormatError, 'User is not valid')

            const updatedUser = await User.findById(user.id)
            expect(updatedUser.id).to.equal(user.id)
            expect(updatedUser.email).to.equal('spec@testing.com')
        
        })()
        
    })

    it('Fails if userId does not exists', () => {
        const testId = new ObjectId().toString()

        const newEmail = 'specUpdated@testing.com'

        return (async() => {
            await expect(updateUserEmail(testId, newEmail)).to.eventually.be.rejectedWith(`User ${testId} does not exists or credentials are wrong`).and.be.an.instanceOf(AuthError)

        })()
    })

    after(() => disconnect())
})