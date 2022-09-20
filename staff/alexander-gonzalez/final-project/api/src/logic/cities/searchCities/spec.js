require('dotenv').config()

const {connect,disconnect, Types: {ObjectId}, default: mongoose } = require("mongoose");
const { expect } = require("chai");
const { City, User} = require("../../../models");
const { NotFoundError} = require("errors");
const searchCities = require(".");

const { MONGO_URL_TEST } = process.env;

describe("searchCities", () => {
  before(() => connect(MONGO_URL_TEST));

  //beforeEach(() => Promise.all([City.deleteMany()]));
  beforeEach(() => mongoose.connection.db.dropDatabase())

  it('succeeds on existing city', () => {  // happy path
    const name = 'Pepito Grillito'
    const email = 'pepito@grillito.com'
    const password = '123123123'
  
   const city1 = new City({
    name:'paris',
    photo:'picture',
    description:"Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
    coords:[48.856944444444, 2.3513888888889]
   })

   const city2 = new City({
    name:'roma',
    photo:'picture',
    description:"Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
    coords: [ 41.89193, 12.51133]
   })

   const city3 = new City({
    name:'london',
    photo:'picture',
    description:'Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.',
    coords:[51.50853, -0.12574]
   })
    const user = new User({ name, email, password })
    const query = 'paris'
  

    return Promise.all([user.save(), city1.save(), city2.save(), city3.save()])
    .then( ([user, city1, city2, city3]) => 
       searchCities(user.id, query)
       .then((city) => {
          expect(city).to.exist
          expect(city[0].name).to.equal('paris')
          expect(city[0].photo).to.equal('picture')
          expect(city[0].description).to.equal('Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.')
          expect(city[0].coords).to.deep.equal([48.856944444444, 2.3513888888889])
        })
    );
  });

  it("succeeds on one word to find city", () => {
    // happy path
    const name = 'Pepito Grillito'
    const email = 'pepito@grillito.com'
    const password = '123123123'
    
   const city1 = new City({
    name:'paris',
    photo:'picture',
    description:"Capital de Francia y de la región que ocupa, la Isla de Francia, París tiene una población de casi doce millones de habitantes, la más grande de Europa, y una superficie de 14.518 kilómetros cuadrados en zona urbana. Está situada al norte de Francia, concretamente al norte de la gran curva del río Sena.",
    coords:[48.856944444444, 2.3513888888889]
   })

   const city2 = new City({
    name:'roma',
    photo:'picture',
    description:"Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel.",
    coords: [ 41.89193, 12.51133]
   })

   const city3 = new City({
    name:'london',
    photo:'picture',
    description:'Londres, la capital de Inglaterra y del Reino Unido, es una ciudad del siglo XXI con una historia que se remonta a la época romana. En su centro se alzan el imponente Palacio del Parlamento, la torre del icónico reloj Big Ben y la Abadía de Westminster, lugar de las coronaciones monárquicas británicas. Al otro lado del río Támesis, la rueda de observación London Eye ofrece vistas panorámicas del complejo cultural South Bank y de toda la ciudad.', 
    coords:[51.50853, -0.12574]
   })
   const user = new User({ name, email, password })
    const query = 'r'

    return Promise.all([user.save(),city1.save(), city2.save(), city3.save()]).then(
      ([user, city1, city2, city3]) =>
        searchCities(user.id, query)
        .then((city) => {
          expect(city).to.have.length(1);
          expect(city[0].name).to.equal('roma')
          expect(city[0].photo).to.equal('picture')
          expect(city[0].description).to.equal("Roma, la capital de Italia, es una extensa ciudad cosmopolita que tiene a la vista casi 3,000 años de arte, arquitectura y cultura de influencia mundial. Las ruinas antiguas como las del Foro y el Coliseo evocan el poder del antiguo Imperio Romano. La ciudad del Vaticano, sede central de la Iglesia católica romana, cuenta con la Basílica de San Pedro y los Museos del Vaticano, que albergan obras maestras como los frescos de la Capilla Sixtina de Miguel Ángel." )
          expect(city[0].coords).to.deep.equal([ 41.89193, 12.51133] )

         


        })
    );
  });

  it('fails on non-existing city', () => {  // unhappy path
    const cityId = new ObjectId().toString()
    const userId = new ObjectId().toString()

    return searchCities(userId, cityId)
        .catch(error => {
            expect(error).to.be.instanceOf(NotFoundError)
            expect(error.message).to.equal(`user with id ${userId} not found`)
        })
})

after(() => disconnect())
})