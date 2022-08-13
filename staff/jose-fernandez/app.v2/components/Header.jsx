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

        return <header className="header_home">
            <div className="cont__header">
                <div className="link_home">
                    <img className="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="" />
                </div>
                <h1 className="messageTitle">Hello {this.props.name} !</h1>

                <div className="btn-menClo">
                    {this.state.view === null && <IconButtonHeader text="menu" onClick={this.handleMenuClick} />}
                    {this.state.view === "menu" && <IconButtonHeader text="close" onClick={this.handleCloseClick} />}
                </div>
            </div>
            {this.state.view === "menu" && <Menu onLogoutClick={this.props.onLogoutClick} onSettingsClick={this.handleSettingsClick}/>}
        </header>
    }
}