 

function checkLine(board, a, b, c) {
    return board[a] !== null && board[a] === board[b] && board[b] === board[c]
} 