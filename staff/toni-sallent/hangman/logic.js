function updateWord(placeholder, result) {
  const match = result.includes(placeholder);

  if (match === true) {
    result.replace("_", placeholder);
  }

  return result;
}

console.log(updateWord("a", "hola"));
