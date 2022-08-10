function makeAMove(index, state) { // funcion RORO. Receive object return object
    let winner = state.winner

    if (winner)
        return

    let symbol = state.symbol

    // como no se puede crear un array nuevo (const board) igualandolo a otro array directamente, 
    // tengo q descomponer de alguna manera el otro array para guardarlo en el nuevo y para eso uso el metodo slice que devuelve un array nuevo
    const board = state.board.slice(0) 

    if (board[index])
        return
    
    board[index] = symbol

    if (
        checkLine(board, 0, 1, 2) || checkLine(board, 3, 4, 5) || checkLine(board, 6, 7, 8) 
        || checkLine(board, 0, 3, 6) || checkLine(board, 1, 4, 7) || checkLine(board, 2, 5, 8) 
        || checkLine(board, 0, 4, 8) || checkLine(board, 2, 4, 6)
        )
        winner = symbol
    else if (board.every(elem => elem !== null))
        winner = 'DRAW'

    if (symbol === 'X')
        symbol = 'O'
    else
        symbol = 'X'
    
    return {symbol, board, winner}
}

function checkLine (board, a, b, c) {
    return board[a] !== null && board[a] === board[b] && board[b] === board[c]
}