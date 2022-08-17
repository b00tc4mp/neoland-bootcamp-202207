class App extends React.Component {
    constructor() {
        super()

        this.state = startGame()
        // { player: "x", board: [null, null, null, null, null, null, null, null, null], result: null }
    } 


 handleCellClick = event => {
    event.preventDefault()

    const cell = event.target 

    const index = cell.dataset.index

    const state = makeAMove(index, this.state)

    this.setState(state)
 }


handlePlayAgainClick = event => {
    event.preventDefault()
    this.setState(startGame())
}

// render() {
//     return <main>

//  {this.state.result && <>
// <p>{this.state.result.length === 1 ? 'winner' : 'draw'}: {this.state.result}</p>

// <button onClick={this.onPlayAgainClick}>Play again</button>
// </>}
//     </main>

render() {
    return <div className="container">
        <Board board={this.state.board} onCellClick={this.handleCellClick} />
        <Result result={this.state.result} onPlayAgainClick={this.handlePlayAgainClick} />
    </div>
}

// }
}