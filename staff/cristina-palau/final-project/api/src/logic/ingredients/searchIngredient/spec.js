// require('dotenv').config()

// const { connect, disconnect, Types: { ObjectId } } = require('mongoose')
// const { Ingredient } = require('../../../models')
// const { NotFoundError } = require('errors')
// const searchIngredient = require('.')

// const { MONGO_URL_TEST } = process.env

// describe('searchIngredient', () => {
//     beforeAll(() => connect(MONGO_URL_TEST))

//     beforeEach(() => Promise.all([Ingredient.deleteMany()]))

//     it('succeeds on existing ingredient', () => {  // happy path
//         const query = 'per'

//         return Promise.all([
//             Ingredient.create({ name: 'pera', type: 'Fruta' }),
//             Ingredient.create({ name: 'chocolate', type: 'Cacao' }),
//             Ingredient.create({ name: 'bacalao', type: 'Pescado' }),
//             Ingredient.create({ name: 'aperitivo', type: 'Picoteo' })
//         ])
//             .then(() => {
//                 searchIngredient(query)
//                     .then(ingredients => {
//                         expect(ingredients).toHaveLength(3)

//                         const [ingredient] = ingredients

//                         expect(ingredient).toBeDefined()
//                     })
//             })
//     })

//     it('fails on non-existing ingredient', () => {  // unhappy path
//         const query = 'por'

//         return Promise.all([
//             Ingredient.create({ name: 'pera', type: 'Fruta' }),
//             Ingredient.create({ name: 'chocolate', type: 'Cacao' }),
//             Ingredient.create({ name: 'bacalao', type: 'Pescado' }),
//             Ingredient.create({ name: 'aperitivo', type: 'Picoteo' })
//         ])
//             .then(() => {
//                 searchIngredient(query)
//                     .then(ingredients => {
//                         expect(ingredients).toHaveLength(3)

//                         const [ingredient] = ingredients

//                         expect(ingredient).toBeUndefined()
//                     })
//             })
//     })

//     afterAll(() => disconnect())
// })