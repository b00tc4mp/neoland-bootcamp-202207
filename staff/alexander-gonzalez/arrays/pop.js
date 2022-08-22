function pop(collection) {
  let lastPosition = collection.length - 1;
  let lastElement = collection[lastPosition];
  collection.splice(-1);
  return lastElement;
}

/*function pop(array) {
  //if (array-length > 0){}
  if (array.length) {
    const elementToRemove = array[array.length - 1];

    // array.length = array.length - 1
    // array.length -= 1
    array.length--;

    return elementToRemove;
  }
}*/
