
function min() {
    // TODO ...
    let mini= arguments[0]
    for(i=0;i<arguments.length;i++){
      if(mini>arguments[i])
      {
        mini=arguments[i]
      }
      
    }
    return mini
}


// demos

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5))
// 0