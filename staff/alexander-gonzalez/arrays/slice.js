function slice(array, start, end) {
  let sliced = []; // a partir de los IF que hemos puesto, fue para definir el resto de los ejercicios.
  if (start === undefined)
  start = 0;
  if (start < 0) start = array.length + start;
  if (end === undefined) end = array.length;
  else if (end < 0) end = array.length + end;

  if (start >= end) return sliced;
  for (let i = start; i < end; i++) {
    const element = array[i];

    sliced[sliced.length] = element;
  }

  return sliced;
}
