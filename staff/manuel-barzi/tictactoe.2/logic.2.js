function makeAMove(index, state) {
    let result = state.result

    if (result)
        return

    let player = state.player

    const board = state.board.slice(0)

    if (board[index])
        return
    else
        board[index] = player

    if (board[0] !== null && board[0] === board[1] && board[1] === board[2]
        || board[3] !== null && board[3] === board[4] && board[4] === board[5]
        || board[6] !== null && board[6] === board[7] && board[7] === board[8]
        || board[0] !== null && board[0] === board[3] && board[3] === board[6]
        || board[1] !== null && board[1] === board[4] && board[4] === board[7]
        || board[2] !== null && board[2] === board[5] && board[5] === board[8]
        || board[0] !== null && board[0] === board[4] && board[4] === board[8]
        || board[2] !== null && board[2] === board[4] && board[4] === board[6])
        result = player
    else if (board[0] !== null && board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null && board[6] !== null && board[7] !== null && board[8] !== null)
        result = 'xo'

    if (player === 'x')
        player = 'o'
    else
        player = 'x'

    return { player, board, result }
}