const { connect, disconnect } = require('mongoose')
const { expect } = require('chai')
const { User } = require('../models')
const { DuplicityError } = require('../errors')
const { registerUser } = require('.')

describe('registerUser', () => {
    // para que no se borren nuestros datos mongo nos permite crear una nueva base de datos
    //de prueba en este caso le pondremos 'postits-test

    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany())

    //No se usa el dom porque cuando tu haces una promesa aunque es asincrono, este se entera y se espera

    it('succeeds on new user', () => {  // happy path exito registro
        const name = 'Pepi Grillo'
        const email = 'pepi@grillo.com'
        const password = '123123123'

        return registerUser(name, email, password)
            .then(res => {
                expect(res).to.be.undefined

                return User.find({ email })
                //comprueba que se ha ingresado correctamente en la bd
            })
            .then(users => {
                expect(users).to.have.length(1)
                //comprueba que hay uno solo en la bd

                const [user] = users

                expect(user.name).to.equal(name)
                expect(user.email).to.equal(email)
                expect(user.password).to.equal(password)
            })
    })

    it('fails on existing user', () => {  // unhappy path
        const name = 'Pepi Grillo'
        const email = 'pepi@grillo.com'
        const password = '123123123'

        return User.create({ name, email, password })
            .then(() => registerUser(name, email, password))
            .catch(error => {
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('user already exists')
            })
    })
// importante esto al terminar todos los test
    after(() => disconnect())
    // afterAll(() => disconnect('mongodb://localhost:27017/test')) OJO CHACHI PIRULI
})

//nota: es asyncrono pero no usas el DOM
//aquí no se usa el dom porque tu cuando haces una promesa EL SE ENTERA Y SE ESPERA
//lo bueno de la promesa es que si algo falla se entera y te dice que el test fallo