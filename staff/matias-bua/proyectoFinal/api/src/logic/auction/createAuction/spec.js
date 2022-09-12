const {connect, disconnect, Types: { ObjectId }} = require("mongoose");
const { User, Auction } = require("../../../models");
const { NotFoundError } = require("errors");
const createAuction = require(".");

describe("createAuction", () => {
  beforeAll(() => connect("mongodb://localhost:27017/postits-test"));

  beforeEach(() => Promise.all([User.deleteMany(), Auction.deleteMany()]));

  it("succeeds on correct Auction push", () => {
    // happy path
    const name = "artattack";
    const email = "art@attack.com";
    const password = "123123123";

    return User.create({ name, email, password })
    .then((user) => {
      const auction = {
        author: user._id.toString(),
        productName: "epoxy resin",
        title: "Barra de resina epoxica",
        description: "Mesa de resina epoxica , con acabado de marmol",
        dateForBit: new Date("05/10/2022"),
        value: 450,
        image:
          "https://mesasepoxi.com/wp-content/uploads/2021/10/mesaepoxi.com-mesas-de-resina-epoxy-madera-nogal-olivo.jpg",
      };

      debugger

      return createAuction(auction)
        .then((res) => {
          expect(res).toBeUndefined();

          return Auction.find();
        })
        .then((auctions) => {
          expect(auctions).toHaveLength(1);

          const [_auction] = auctions;

          expect(_auction.author.toString()).toEqual(user.id.toString());
          expect(_auction.description).toEqual(auction.description);
          expect(_auction.value).toEqual(auction.value);
          expect(_auction.title).toEqual(auction.title);
          expect(_auction.createdAt).toBeInstanceOf(Date);
          expect(_auction.modifiedAt).toBeUndefined();
        });
    });
  });

  it("fails on non-existing user", () => {
    // unhappy path
    const userId = new ObjectId().toString();

    // return createAuction(userId)
    //     .then(() => { throw new Error('should not reach this point') })
    //     .catch(error => {
    //         expect(error).toBeInstanceOf(NotFoundError)
    //         expect(error.message).toEqual(`user with id ${userId} not found`)
    //     })

    // return expect(createAuction(userId)).rejects.toThrowError(NotFoundError,`user with id ${userId} not found`);
  });


  afterAll(() => disconnect());
});
