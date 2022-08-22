function max() {
  let max = arguments[0]; 
  for (let i = 1 ; i < arguments.length;i++){
    const element = arguments[i]
    if (max < element){

      max = element
    }

  }

  return max
  

  }
  
/*for (var i = 0; i < arguments.length; i++) {
    if (max < arguments[i]) {
      max = arguments[i];
    }*/
  


// tests

console.log(max(4, 1));
// 4

console.log(max(123, 456));
// 456

console.log(max(1, 2, 3, 0, 4, 5));
// 5
