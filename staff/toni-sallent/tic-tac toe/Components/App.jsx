class App extends React.Component{
    constructor(){
        super()
        this.state = { player: 'x', board: new Array(9).fill(null), winner: null }
    }

    handleCellClick = event => {
        
        const cell = event.target
        const index = cell.dataset.index
        const state = makeAMove(index, this.state)

        this.setState(state)

    }

    handlePlayAgainClick = () => {
    this.setState({ player: 'x', board: new Array(9).fill(null), winner: null })
    }

    render() {
        <div className="container">
        <Board board={this.state.board} handleCellClick={this.handleCellClick}>
        {this.state.winner && <>
        <p>Winner: {this.state.winner}</p>
        <button onClick={this.handlePlayAgainClick}>Play Again</button>
        </>}
        </div>
    }
            
}