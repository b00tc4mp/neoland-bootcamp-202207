const { writeFile } = require('fs')
const authenticateUser = require('./authenticateUser')
const { AuthError } = require('../errors')
const { deleteFiles } = require('../utils')

describe('authenticateUser', () => {
    const folder = './data/users'

    beforeEach(done => deleteFiles(folder, done))

    it('succeds authenticating on existing user', done => { // happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const user = { id: `user-${Math.round(Math.random() * Date.now())}`, name, email, password }

        const json = JSON.stringify(user)

        writeFile(`${folder}/${user.id}.json`, json, 'utf8', error => {
            if (error) return done(error)

            authenticateUser(email, password, (error, userId) => {
                expect(error).toBeNull()
                expect(userId).toEqual(user.id)

                done()
            })
        })
    })

    it('should fail with wrong credentials', done => {
        // escribo un usuario nuevo??
        const id = 'user-123123123123'
        const name = 'Monica'
        const email = 'moni@ca.com'
        const password = '123123123!'

        const user = {
            id,
            name,
            email,
            password
        }

        const json = JSON.stringify(user)
        writeFile(`${usersFolder}/${newUser.id}.json`, newJSON,'utf8', error => {
            if (error) return done(error)
            // autentifico con password erroneo
            authenticateUser(newUser.email, '123123124', (error, userId) => {
                expect(error).toBeInstanceOf(CredentialsError)
                expect(error.message).toBe('email or password incorrect')
                done()
            })
        })
    })

    // borro los archivos de nuevo
    afterEach(done => testDeleteFiles(usersFolder, done))
})