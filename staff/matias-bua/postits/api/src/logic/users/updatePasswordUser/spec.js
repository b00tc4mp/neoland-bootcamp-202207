require('dotenv').config()
const { AuthError, RegexError } = require('errors')
const { User, Note } = require('../models')
const updateUserPassword = require('./updateUserPassword')
const { connect, disconnect, Types: { ObjectId } } = require('mongoose')

const { env : {MONGO_URL_TEST}} = process

describe('updateUserPassword', () => {
    before(() => connect(MONGO_URL_TEST))

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
            expect(result).toBeUndefined()
            expect(updatedUser.id).toEqual(user.id)
            expect(updatedUser.password).toEqual(newPassword)

        
        })()
    })

    it('Fails if userId does not exists', () => {
        const testId = new ObjectId().toString()
        const password = '123123123Aa!'

        const newPassword = 'Aa!123123123'
        const confirmNewPassword = 'Aa!123123123'
        return (async() => {
            await expect(updateUserPassword(testId, password, newPassword, confirmNewPassword)).toEventuallyBeRejectedWith(`User ${testId} does not exists or credentials are wrong`).andBeAnInstanceOf(AuthError)

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

            await expect(updateUserPassword(user.id, wrongPassword, newPassword, confirmNewPassword)).toEventuallyBeRejectedWith(`Old password is wrong`).andBeAnInstanceOf(AuthError)

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