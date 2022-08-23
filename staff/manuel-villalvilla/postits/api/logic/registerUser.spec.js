const { readdir, unlink, readFile, writeFile } = require('fs')
const DuplicityError = require('../errors/DuplicityError')
const registerUser = require('./registerUser')

describe('registerUser', () => {
    const folder = './data/users'

    // borro los archivos de la carpeta antes de ejecutar el test
    beforeEach(done => { // funcion de Jest. 
        readdir(folder, (error, files) => {
            if (error) {
                done(error) // funcion de jest porque todo esto es asincrono. hay q decirle a jest cuando termina el testing

                return
            }

            if (files.length === 0) {
                done()

                return
            }

            let count = 0

            files.forEach(file => {
                unlink(`${folder}/${file}`, error => { // funcion de fs para borrar archivos
                    if (error) {
                        done(error)

                        return
                    }

                    count++

                    if (count === files.length)
                        done() // funcion de jest para decirle al testing q pare porque todo esto es asincrono
                })
            })
        })
    })

    it('succeds registering a new user', done => { // happy path. inserto el callback done por la asincronia del testing 
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'
        // intento registrar un nuevo usuario
        registerUser(name, email, password, error => {
            expect(error).toBeNull()

            readdir(folder, (error, files) => {
                if (error) {
                    done(error)
    
                    return
                }
                // compruebo q ha creado 1 archivo
                expect(files).toHaveLength(1)

                const file = files[0]
                // leo el archivo y lo comparo con el usuario
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
        // archivos borrados por el beforeEach
        // creo usuario nuevo
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        const newUser = {
            id: `user-${Math.round(Math.random() * Date.now())}`,
            name,
            email,
            password
        }

        const newJSON = JSON.stringify(newUser)
        // creo un archivo nuevo con el nuevo usuario
        writeFile(`${folder}/${newUser.id}.json`, newJSON, 'utf8', error => {
            if (error) {
                done(error)

                return
            }
            // intento registrar un nuevo usuario con los mismos datos, unhappy path
            registerUser(name, email, password, error => {
                if (error) {
                    expect(error).toBeInstanceOf(DuplicityError)
                    expect(error.message).toBe(`user with email ${email} already exists`)
                }
                // leo la carpeta para comprobar q solo sigue habiendo 1 archivo
                readdir(folder, (error, files) => {
                    if (error) {
                        done(error)
        
                        return
                    }
        
                    expect(files).toHaveLength(1)

                    const file = files[0]
                    // leo el archivo para comprobar q su user.id no ha cambiado
                    readFile(`${folder}/${file}`, 'utf8', (error, json) => {
                        if (error) {
                            done(error)
    
                            return
                        }
    
                        const user = JSON.parse(json)

                        expect(user.id).toBe(newUser.id)

                        done()
                    })
                })
            })
        })
    })
})