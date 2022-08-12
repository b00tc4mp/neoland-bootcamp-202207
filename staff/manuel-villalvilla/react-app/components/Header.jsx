class Header extends Component {
    constructor(props) {
        super()

        this.logger.info('constructor')

        this.state = { menuShow: false }
        
    }

    onMenuButtonClick = () => {
        if (this.state.menuShow)
            this.setState({ menuShow: false })
        else
            this.setState({ menuShow: true })
    }

    onSettingsButtonClick = () => {
        this.onMenuButtonClick()
        this.props.onSettingsButtonClick()
    }

    onNotesButtonClick = () => {
        this.onMenuButtonClick()
        this.props.onNotesButtonClick()
    }

    render() {
        const { 
            props: { 
                name, 
                onLogoutButtonClick 
            }, 
            onMenuButtonClick, 
            onSettingsButtonClick, 
            onNotesButtonClick,
            state: { menuShow },
            logger
        } = this

        logger.info('render')

        return <>
        <div className="menu-header">
            <div className="div-logout">
                <button className="logout-button" onClick={onLogoutButtonClick}>
                <span className="material-symbols-outlined">
                    logout
                </span>
                </button>
            </div>
            <div className="saludo">Hola {name}!</div>
            <div className={menuShow ? "menu rotate" : "menu"} onClick={onMenuButtonClick}>
                <div className="menu-icon" />
                <div className="menu-icon" />
                <div className="menu-icon" />
            </div>
        </div>
        
        <Menu show={menuShow} onSettingsButtonClick={onSettingsButtonClick} onNotesButtonClick={onNotesButtonClick}/>
        </>
        
    }
}