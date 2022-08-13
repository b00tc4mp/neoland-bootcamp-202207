Cachay.prototype.concat = function (...args) {
    let result = new Cachay
    // for para this = cachay1 , por estar antes del metodo (cachay1.concat)
    for (let i = 0; i < this.length; i++)
        result[result.length++] = this[i]


    //for para los aprametros de concat(parametros), concat(cachay2,cachay3)
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < args[i].length; j++) {
            result[result.length] = args[i][j]
            result.length++
        }
    }
    return result
}

// const cachay1 = new Cachay('a', 'b', 'c')
// const cachay2 = new Cachay('d', 'e', 'f')
// const cachay3 = new Cachay('g', 'h', 'i')

// debugger
// const cachay4 = cachay1.concat(cachay2, cachay3)