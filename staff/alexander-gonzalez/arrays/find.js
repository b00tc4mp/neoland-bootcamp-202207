function fin(array, callback) {
  for (let i = 0; i < array.length; i++) {
    element = array[i];
    const number = callback(element);
    if (number) {
      return element;
    }
  }
}

/*function find(array, callback) {
for(let i = 0; i<array.length; i++){
   element = array[i]

   const number = callback(element)
   if(number) {
    return element
}
}


}*/

//console.log(find([5, 12, 8, 130, 44], checkNumber));
// expected output 12
