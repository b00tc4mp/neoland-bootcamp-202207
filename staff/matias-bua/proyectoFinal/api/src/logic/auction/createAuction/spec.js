const {connect, disconnect, Types: { ObjectId }} = require("mongoose");
const { User, Auction } = require("../../../models");
const { NotFoundError } = require("errors");
const createAuction = require(".");

describe("createAuction", () => {
  beforeAll(() => connect("mongodb://localhost:27017/postits-test"));

  beforeEach(() => Promise.all([User.deleteMany(), Auction.deleteMany()]));

  it("succeeds on correct Auction push", () => {  // happy path
  
    const name = "art";
    const lastname = "attack";
    const email = "art@attack.com";
    const password = "123123123";
    const birth = "05/05/2000";

    return User.create( { name, lastname, email, password, birth } )
    .then((user) => {
     
        const author = user._id
        const title = "Barra de resina epoxica"
        const description = "Mesa de resina epoxica, con acabado de marmol"
        const value = 450
        const image = "https://mesasepoxi.com/wp-content/uploads/2021/10/mesaepoxi.com-mesas-de-resina-epoxy-madera-nogal-olivo.jpg"
        const initialDate = new Date("05/10/2022")
        const finalDate = new Date("07/10/2020")
      

      return createAuction(author, title, description, value, image, initialDate, finalDate)
        .then((res) => {
          expect(res).toBeUndefined();

          return Auction.find();
        })
        .then((auctions) => {
          expect(auctions).toHaveLength(1);

          const [_auction] = auctions;

          expect(_auction.author).toBeInstanceOf(ObjectId);
          expect(_auction.title).toEqual("Barra de resina epoxica");
          expect(_auction.description).toEqual("Mesa de resina epoxica, con acabado de marmol");
          expect(_auction.value).toEqual(450);
          expect(_auction.image).toEqual("https://mesasepoxi.com/wp-content/uploads/2021/10/mesaepoxi.com-mesas-de-resina-epoxy-madera-nogal-olivo.jpg")
          expect(_auction.initialDate).toBeInstanceOf(Date);
          expect(_auction.finalDate).toBeInstanceOf(Date);
        });
    });
  });

  it("fails on non-existing user", () => {
    // unhappy path
    const userId = new ObjectId().toString();

        const title = "Barra de resina epoxica"
        const description = "Mesa de resina epoxica, con acabado de marmol"
        const value = 450
        const image = "https://mesasepoxi.com/wp-content/uploads/2021/10/mesaepoxi.com-mesas-de-resina-epoxy-madera-nogal-olivo.jpg"
        const initialDate = new Date("05/10/2022")
        const finalDate = new Date("07/10/2020")
      

    return createAuction(userId, title, description, value, image, initialDate, finalDate)
        .then(() => { throw new Error('should not reach this point') })
        .catch(error => {
            expect(error).toBeInstanceOf(NotFoundError)
            expect(error.message).toEqual(`user with id ${userId} not found`)
        })

    // return expect(createAuction(userId)).rejects.toThrowError(NotFoundError,`user with id ${userId} not found`);
  });


  afterAll(() => disconnect());
});
