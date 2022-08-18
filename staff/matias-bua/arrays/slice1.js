function slice(array, start) {
  const sliced = [];

  if (end == undefined) end = array.length;

  for (let i = start; i < array.length; i++) {
    const element = array[i];
    sliced[sliced.length] = element;
  }
  return sliced;
}
