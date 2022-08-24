const { writeFile } = require('fs')
const clearFolder = require('../utils/clearFolder')
const authenticateUser = require('./authenticateUser')
const {AuthError, FormatError, RegexError} = require('errors')
describe('authenticateUser', () => {
    const folder = './data/users'

    beforeEach(done => {
        clearFolder(folder, error => {
            if (error) return done(error)

            done()
        })
    })

    it('Suceeds authenticating on existing user', done => {
        const id = 'user-1231231231231'
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const user = {
            id,
            name,
            email,
            password
        }

        const json = JSON.stringify(user)

        writeFile(`${folder}/${user.id}`, json, 'utf8', error => {
            if (error) return done(error)

            authenticateUser(user.email, user.password, (error, userId) => {
                expect(error).toBeNull()
                expect(userId).toEqual(user.id)

                done()
            })
        })
    })

    //TODO unhappy paths
    it('Fails(AUTH Error) if credentials are wrong on existing user', done => {
        const id = 'user-1231231231231'
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const user = {
            id,
            name,
            email,
            password
        }

        const json = JSON.stringify(user)

        writeFile(`${folder}/${user.id}`, json, 'utf8', error => {
            if (error) return done(error)

            authenticateUser('wrong@wrong.es', 'wrongPass123!', (error, userId) => {
                expect(error).toBeInstanceOf(AuthError)
                expect(error.message).toEqual('Email and/or password wrong')
                expect(userId).toBeUndefined()

                done()
            })
        })
    })

    it('Fails(Throw Format Error) if mail format is wrong on existing user', done => {
        const id = 'user-1231231231231'
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const user = {
            id,
            name,
            email,
            password
        }

        const json = JSON.stringify(user)

        writeFile(`${folder}/${user.id}`, json, 'utf8', error => {
            if (error) return done(error)

            expect(function(){authenticateUser('wrong@wrong...es', user.password, (error, userId) => {
                console.log('Should not reach here')
            })}).toThrow()

            done()
            
        })
    })

    afterAll(done => {
        clearFolder(folder, error => {
            if (error) return done(error)

            done()
        })
    })
})