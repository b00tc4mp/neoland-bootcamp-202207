function concat() {
    let pep=''
    for(let i=0;i<arguments.length;i++){
        const argument= arguments[i] 
        // pep= pep+ argument  ==> resumido en la siguiente linea
        pep+= argument
    }
    return pep
}

// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding