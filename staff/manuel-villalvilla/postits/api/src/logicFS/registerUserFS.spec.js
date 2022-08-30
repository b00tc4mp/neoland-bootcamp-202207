const { readFile, writeFile } = require('fs')
const { DuplicityError } = require('../errors') // errores indexados en un index.js
const registerUserFS = require('../logicFS/registerUserFS')
const { testDeleteFiles, readFolder } = require('../utils')

xdescribe('registerUserFS', () => {
    const usersFolder = './src/data/users'

    const name = 'Pepito Grillo'
    const email = 'pepito@grillo.com'
    const password = '123123123'

    // borro los archivos de la carpeta antes de ejecutar el test
    beforeEach(done => testDeleteFiles(usersFolder, done)) // beforeEach es una funcion de Jest q se ejecuta antes de cada test

    it('succeds registering a new user', done => { // happy path. inserto el callback done por la asincronia del testing 
        // intento registrar un nuevo usuario
        registerUserFS(name, email, password, error => {
            expect(error).toBeNull()
            // compruebo q ha creado 1 archivo
            readFolder(usersFolder, (error, files) => {
                if (error) return done(error)

                expect(files).toHaveLength(1)
                
                // leo el archivo y lo comparo con el usuario
                const file = files[0]
                
                readFile(`${usersFolder}/${file}`, 'utf8', (error, json) => {
                    if (error) return done(error)

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
        // archivos borrados por el beforeEach
        // creo usuario nuevo

        const newUser = {
            id: `user-${Math.round(Math.random() * Date.now())}`,
            name,
            email,
            password
        }

        const newJSON = JSON.stringify(newUser)
        // creo un archivo nuevo con el nuevo usuario
        writeFile(`${usersFolder}/${newUser.id}.json`, newJSON, 'utf8', error => {
            if (error) return done(error)

            // intento registrar un nuevo usuario con los mismos datos, unhappy path
            registerUserFS(name, email, password, error => {
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toBe(`user with email ${email} already exists`)
                
                // leo la carpeta para comprobar q solo sigue habiendo 1 archivo
                readFolder(usersFolder, (error, files) => {
                    if (error) return done(error)
        
                    expect(files).toHaveLength(1)

                    const file = files[0]
                    // leo el archivo para comprobar q su user.id no ha cambiado
                    readFile(`${usersFolder}/${file}`, 'utf8', (error, json) => {
                        if (error) return done(error) // early return en 1 sola linea
    
                        const user = JSON.parse(json)

                        expect(user.id).toBe(newUser.id)

                        done()
                    })
                })
            })
        })
    })
    // borro los archivos de nuevo
    afterAll(done => testDeleteFiles(usersFolder, done))
})