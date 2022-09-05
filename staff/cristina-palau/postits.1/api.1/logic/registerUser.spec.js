const { readdir, unlink, readFile, writeFile } = require('fs')
const { SystemError, DuplicityError } = require('../errors')
const registerUser = require('./registerUser')

describe('registerUser', () => {
    const folder = './data/users'

    beforeEach(done => {
        readdir(folder, (error, files) => {
            if (error) {
                done(error)

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

    // happy path
    
    it('succeds registering a new user', done => { 
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

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

    it('should fail when user already exists', done => { // unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const newUser = {
            id: `user-${Math.round(Math.random() * Date.now())}`,
            name,
            email,
            password
        }

        const newJson = JSON.stringify(newUser)

        writeFile(`${folder}/${newUser.id}.json`, newJson, 'utf8', error => {
            if (error) {
                done(new SystemError(`cannot write file ${newUser.id}.json in folder ${folder}`))

                return
            }

            registerUser(name, email, password, error => {
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toBe('user with email pepito@grillo.com already exists')

                readdir(folder, (error, files) => {
                    if (error) {
                        done(error)

                        return
                    }

                    expect(files).toHaveLength(1)

                    done()
                })
            })
        })
    })
})