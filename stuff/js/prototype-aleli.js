var a = [1, 2, 3]
// (3) [1, 2, 3]
a.forEach(element => console.log(element))
// VM8656:1 1
// VM8656:1 2
// VM8656:1 3
// undefined
Array.prototype.forEach = function () { return 'itera! itera! capullit@ de alelí' }
// ƒ () { return 'itera! itera! capullit@ de alelí' }
a.forEach(element => console.log(element))
// 'itera! itera! capullit@ de alelí'