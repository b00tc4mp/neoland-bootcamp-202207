function join(array, separator=',') {
  var result = ''  
  for (let i = 0; i < array.length ; i++) {
  const element = array[i]
  result = result + element 
  if (i < array.length - 1 )
   result = result + separator 
  }
  return result 
}

