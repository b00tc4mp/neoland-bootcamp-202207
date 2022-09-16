require('dotenv').config()

const { connect, disconnect, Types: { ObjectId }, default: mongoose } = require('mongoose')
const { expect } = require('chai')
const { User, City } = require('../../../models')
const { NotFoundError } = require('errors')
const retrieveCity = require('.')

const { MONGO_URL_TEST } = process.env

describe('retrieveCity', () => {
    before(() => connect(MONGO_URL_TEST))

    //beforeEach(() => Promise.all([User.deleteMany(), City.deleteMany()]))
    beforeEach(() => mongoose.connection.db.dropDatabase())


    it('succeeds on existing user and cities', () => {  // happy path
        const name = 'Pepito Grillito'
        const email = 'pepito@grillito.com'
        const password = '123123123'

        const name1 = 'paris'
        const photo1= 'picture'
        const description1 = "Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena."
        const coords1 = [48.856944444444, 2.3513888888889]

        const name2 = 'london'
        const photo2 = 'picture'
        const description2 = 'Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.'
        const coords2 = [51.50853, -0.12574]

        const name3 = 'roma'
        const photo3 = 'picture'
        const description3 =  "Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel."
        const coords3 = [ 41.89193, 12.51133]
        
        return Promise.all([
            User.create({ name, email, password }),
            City.create({ user: user.id, name: name1, photo: photo1, description: description1, coords: coords1 }), // create() -> new, save()
            City.create({ user: user.id, name: name2, photo: photo2, description: description2, coords: coords2 }),
            City.create({ user: user.id, name: name3, photo: photo3, description: description3, coords: coords3 })
        ])
            .then(([user, city1, city2, city3]) =>
                retrieveCity(user.id)
                    .then(cities => {
                        expect(cities).to.have.length(3)

                        const _city1 = cities.find(city => city.id === city1.id)
                        expect(_city1.name).to.be('paris')
                        expect(_city1.photo).to.be('picture here')
                        expect(_city1.description).to.be(" Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.", )
                        expect(_city1).to.exist
                        expect(_city1.user).to.be.undefined
                        expect(_city1.search).to.equal(city1.search)
                       

                        const _city2 = cities.find(city => city.id === city2.id)
                        expect(_city2.name).to.be('london')
                        expect(_city2.photo).to.be('TODO')
                        expect(_city2.description).to.be("Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.", )
                        expect(_city2).to.exist
                        expect(_city2.user).to.be.undefined
                        expect(_city2.search).to.equal(city2.search)
                    

                        const _city3 = cities.find(city => city.id === city3.id)
                        expect(_city3.name).to.be('roma')
                        expect(_city3.photo).to.be('TODO')
                        expect(_city3.description).to.be("Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",)
                        expect(_city3).to.exist
                        expect(_city3.user).to.be.undefined
                        expect(_city3.search).to.equal(city3.search)
                      
                    })
            )
    })

    it('fails on non-existing user', () => {  // unhappy path
        const userId = new ObjectId().toString()

        return retrieveCity(userId)
            .catch(error => {
                expect(error).to.be.instanceOf(NotFoundError)
                expect(error.message).to.equal(`user with id ${userId} not found`)
            })
    })

    after(() => disconnect())
})