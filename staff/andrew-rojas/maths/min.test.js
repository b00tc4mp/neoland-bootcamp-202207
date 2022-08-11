function min(a, b) {
  // TODO ...
  let result = arguments[0]

  for (let i = 1; i < arguments.length; i++) {
      const element = arguments[i]

      if( element < result)
           result = element
  }

  return result
}

// demos

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5)) // todo learn about " js argument"
// 0