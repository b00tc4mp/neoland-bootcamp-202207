function mod(value, div) {
    if (value > div) {
        resultado = value % div
    } else if (value < div) {
        resultado = 'dame un número con resto fácil'
    }
    return resultado
}
console.log(mod(10, 2))
// 0
console.log (mod(3, 2))
//1
console.log (mod(11,3))
//2

