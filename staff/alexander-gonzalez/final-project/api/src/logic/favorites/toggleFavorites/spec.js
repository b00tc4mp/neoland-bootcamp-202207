require('dotenv').config()

const { connect, disconnect, Types: { ObjectId } } = require("mongoose");
  const { User, City, Place } = require("../../../models");
  const { NotFoundError } = require("errors");
  const addFavorites = require(".");
  
  describe("addFavorites", () => {
    before(() => connect(MONGO_URL_TEST));
  
    beforeEach(() => mongoose.connection.db.dropDatabase())
  
    it("succeeds on select place", () => {
        
      // happy path
  
      const name = "Pepito Grillo";
      const email = "pepito@grillito.com";
      const password = "123123123";
      const favorites = fontanaDiTrevi;

      
  
      const name1 = "fontanaDiTrevi";
      const photo1 = 'picture'
      const description = 'La Fontana di Trevi, con cerca de 40 metros de frente, es una de las mayores fuentes monumentales del Barroco en Roma. Según la actual división administrativa del centro de Roma, está situada en el rione de Trevi.'
      const favorites1 = 0

  
      return User.create({ name, email, password })
      .then((user) => {
        Place.create({
          user: user.id
          
         
        })
        
        .then((place) => {
          addFavorites(user.id, place._id, "add")
          .then((user) => {
            expect(user.id.favorites).to.equal([place.id]);
          });
        });
      });
    });
  
    after(() => disconnect());
  });