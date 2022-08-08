describe("map prototype", function () {
  test("multiply the prices by the inflation rate", function () {
    const inflation = 10;

    const productList = [
      { product: leek, price: 20, discount: 10 },
      { product: potato, price: 60, discount: 20 },
      { product: tomato, price: 30, discount: 5 },
      { product: juice, price: 10, discount: 10 },
    ];

    const map1 = productList.map(function (price) {
      return {
        product: productList.product,
        price: productList.price * inflation,
        discount: productList.discount,
      };
    });
    check(map1.length, 4);
    check(map1[0].price, 20 * 1.1);
  });
});
