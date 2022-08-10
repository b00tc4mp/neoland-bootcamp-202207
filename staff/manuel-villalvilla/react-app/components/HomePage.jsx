class HomePage extends Component {
    constructor() {
        super()
    
        this.logger.info('constructor')

        this.state = { name: null}
    }

    componentDidMount() {
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token, (error, user) => { // cambio a funcion flecha para que funcione el this de dentro
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)
    
                    return
                }
    
                this.setState({ name: user.name })
    
                // renderList(() => {
                //     document.body.append(home.container)
                // })
    
                
            })
        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }
    }

    render() {
        this.logger.info('render')
        return <main className="home-page">
            <Header name={this.state.name}/>
        </main>
    }
}