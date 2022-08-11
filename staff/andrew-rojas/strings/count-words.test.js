describe ('countWords', function(){
  test('adios mundo cruel', function(){
    check(countWords ('adios mundo cruel'), '3')
  })

  test('hello world', function(){
    check(countWords('hello world'), '2')
  })

  test('1 2 3 4 5', function(){
    check(countWords('1 2 3 4 5'), '5')
  })

})



// tests

console.log(countWords("adiós mundo cruel"));
// 3

console.log(countWords("hello world "));
// 2

console.log(countWords("1 2 3 4 5"));
// 5


// {
//   var result = text.split(" ");

//   return result.filter((word) => word !== " ").length;
// }