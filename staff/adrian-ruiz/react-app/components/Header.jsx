class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(<header>
            <span className="homeIcon material-symbols-outlined">
                home
                </span>
            <h1 id="headerTitle">Hello, {this.props.name}</h1>
    
                <div className="menuContainer">
                    <div className="menuIcon"></div>
                    <div className="menuIcon1"></div>
                    <div className="menuIcon2"></div>
                    <div className="dropdownMenu off">
                        <ul>
                            <li><a href="#" className="profileLink">Profile</a></li>
                            <li><a href="#" className="settingsLink">Settings</a></li>
                            <li><a href="#" className="logoutLink">Logout</a></li>
                        </ul>
                    </div>
                </div>
        </header>)
    }
}