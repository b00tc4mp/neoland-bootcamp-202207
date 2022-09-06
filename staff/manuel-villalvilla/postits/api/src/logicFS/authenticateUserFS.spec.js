const { writeFile } = require('fs')
const { testDeleteFiles } = require('../utils')
const authenticateUserFS = require('../logicFS/authenticateUserFS')
const { CredentialsError } = require('errors') // errores indexados en un index.js

xdescribe('Authenticate User FS', () => {
    const usersFolder = './src/data/users'

    const newUser = {
        id: `user-${Math.round(Math.random() * Date.now())}`,
        name: "manu",
        email: "manu@manu.com",
        password: "123123123"
    }

    const newJSON = JSON.stringify(newUser)

    // borro los archivos de la carpeta antes de ejecutar el test
    beforeEach(done => testDeleteFiles(usersFolder, done))

    it('should succeed authenticating user', done => { // xit omite este test. happy path
        // creo y escribo un usuario nuevo
        writeFile(`${usersFolder}/${newUser.id}.json`, newJSON,'utf8', error => {
            if (error) return done(error)
            // intento autenticar con los mismos datos del usuario
            authenticateUserFS(newUser.email, newUser.password, (error, userId) => {
                expect(error).toBeNull()
                expect(userId).toEqual(newUser.id)
                done()
            })
        })
    })

    it('should fail with wrong credentials', done => {
        // creo y escribo un usuario nuevo
        writeFile(`${usersFolder}/${newUser.id}.json`, newJSON,'utf8', error => {
            if (error) return done(error)
            // intento autenticar con password erroneo
            authenticateUserFS(newUser.email, '123123124', (error, userId) => {
                expect(error).toBeInstanceOf(CredentialsError)
                expect(error.message).toBe('email or password incorrect')
                done()
            })
        })
    })

    // borro los archivos de nuevo
    afterEach(done => testDeleteFiles(usersFolder, done))
})