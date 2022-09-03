const { connect, disconnect } = require('mongoose')
const { expect } = require('chai')
const { User } = require('../models')
const { DuplicityError } = require('../errors')
const { registerUser } = require('.')

describe('registerUser', () => {
    //antes de todo me conecto a la base de datos
    before(() => connect('mongodb://localhost:27017/postits-test'))

    beforeEach(() => User.deleteMany()) //eliminar cada usuario

    it('succeds on new user', () => {  //happy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        return registerUser(name, email, password)
            .then(res => {
                //no espero un resultado por la tanto lo coloco como no definido
                expect(res).to.be.undefined
                //prometo el regreso de del email del usuario encontrado
                return User.find({ email })
            })
            .then(users => {
                //espero que la longitud de users sea 1
                expect(users).to.have.length(1)

                const [user] = users

                // expect(user.id).to.exist
                expect(user.name).to.equal(name)
                expect(user.email).to.equal(email)
                expect(user.password).to.equal(password)
            })
    })

    it('fails on existing user', () => {//unhappy path
        const name = 'Pepito Grillo'
        const email = 'pepito@grillo.com'
        const password = '123123123'

        //con el metodo .create creamos usuario que nos retorna el parametro user
        return User.create({ name, email, password })
            .then(() => registerUser(name, email, password))
            .catch(error => {
                expect(error).to.be.instanceOf(DuplicityError)
                expect(error.message).to.equal('user already exists')

            })
    })
    after(() => disconnect())
})