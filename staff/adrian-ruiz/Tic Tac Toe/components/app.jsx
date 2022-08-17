class App extends React.Component {
    constructor() {
        super()

        this.state = { symbol: 'X', board: new Array(9).fill(null), winner: null }

        this.logger = new Loggito('App')

        this.logger.info('Constructor')
    }

    handleBoardBoxClick = event => {
        this.logger.debug('Handle cell click')

        const box = event.target
        const boxIndex = box.dataset.index

        const state = makeAMove(boxIndex, this.state)

        this.setState(state)
    }

    handlePlayAgainClick = () =>{
        this.logger.debug('Handle play again click')

        this.setState(startGame())
    } 

    componentDidMount() {
        this.logger.info('Component did mount')
    }

    componentDidUnmount() {
        this.logger.info('Component did unmount')
    }

    setState(state){
        this.logger.info('set state')

        super.setState(state)

        this.logger.info('after set state')
    }

    render() {
        this.logger.info('render')
        
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