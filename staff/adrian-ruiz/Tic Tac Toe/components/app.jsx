class App extends React.Component {
    constructor() {
        super()

        this.state = { symbol: 'X', board: new Array(9).fill(null), winner: null }
    }

    handleBoardBoxClick = event => {
        const box = event.target
        const boxIndex = box.dataset.index

        const state = makeAMove(boxIndex, this.state)

        this.setState(state)
    }

    handlePlayAgainClick = () => this.setState(startGame())

    render() {
        return (
            <>
                <h1>Amazing Tic Tac Toe<br/>Unique in the WORLD</h1>

                <>
                    <Board board={this.state.board} onBoardBoxClick={this.handleBoardBoxClick} />
                    <Result winner={this.state.winner} onPlayAgainClick={this.handlePlayAgainClick} />
                </>
            </>
        )
    }
}