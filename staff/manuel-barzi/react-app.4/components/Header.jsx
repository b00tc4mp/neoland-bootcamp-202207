class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { view: null }
    }

    handleMenuClick = () => this.setState({ view: 'menu' })

    handleCloseClick = () => this.setState({ view: null })

    render() {
        this.logger.info('render')
        
        return <header className="header container">
            <div className="header-top container container--row container--distributed">
                <h1 className="title">Hello, {this.props.name}!</h1>
                
                { this.state.view === null && <IconButton text="menu" onClick={this.handleMenuClick} />}
                { this.state.view === 'menu' && <IconButton text="close" onClick={this.handleCloseClick} />}
            </div>

            { this.state.view === 'menu' && <Menu onLogoutClick={this.props.onLogoutClick} />}
        </header>
    }
}