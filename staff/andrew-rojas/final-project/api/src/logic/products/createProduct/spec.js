const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
const { User, Product } = require('../../../models')
const { NotFoundError } = require('errors')
const createProduct = require('.')

describe('createProduct', () => {
  beforeAll(() => connect('mongodb://localhost:27017/product-test'))

  beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]))

  it('succeeds on correct data', () => { // happy path

    const name = 'Michael Jordan'
    const email = 'michael@jordan.com'
    const password = '123123123'

    const productName = 'Fanta limon'
    const category = 'bebida'
    const quantity = 30
    const description = ''

    return User.create({ name, email, password})
      .then(user => 
        createProduct(user.id, productName, category, quantity, description)
          .then( res =>  {
            expect(res).toBeUndefined()

            return Product.find()
          })
          .then(products => {
            expect(products).toHaveLength(1)

            const [product] = products

            expect(product.user.toString()).toEqual(user.id)
            expect(product.productName).toEqual(productName)
            expect(product.category).toEqual(category)
            expect(product.quantity).toEqual(quantity)
            expect(product.description).toEqual(description)
            // expect(product.createdAt).toBeInstanceOf(Date)
            // expect(product.modifiedAt).toBeUndefined()
          })
      )
  })

  afterAll(() => disconnect())

})
