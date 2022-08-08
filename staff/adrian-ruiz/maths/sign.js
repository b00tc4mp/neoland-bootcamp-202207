function sign(value) {
    // TODO ...
    if(value < 0){
        return -1;
    }
    else if(value > 0){
        return 1;
    }
    return 0;
}

// tests

console.log(sign(3));
// 1

console.log(sign(-3));
// -1

console.log(sign(0));
// 0

console.log(sign('-3'));
// -1