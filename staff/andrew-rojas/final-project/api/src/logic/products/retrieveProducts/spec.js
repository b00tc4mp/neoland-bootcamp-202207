const {
  connect,
  disconnect,
  Types: { ObjectId },
} = require("mongoose");
const { User, Product } = require("../../../models");
const { NotFoundError } = require("errors");
const retrieveProducts = require(".");

describe("retrieveProducts", () => {
  beforeAll(() => connect("mongodb://localhost:27017/product-test"));

  beforeEach(() => Promise.all([User.deleteMany(), Product.deleteMany()]));

  it("succeeds on existing user and product", () => {
    // happy path

    // const name = "Michael Jordan";
    // const email = "michael@jordan.com";
    // const password = "123123123";

    const productName = "Drink";
    const category = "drink";
    const quantity = 30;
    const description = "";

    const user1 = new User({ 
      name: "Michael Jordan",
      email: "michael@jordan.com",
      password: "123123123", });

    const product1 = new Product({
      user: user1.id,
      name: productName + 1,
      category,
      quantity: quantity + 1,
      description,
    });
    const product2 = new Product({
      user: user1.id,
      name: productName + 2,
      category,
      quantity: quantity + 2,
      description,
    });

    const user2 = new User({ 
      name: "Magic Johnson",
      email: "magic@johnson.com",
      password: "123123123", });

    const product3 = new Product({
      user: user2.id,
      name: productName + 3,
      category,
      quantity: quantity + 3,
      description,
    });
    const product4 = new Product({
      user: user2.id,
      name: productName + 4,
      category,
      quantity: quantity + 3,
      description,
    });

    return Promise.all([
      user1.save(),
      product1.save(),
      product2.save(),
      user2.save(),
      product3.save(),
      product4.save(),
    ])
    .then(([user1, product1, product2, user2, product3, product4]) => {
      return retrieveProducts(user.id).then((products) => {
        expect(product).toHaveLength(4);

        const _product1 = products.find(
          (product) => product.id === product1.id
        );
        expect(_product.user.toString()).toEqual(user1.id)
        expect(_product1).toBeUndefined();
        expect(_product1.name).toEqual(product1.name);

        const _product2 = products.find(
          (product) => product.id === product2.id
        );
        expect(_product.user.toString()).toEqual(user1.id)
        expect(_product2).toBeUndefined();
        expect(_product2.name).toEqual(product2.name);

        const _product3 = products.find(
          (product) => product.id === product3.id
        );
        expect(_product.user.toString()).toEqual(user2.id)
        expect(_product3).toBeUndefined();
        expect(_product3.name).toEqual(product3.name);

        const _product4 = products.find(
          (product) => product.id === product4.id
        );
        expect(_product.user.toString()).toEqual(user2.id)
        expect(_product4).toBeUndefined();
        expect(_product4.name).toEqual(product4.name);

        // expect(_product1.user.toString()).toEqual(user.id)
      });
    });
  });

  //   it('fails on non-existing user', () => {  // unhappy path
  //     const userId = new ObjectId().toString()

  //     return retrieveProducts(userId)
  //         .catch(error => {
  //             expect(error).toBeInstanceOf(NotFoundError)
  //             expect(error.message).toEqual(`user with id ${userId} not found`)
  //         })
  // })

  afterAll(() => disconnect());
});
