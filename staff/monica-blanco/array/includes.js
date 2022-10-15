function includes(array, element) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (array[i]=== element) {
            result = true
            break;
        }else {
            result = false
        }
    }
    return result
}

  
  console.log(includes([1, 2, 3, 4], 5))
// false
  console.log(includes([1, 2, 3, 4], 2))
// true