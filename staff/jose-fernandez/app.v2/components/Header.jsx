class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { view: null }
    }

    handleMenuClick = () => this.setState({ view: 'menu' })

    handleCloseClick = () => this.setState({ view: null })

    handleSettingsClick = () => {
        this.setState({ view: null })

        this.props.onSettingsClick()
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

        return <header className="header_home">
            <div className="cont__header">
                <div className="link_home" >
                    <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
                </div>
                <h1 className="messageTitle">Hello {name} !</h1>

                <div className="btn-menClo">
                    {view === null && <IconButtonHeader text="menu" onClick={handleMenuClick} />}
                    {view === "menu" && <IconButtonHeader text="close" onClick={handleCloseClick} />}
                </div>
            </div>
            {view === "menu" && <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={viewHome} />}
        </header>
    }
}