function makeAMove(index, state) {

    let winner = state.winner
    let symbol = state.symbol
    const board = state.board.slice(0)
    if (winner !== null) {
        return
    }

    if (board[index] !== null) {
        return
    }

    board[index] = symbol

    // Comprobaciones de winner
    if (checkLine(board, 0, 1, 2)
        || checkLine(board, 3, 4, 5)
        || checkLine(board, 6, 7, 8)
        || checkLine(board, 0, 3, 6)
        || checkLine(board, 1, 4, 7)
        || checkLine(board, 2, 5, 8)
        || checkLine(board, 0, 4, 8)
        || checkLine(board, 6, 4, 2)
    )
        winner = symbol
    else if(checkDraw(board))
        winner = 'xo' 
    // FALTA COMPROBAR EMPATE

    /* if (symbol === 'X')
        symbol = 'O'
    else symbol = 'X' */
    symbol = symbol === 'X' ? 'O' : 'X'

    return {board, symbol, winner}
}