class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { view: null }

    }

    handleMenuClick = () => this.setState({ view: 'menu' })

    handleCloseClick = () => this.setState({ view: null })

    // handleLogoutClick = () => this.setState({ view: 'login' })

    handleSettingsClick = () => {
        this.setState({ view: null })

        this.props.onSettingsClick()
    }

    render() {
        this.logger.info('render')

        const { state: { view },
            props: { name, onLogoutClick, view: viewHome },
            handleCloseClick,
            handleMenuClick,
            handleSettingsClick
        } = this

        return <div className="header">
            <h1 className="greeting">Hey, {name}!</h1>
            {this.state.view === null &&
                <button className="burger" onClick={handleMenuClick}>
                    <div className="burgerline"></div>
                    <div className="burgerline"></div>
                    <div className="burgerline"></div>
                </button>}

            {view === 'menu' && <Menu onCloseClick={handleCloseClick} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
        </div >
    }
}