function max() {
    // TODO...
    let maxi= arguments[0]
    for(let i=1;i<arguments.length;i++){
      if(maxi<arguments[i])
      {
        maxi=arguments[i]
      }
      
    }
    return maxi
}



// demos

console.log(max(4, 1))
// 4

console.log(max(655, 456))
// 655

console.log(max(1, 2, 3, 0, 4, 5))
// 5

console.log(max(-1, -2, -3, -4, -5))
// -1