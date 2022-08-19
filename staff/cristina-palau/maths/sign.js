function sign(value) {
    if (value < 0)
        return -1
    else if (value > 0) {
        return 1
    }
    return 0
}
console.log(sign(3));
// 1

console.log(sign(-3));
// -1

console.log(sign(0));
// 0

console.log(sign(0.5))
// 1

console.log(sign('-3'));
// -1