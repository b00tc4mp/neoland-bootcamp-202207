class Header extends Component {
    constructor(props) {
        super(props)

        this.state = { menu: 'closed' }
    }

    handleMenuClick = () => {
        if (this.state.menu !== 'opened')
            this.setState({ menu: 'opened' })
        else if (this.setState !== 'closed')
            this.setState({ menu: 'closed' })
    }

    handleProfileClick = () => {
        this.handleMenuClick()
        this.props.onProfileClick()
    }

    handleHomeClick = () => {
        this.props.onHomeClick()
    }
    render() {
        return (<header>
            <span className="homeIcon material-symbols-outlined" onClick={this.handleHomeClick}>
                home
            </span>
            <h1 id="headerTitle">Hello, {this.props.name}</h1>

            <div className={this.state.menu === 'closed' && "menuContainer" || this.state.menu === 'opened' && 'menuContainer change'} onClick={this.handleMenuClick}>
                <div className="menuIcon"></div>
                <div className="menuIcon1"></div>
                <div className="menuIcon2"></div>

                {this.state.menu === 'opened' &&
                    <div className="dropdownMenu displayBlock">
                        <ul>
                            <li><a href="#" className="profileLink" onClick={this.handleProfileClick}>Profile</a></li>
                            <li><a href="#" className="settingsLink">Settings</a></li>
                            <li><a href="#" className="logoutLink" onClick={this.props.onLogout}>Logout</a></li>
                        </ul>
                    </div>
                }

            </div>
        </header>)
    }
}