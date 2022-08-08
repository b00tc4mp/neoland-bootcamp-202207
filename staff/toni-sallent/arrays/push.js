function push(array, ...elements) {
  for (let i = 0; i < elements.length; i++) array[array.length] = elements[i];

  return array.length;
}

//... els tres puntets aquests el que fa és que els diferents elements que posis que els vols pushear, tels junta tots en un array//
