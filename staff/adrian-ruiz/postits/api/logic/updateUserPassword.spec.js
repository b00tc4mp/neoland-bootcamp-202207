const { AuthError, RegexError } = require('errors')
const { User, Note } = require('../models')
const updateUserPassword = require('./updateUserPassword')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const chai = require('chai')
const chaiaspromise = require('chai-as-promised')
const expect = chai.expect
chai.use(chaiaspromise)

describe('updateUserPassword', () => {
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => Promise.all([User.deleteMany(), Note.deleteMany()]))

    it('Succeeds updating user password', () => {
        
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const newPassword = 'Aa!123123123'
        const confirmNewPassword = 'Aa!123123123'
        return (async () => {
            const user = await User.create({ name, email, password })

            const result = await updateUserPassword(user.id, password, newPassword, confirmNewPassword)

            const updatedUser = await User.findById(user.id)
            expect(result).to.be.undefined
            expect(updatedUser.id).to.equal(user.id)
            expect(updatedUser.password).to.equal(newPassword)

        
        })()
    })

    it('Fails if userId does not exists', () => {
        const testId = new ObjectId().toString()
        const password = '123123123Aa!'

        const newPassword = 'Aa!123123123'
        const confirmNewPassword = 'Aa!123123123'
        return (async() => {
            await expect(updateUserPassword(testId, password, newPassword, confirmNewPassword)).to.eventually.be.rejectedWith(`User ${testId} does not exists or credentials are wrong`).and.be.an.instanceOf(AuthError)

        })()
    })

    it('Fails if old password is not correct', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'
        const wrongPassword ='Aa123A!dasd'
        const newPassword = 'Aa!123123123'
        const confirmNewPassword = 'Aa!123123123'

        return (async() => {
            const user = await User.create({ name, email, password })

            await expect(updateUserPassword(user.id, wrongPassword, newPassword, confirmNewPassword)).to.eventually.be.rejectedWith(`Old password is wrong`).and.be.an.instanceOf(AuthError)

        })()

    })

    it('Fails if newPassword and confirmNewPassword are not the same', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const newPassword = 'Aa!123123123'
        const confirmNewPassword = 'Aa!44444444'

        return (async() => {
            const user = await User.create({ name, email, password })
            debugger
            expect(() => updateUserPassword(user.id, password, newPassword, confirmNewPassword)).to.throw(AuthError, 'New password and confirm new password are not the same')
        })()
 
    })
    it('Fails if old password does not match Regex', () => {
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const wrongPass = '123123aa123das'
        const newPassword = 'Aa!123123123'
        const confirmNewPassword = 'Aa!123123123'

        return (async() => {
            const user = await User.create({ name, email, password })

            expect(() => updateUserPassword(user.id, wrongPass, newPassword, confirmNewPassword)).to.throw(RegexError,`\nold password does not meet the requirements: \n- Between 8 and 15 characters\n- At least 1 capital letter\n- At least 1 lowercase letter\n- At least 1 symbol`)

        })()
 
    })

     //TODO Validations testing (Pass Regex...)
    after(() => disconnect())
})