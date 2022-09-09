const { connect, disconnect, Types: { ObjectId }, } = require("mongoose");
const { Product, Item, Car } = require("../../../models");
const { NotFoundError } = require("errors");
const searchProduct = require(".");

const { MONGO_URL_TEST } = process.env;

describe("searchProduct", () => {
  before(() => connect(MONGO_URL_TEST));

  beforeEach(() => Promise.all([City.deleteMany()]));

  it("succeeds on existing Product", () => {
    // happy path

    const product1 = new Product({
      name: 'airMax90',
      sku: 'nkh1144',
      price: 150,
      discount: 0,
      stock: 114
    })
    const product2 = new Product({
      name: 'airMax270',
      sku: 'nkh1244',
      price: 140,
      discount: 0,
      stock: 116
    })
    const product3 = new Product({
      name: 'airMaxJordan',
      sku: 'nkh1344',
      price: 190,
      discount: 0,
      stock: 118
    })

    return Promise.all([product1.save(), product2.save(), product3.save()])
      .then(([product1, product2, product3]) =>
        SearchProduct('airMax90')
          .then((Product) => {
            expect(Product).to.have.length(1);

            expect(Product[0].name).toEqual('airMax90')
            expect(Product[1].sku).toEqual('nkh1144')
            expect(Product[2].price).toEqual(140)
            expect(Product[3].discount).toEqual(0)
            expect(Product[4].stock).toEqual(114)


          })
      );
  });

  it("succeeds on existing Product", () => {
    // happy path

    const product1 = new Product({
      name: 'airMax90',
      sku: 'nkh1144',
      price: 150,
      discount: 0,
      stock: 114
    })
    const product2 = new Product({
      name: 'airMax270',
      sku: 'nkh1244',
      price: 140,
      discount: 0,
      stock: 116
    })
    const product3 = new Product({
      name: 'airMaxJordan',
      sku: 'nkh1344',
      price: 190,
      discount: 0,
      stock: 118
    })


    return Promise.all([product1.save(), product2.save(), product3.save()]).then(
      ([product1, product2, product3]) =>
        SearchProduct('air')
          .then((Product) => {
            expect(Product).to.have.length(3);

          })
    );
  });


  it("fails on non-existing Product", () => {
    // unhappy path
    const productId = new ObjectId().toString();

    return searchProduct(productId)
      .catch((error) => {
        expect(error).toBeInstanceOf(NotFoundError);
        expect(error.message).toEqual(`product with id ${productId} not found`);
      });
  });

  after(() => disconnect());
});