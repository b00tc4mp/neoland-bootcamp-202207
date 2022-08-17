class HomePage extends Component {
    constructor() {
        super()


        this.state = { user: null }

    }

    reder() {
        this.logger.info('render')

        return <h1>Hello, Home!</h1>
    }
}