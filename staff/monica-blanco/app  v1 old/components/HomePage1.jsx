class HomePage extends Component {
    constructor() {
        super()

        this.state = { name: null }
    }

    componentDidMount = () => { // override
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ name: user.name })

            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    render() {
        this.logger.info('render')

        return (<div className="home-page page">
        <header className="header">
            <img className="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136"/>
            <h1 className="title"> Hello,{this.state.name}!!!! </h1>
            <button className="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
            <button className="close-button transparent-button"><span class="material-symbols-outlined">close</span></button>
        </header>          
       
            </div>)
    }
}