const { connect, disconnect } = require('mongoose')
const { User,Product } = require('../../../models')
const { DuplicityError } = require('errors')
const  registerAnonymousUser = require('.')

describe('registerAnonymousUser', () => {
    //antes de todo me conecto a la base de datos
    beforeAll(() => connect('mongodb://localhost:27017/finalProject'))

    beforeEach(() => User.deleteMany()) //eliminar cada usuario

    it('succeds on new user anonymous', () => {  //happy path
        const airMax90 = new Product({
            sku: 'nkh1144',
            price: 150,
            discount: 0,
            stock: 114
        })
        const wendy = new User({
           
            cart:[item1,item2],
            email: '1662578284582-0.48371241617067273@anonymous.mail'
        })
       

        return registerAnonymousUser(email)
            .then(res => {
                //no espero un resultado por la tanto lo coloco como no definido
                expect(res).toBeUndefined()
                //prometo el regreso de del email del usuario encontrado
                return User.find({ create })
            })
            .then(users => {
                //espero que la longitud de users sea 1
                expect(users).toHaveLength(1)

                const [user] = users

                expect(user.name).toBeUndefined()
                expect(user.email).toEqual(email)
                expect(user.password).toBeUndefined()
            })
    })

    it('fails on empty cart', () => {//unhappy path

        const wendy = new User({
           
            cart:[],
            email: '1662578284582-0.48371241617067273@anonymous.mail'
        })
       

        //con el metodo .create creamos usuario que nos retorna el parametro user
        return User.create({ name, email, password })
            .then(() => {
                return registerAnonymousUser(name, email, password)
            })
            .catch(error => {
                expect(error).toBeInstanceOf(DuplicityError)
                expect(error.message).toEqual('user already exists')

            })
    })
    afterAll(() => disconnect())
})