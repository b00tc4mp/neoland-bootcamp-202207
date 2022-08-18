describe('array.prototype.map', function(){
  test('multiply all the numbers by 2', function())
    const array1 = [ 1,4,9,16];
    const map1 = map(array1, function(x){
      return x*2
    });
    check(array1.length,4)
    check(array1[0],1)
    check(array1[1],4)
    check(array1[2],9)
    check(array1[3],16)

    check(map1 instanceof Array, true)
    check(map1[0],2)
    check(map1[1],8)
    check(map1[2],18)
    check(map1[3],32)
  })

  test('increase prices 20%', function(){
    const product = [
      {name: 'milk',price: 20},
      {name: 'beer',price: 10},
      {name: 'water',price: 30},
      {name: 'sugar',price: 40 }
      ]
  
  const newprodctlist = map(array1 ,function(product){
    return {name: product.name, price: product.price*1.2}
  })

    check(productlist instanceof Array, true)
    check(productlist.length,4)
    check(productlist[0],3)
    check(productlist[1],2.5)
    check(productlist[2],1)
    check(productlist[3],1.5)

    check(productlist[0],3.6)
    check(productlist[1],3)
    check(productlist[2],1.2)
    check(productlist[3],1.8)
  })