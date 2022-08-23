const { readdir, writeFile, unlink, readFile } = require('fs')
const registerUser = require('./registerUser')
const DuplicityError = require('../errors/DuplicityError')

describe('registerUser', () => {
    const folder = './data/users'

    beforeEach(done => {
        readdir(folder, (error, files) => {
            if (error) {
                done(error)

                return
            }

            if (files.length === 0) {
                done()

                return
            }
            let count = 0

            files.forEach(file => {
                unlink(`${folder}/${file}`, error => {
                    if (error) {
                        done(error)

                        return
                    }

                    count++

                    if (count === files.length)
                        done()
                })
            })
        })
    })

    it('succeeds registering a new user', done => { //happy path
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        debugger
        registerUser(name, email, password, error => {

            expect(error).toBeNull()

            readdir(folder, (error, files) => {
                if (error) {
                    done(error)

                    return
                }

                expect(files).toHaveLength(1)

                const file = files[0]

                readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                    if (error) {
                        done(error)

                        return
                    }

                    const user = JSON.parse(json)

                    expect(typeof user.id).toBe('string')
                    expect(user.name).toEqual(name)
                    expect(user.email).toEqual(email)
                    expect(user.password).toEqual(password)

                    done()
                })
            })
        })
    })

    it('should fail when user already exists', done => {
        const id = 'user-1231231231231'
        const name = 'SpecTesting'
        const email = 'spec@testing.com'
        const password = '123123123Aa!'

        const newUser = {
            id,
            name,
            email,
            password
        }

        const newJson = JSON.stringify(newUser)

        writeFile(`${folder}/test.json`, newJson, "utf8", (error) => {
            if (error) {
                done(error)

                return
            }

            registerUser(name, email, password, error => {
                debugger
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toBe(`User with email ${email} already exists`)

                readdir(folder, (error, files) => {
                    if (error) {
                        done(error)

                        return
                    }

                    expect(files).toHaveLength(1)

                    let file = files[0]
                    readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                        if (error) {
                            done(error)

                            return
                        }

                        const user = JSON.parse(json)

                        expect(user.id).toEqual('user-1231231231231')
                        expect(user.name).toEqual('SpecTesting')
                        expect(user.email).toEqual('spec@testing.com')
                        expect(user.password).toEqual('123123123Aa!')
                        done()
                    })
                })
            })
        })
    })
})