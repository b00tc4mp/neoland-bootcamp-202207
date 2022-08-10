class App extends React.Component {
    constructor() {
        super()

        this.state = startGame()
    }

    handleCellClick = (event) => {
        let state = {}
        
        const index = event.target.dataset.index // esto es nuevo
        
        state = makeAMove(index, this.state)

        this.setState(state) // no tiene q terminar la funcion para q se actualice, pero se toma su tiempo

    }

    IaClick = index => {
        const state = makeAMove(index, this.state)
        
        this.setState(state)
    
    }

    getIAIndex() {
        let indexesOfNulls = []
        let board = this.state.board.slice(0)

        for (let i = 0; i < 9; i++) {
            if (board[i] === null)
                indexesOfNulls[indexesOfNulls.length] = i;
        }

        let randomIndex = indexesOfNulls[Math.floor(Math.random() * (indexesOfNulls.length - 1))]

        return randomIndex
    }

    setState(state) {
        // meter aqui un logger para espiar el setState

        super.setState(state)
    }

    handlePlayAgainClick = () => this.setState(startGame())

    render() {
        return <>
        <h1># TIC TAC TOE #</h1>
        <main>
            <Board board={this.state.board} onCellClick={(event) => {
                this.handleCellClick(event)
                if (!this.state.winner) // revisar esto
                    setTimeout(() => this.IaClick(this.getIAIndex()), 1000) // los timeouts se escriben con callbacks, no llamando a otra funcion
                }} />
            
            { this.state.winner && 
                <Result winner={this.state.winner} onPlayAgainClick={this.handlePlayAgainClick} />
            }
        </main>
        </>
    }
}