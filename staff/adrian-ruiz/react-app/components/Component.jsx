class Component extends React.Component{
    constructor(){
        super()

        this.logger = new Loggito(this.constructor.name)

        this.logger.info('Constructor')
    }

    setState(state){
        this.logger.info('Set state executed')

        this.logger.debug(`Updated state: ${JSON.stringify(state)}`)

        super.setState(state)

        //this.logger.debug('after set state')
    }

    componentDidMount(){
        this.logger.info('Component did mount')
    }
}