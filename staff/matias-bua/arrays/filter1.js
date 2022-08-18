function filter(Array, callback) {
  const filtered = [];

  for (let i = 0; i < Array.length; i++) {
    const element = Array[i];
    const shortname = callback(element);
    if (shortname) filtered[filter.length] = element;
  }
  return filtered;
}
