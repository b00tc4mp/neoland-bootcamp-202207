function add(a, b) { return a + b }
// undefined
add(1, 2)
// 3
add.call(null, 1, 2)
// 3