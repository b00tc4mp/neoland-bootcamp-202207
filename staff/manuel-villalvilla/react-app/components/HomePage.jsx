class HomePage extends Component {
    constructor(props) {
        super()
    
        this.logger.info('constructor')

        this.state = { name: null }
    }

    componentDidMount() {
        super.componentDidMount()

        // let myPromise = new Promise(function(myResolve, myReject) {
            try {
                retrieveUser(sessionStorage.token, (error, user) => { // cambio a funcion flecha para que funcione el this de dentro
                    if (error) {
                        alert(error.message)
                        this.logger.warn(error.message)
                        return
                        // myReject(error.message)
                    }

                    this.setState({ name: user.name }) // creo que el setState es asincrono porque solo cambia cuando retrieveUser (asincrona) termina. Por eso renderiza el header sin el nombre primero, porque el nombre tarda en llegar
        
                    // myResolve(user.name) 
        
                    // renderList(() => {
                    //     document.body.append(home.container)
                    // })
                })
            } catch (error) {
                alert(error.message)
                this.logger.error(error.message)
            }
        // })

        // myPromise.then(
        //     (name) => {this.setState({ name })},
        //     (error) => {
        //         alert(error.message)
        //         this.logger.warn(error.message)
        //     }
        // )
    }

    render() {
        this.logger.info('render')
        if (this.state.name) 
            return <main className="home-page">
                <Header name={this.state.name} onLogoutButtonClick={this.props.onLogoutButtonClick}/>
            </main>
        

    }
}