const { readdir, unlink, readFile, writeFile } = require('fs')
const { AuthError } = require('../errors')
const authenticateUser = require('./authenticateUser')
const {deleteFiles} = require('../utils')
//done es como callback()
describe('authenticateUser', () => {
    const folder = './data/users'
    //para borrar todos los archivos antes de cada it()
    beforeEach(done => deleteFiles(folder, done))
    it('succeds authenticate user', done => {// happy path
        const name = 'Pepito'
        const email = 'pepito@grillo.com'
        const password = '123123123'
        const user = {
            id: `user-${Math.round(Math.random() * Date.now())}`,
            name,
            email,
            password
        }

        const json = JSON.stringify(user)

        writeFile(`${folder}/${user.id}.json`, json, 'utf8', error => {
            if (error) return done(error)


            authenticateUser(email, password, (error, userId) => {
                expect(error).toBeNull()

                expect(user.id).toEqual(userId)
                expect(user.email).toEqual(email)
                expect(user.password).toEqual(password)
                done()
            })
        })
    })

    afterAll(done => deleteFiles(folder,done))
})
