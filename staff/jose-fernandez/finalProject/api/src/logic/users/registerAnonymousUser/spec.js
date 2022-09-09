require('dotenv').config()

const { connect, disconnect } = require('mongoose')
const { User,Product,Item,Cart } = require('../../../models')
const { BadRequestError } = require('errors')
const  registerAnonymousUser = require('.')

const { MONGO_URL_TEST } = process.env;

describe("registerAnonymousUser", () => {
  beforeAll(() => connect(MONGO_URL_TEST));

    beforeEach(() => User.deleteMany()) //eliminar cada usuario

    it('succeds on new user anonymous', () => {  //happy path
        const product1 = new Product({
            name:'airMax90',
            sku: 'nkh1144',
            price: 150,
            discount: 0,
            stock: 114
        })
        const product2 = new Product({
            name:'techFleece',
            sku: 'nkh1444',
            price: 180,
            discount: 0,
            stock: 114
        })

        const item1 = new Item({
            product: product1.id,
            price: 300,
            qty: 2
        })
        const item2 = new Item({
            product: product2.id,
            price: 360,
            qty: 2
        })
        //carrito
        const cart = new Cart([item1,item2])
      

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
                debugger
                
                // expect(error).toBeInstanceOf(ValidationError)
                expect(error).toBeInstanceOf(BadRequestError)
                expect(error.message).toEqual('cart is empty')

            })
    })
    afterAll(() => disconnect())
})