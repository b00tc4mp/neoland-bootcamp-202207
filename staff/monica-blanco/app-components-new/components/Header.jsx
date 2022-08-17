class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { view: null }
    }

    handleMenuClick = () => this.setState({ view: 'menu' })

    handleCloseClick = () => this.setState({ view: null })

    handleSettingsClick = () => { 
        this.setState({view: null})

        this.props.onSettingsClick()

    }
    handleInfoClick = ()=>{
        this.setState ({view:null})

        // this.props.onInfoClick()
    }

    render() {

        this.logger.info('render')

        const {
            state: { view },
            props: { name, onLogoutClick, view: viewHome },
            handleMenuClick,
            handleCloseClick,
            handleSettingsClick
        } = this

        return (<header className="header container">
        <img className="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136"/>
    <div className= "header-top container container--row container--distributed">
        <h1 className="title"> Hello, {name}! </h1>
 
            { view === null && <IconButton text="menu" onClick={handleMenuClick} />}
            { view === 'menu' && <IconButton text="close" onClick={handleCloseClick} />}
    </div>

            { view === 'menu' && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick}  view={viewHome} />}
        </header>)
        
    }
}
