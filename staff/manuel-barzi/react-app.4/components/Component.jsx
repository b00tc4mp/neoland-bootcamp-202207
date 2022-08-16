class Component extends React.Component {
    constructor(props) {
        super(props)

        this.logger = new Loggito(this.constructor.name)

        this.logger.info('constructor')
    }

    setState(state) {
        this.logger.info('set state')

        this.logger.debug(`state: ${JSON.stringify(state)}`)

        super.setState(state)

        //this.logger.debug('after set state')
    }

    componentDidMount() {
        this.logger.info('component did mount')
    }
}