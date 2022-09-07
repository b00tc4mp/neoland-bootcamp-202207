const id = setInterval(() => console.log('hola mundo'), 1000)

console.log(id)

//clearInterval(id)
// VM1776:3 6
// undefined
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
// VM1776:1 hola mundo
clearInterval(6)