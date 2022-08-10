class App extends React.Component {
    constructor() {
        super()

        this.state = startGame()

        this.logger = new Loggito('App')

        this.logger.info('constructor')
    }

    handleCellClick = event => {
        this.logger.debug('handle cell click')

        const cell = event.target

        const index = cell.dataset.index

        const state = makeAMove(index, this.state)

        this.setState(state)
    }

    handlePlayAgainClick = () => {
        this.logger.debug('handle play again click')

        this.setState(startGame())
    }

    componentDidMount() {
        this.logger.info('component did mount')
    }

    componentDidUnmount() {
        this.logger.info('component did unmount')
    }

    setState(state) {
        this.logger.info('set state')

        super.setState(state)

        this.logger.info('after set state')
    }

    render() {
        this.logger.info('render')

        return <div className="container">
            <Board board={this.state.board} onCellClick={this.handleCellClick} />
            <Result result={this.state.result} onPlayAgainClick={this.handlePlayAgainClick} />
        </div>
    }
}