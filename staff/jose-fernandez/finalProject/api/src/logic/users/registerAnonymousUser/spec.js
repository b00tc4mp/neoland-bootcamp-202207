const { connect, disconnect } = require('mongoose')
const { User,Product,Item } = require('../../../models')
const { DuplicityError } = require('errors')
const  registerAnonymousUser = require('.')

describe('registerAnonymousUser', () => {
    //antes de todo me conecto a la base de datos
    beforeAll(() => connect('mongodb://localhost:27017/finalProject'))

    beforeEach(() => User.deleteMany()) //eliminar cada usuario

    it('succeds on new user anonymous', () => {  //happy path
        const product1 = new Product({
            name:'airMax90',
            sku: 'nkh1144',
            price: 150,
            discount: 0,
            stock: 114
        })

        const item1 = new Item({
            product: product1.id,
            price: 300,
            qty: 2
        })
        //carrito
        const cart = [item1]
      

        return registerAnonymousUser(cart)
            .then(res => {
                //no espero un resultado por la tanto lo coloco como no definido
                expect(res).toBeDefined()
                //prometo el regreso de del email del usuario encontrado
                return User.find()
            })
            .then(users => {
                //espero que la longitud de users sea 1
                expect(users).toHaveLength(1)

                const [user] = users

                expect(user.name).toBeUndefined()
                expect(user.email).toBeDefined()
                expect(user.password).toBeUndefined()
            })
    })

    it('fails on empty cart', () => {//unhappy path
        const cart=[]

        //con el metodo .create creamos usuario que nos retorna el parametro user
        return User.create({ cart })
            .then(() => {
                return registerAnonymousUser(cart)
            })
            .catch(error => {
                //import
                expect(error).toBeInstanceOf(BadRequestError)
                expect(error.message).toEqual('cart is empty')

            })
    })
    afterAll(() => disconnect())
})