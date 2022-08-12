
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { view: null }
    }

    handleMenuClick = () => this.setState({ view: 'menu'})

    handlecloseClick = () => this.setState({ view: null})

    render() {
        this.logger.info('render')

        return <header className=" header flex-container navigation-bar">
        <div className="navigation-bar">
          <p className="welcome">Hello, {this.props.name}!</p>
          { this.state.view === null && <button type="menu" className="menu-button menu-button__styles menu-panel-button" onClick={this.handleMenuClick}><i className="fa-solid fa-poo nav-icon logout-button-style">
          </i></button>}
          { this.state.view === 'menu' && <button type="menu" className="menu-button menu-button__styles menu-panel-button" onClick={this.handleCloseClick}><i className="fa-solid fa-poo nav-icon logout-button-style">
          </i></button>}
        </div>

        { this.state.view = 'menu' && <Menu onLogoutClick={this.props.onLogoutClick} onSettingsClick={this.props.onSettingsClick} onNotesClick={this.props.onNotesClick}/>}

        <h1 className="title">Helado Oscuro</h1>

    
    </header>

    }
}
