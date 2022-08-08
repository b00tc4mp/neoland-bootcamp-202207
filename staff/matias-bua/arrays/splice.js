function splice(array, start, removeCount, element) {
  //  0.   ['Jan', 'March', 'April', 'June']
  //  1.
  //  2.
  //  3.
  //  4.

  for (let i = array.length - 1; i >= start; i--) {
    const elem = array[i];

    array[i + 1] = elem;
  }
  array[start] = element;
  return [];
}
