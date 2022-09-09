const {connect,disconnect, Types: { ObjectId },} = require("mongoose");
const { Product,Item, Car } = require("../../../models");
const { NotFoundError } = require("errors");
const searchProduct = require(".");

const { MONGO_URL_TEST } = process.env;

describe("searchProduct", () => {
  before(() => connect(MONGO_URL_TEST));

  beforeEach(() => Promise.all([City.deleteMany()]));

  it("succeeds on existing Product", () => {
    // happy path

    const airMax90 = new Product({
        sku: 'nkh1144',
        price: 150,
        discount: 0,
        stock: 114
    })
    const airMax270 = new Product({
        sku: 'nkh1244',
        price: 140,
        discount: 0,
        stock: 116
    })
    const airJordan = new Product({
        sku: 'nkh1344',
        price: 190,
        discount: 0,
        stock: 118
    })

    return Promise.all([airMax90.save(), airMax270.save(), airJordan.save()])
    .then(([airMax90, airMax270, airJordan]) =>
        SearchProduct('airMax90')
        .then((Product) => {
          expect(Product).to.have.length(1);

          expect(Product[0].sku).toEqual('airMax90')
          expect(Product[1].price).toEqual(140)
          expect(Product[2].discount).toEqual(0)
          expect(Product[0].stock).toEqual(114)

        
        })
    );
  });

  it("succeeds on existing Product", () => {
    // happy path

    const airMax90 = new Product({
        sku: 'nkh1144',
        price: 150,
        discount: 0,
        stock: 114
    })
    const airMax270 = new Product({
        sku: 'nkh1244',
        price: 140,
        discount: 0,
        stock: 116
    })
    const airJordan = new Product({
        sku: 'nkh1344',
        price: 190,
        discount: 0,
        stock: 118
    })


    return Promise.all([airMax90.save(), airMax270.save(), airJordan.save()]).then(
      ([airMax90, airMax270, airJordan]) =>
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