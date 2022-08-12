class App extends React.Component {
    constructor() {
        super()

        this.state = startGame()
        // { player: "x", board: [null, null, null, null, null, null, null, null, null], result: null }
    } 


 handleCellClick = event => {
    event.preventDefault()

    let result = this.state.result

    if (result)
    return
    
    const cell = event.target 

    const index = cell.dataset.index

    const board = this.state.board.slice(0)

    let player = this.state.player

    if (board[index]) 
    return

    else board[index] = player


  /*   if (board[0] !== null && board[0] === board[1] && board[1] === board[2]
    || board[3] !== null && board[3] === board[4] && board[4] === board[5]
    || board[6] !== null && board[6] === board[7] && board[7] === board[8]
    || board[0] !== null && board[0] === board[3] && board[3] === board[6]
    || board[1] !== null && board[1] === board[4] && board[4] === board[7]
    || board[2] !== null && board[2] === board[5] && board[5] === board[8]
    || board[0] !== null && board[0] === board[4] && board[4] === board[8]
    || board[2] !== null && board[2] === board[4] && board[4] === board[6])
    result = player */

    if (checkLine(board, 0, 1, 2)
    || checkLine(board, 3, 4, 5)
    || checkLine(board, 6, 7, 8)
    || checkLine(board, 0, 3, 6)
    || checkLine(board, 1, 4, 7)
    || checkLine(board, 2, 5, 8)
    || checkLine(board, 0, 4, 8)
    || checkLine(board, 2, 4, 6)
    )
    result = player

    else if (board[0] !== null && board[1] !== null && board[2] !== null && board[3] !== null && board[4] !== null && board[5] !== null && board[6] !== null && board[7] !== null && board[8] !== null )
    result = "xo"

    if (player === "x")
    player = "o"
    else player = "x"

    this.setState({ player, board, result })
}

onPlayAgainClick = event => {
    this.setState(startGame())
}

render() {
    return <main>
<div className="board">
    <div className="boardTile tilezero" data-index="0" onClick={this.handleCellClick}>{this.state.board[0]}</div>
    <div className="boardTile tileone" data-index="1" onClick={this.handleCellClick}>{this.state.board[1]}</div>
    <div className="boardTile tiletwo" data-index="2" onClick={this.handleCellClick}>{this.state.board[2]}</div>
    <div className="boardTile tilethree" data-index="3" onClick={this.handleCellClick}>{this.state.board[3]}</div>
    <div className="boardTile tilefour" data-index="4" onClick={this.handleCellClick}>{this.state.board[4]}</div>
    <div className="boardTile tilefive" data-index="5" onClick={this.handleCellClick}>{this.state.board[5]}</div>
    <div className="boardTile tilesix" data-index="6" onClick={this.handleCellClick}>{this.state.board[6]}</div>
    <div className="boardTile tileseven" data-index="7" onClick={this.handleCellClick}>{this.state.board[7]}</div>
    <div className="boardTile tileeight" data-index="8" onClick={this.handleCellClick}>{this.state.board[8]}</div>
</div>
 {this.state.result && <>
<p>{this.state.result.length === 1 ? 'winner' : 'draw'}: {this.state.result}</p>

<button onClick={this.onPlayAgainClick}>Play again</button>
</>}
    </main>

}
}