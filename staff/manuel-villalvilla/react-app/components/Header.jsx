class Header extends Component {
    constructor(props) {
        super(props)

        this.logger.info('constructor')

        this.state = { menuShow: false }
        
    }

    onMenuButtonClick = event => {
        event.target.classList.toggle('rotate')
        this.setState({ menuShow: true })
    }

    render() {
        this.logger.info('render')

        return <>
        <div className="menu-header">
            <div className="div-logout">
                <button className="logout-button" onClick={this.props.onLogoutButtonClick}>
                <span className="material-symbols-outlined">
                    logout
                </span>
                </button>
            </div>
            <div className="saludo">Hola {this.props.name}!</div>
            <div className="menu" onClick={this.onMenuButtonClick}>
                <div className="menu-icon" />
                <div className="menu-icon" />
                <div className="menu-icon" />
            </div>
        </div>
        <Menu show={this.state.menuShow}/>
        </>
        
    }
}