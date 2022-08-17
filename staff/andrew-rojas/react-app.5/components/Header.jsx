class Header extends Component {
  constructor(props) {
    super(props)

    this.state = { view: null}
  }

  handleMenuClick = () => this.setState({ view: 'menu'})

  handleCloseClick = () => this.setState({ view: null})

  handleSettingsClick = () => {
    this.setState({ view: null})

    this.props.onSettingsClick()
  }

  render() {
    this.logger.info('render')

    const {
      state: {view},
      props: { name, onLogoutClick, view: viewHome },
      handleMenuClick,
      handleCloseClick,
      handleSettingsClick
    } = this
    
    return <header className="header container">
      <div className="header-top container container--row container--distributed">
        <h1 className="title">Hello, {name}!</h1> 
               
        {view === null && <IconButton text="menu" onClick={handleMenuClick} />}
        {view === 'menu' && <IconButton text="close" onClick={handleCloseClick} />}
      </div>

      {view === 'menu' && <Menu onLogoutClick={onLogoutClick}onSettingsClick={handleSettingsClick} view = {viewHome} />}
    </header>     
  }
}