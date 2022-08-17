function startGame() {
    // creo un array de 9 elementos null porque sino los crea undefined
    return { symbol: 'X', board: new Array(9).fill(null), winner: null }
}