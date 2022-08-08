function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    const meetsCondition = callback(element);

    // only returns element if the condition is met

    if (meetsCondition) {
      return element;
    }
  }

  //Not necessary because any function that doesn't have a return will return undefined
  //   return undefined;
}
