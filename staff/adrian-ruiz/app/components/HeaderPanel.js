class HeaderPanel extends Component{
    constructor(){
        super(`<header>
        <span class="homeIcon material-symbols-outlined">
            home
            </span>
        <h1 id="headerTitle">Hello, Pepito</h1>

            <div class="menuContainer">
                <div class="menuIcon"></div>
                <div class="menuIcon1"></div>
                <div class="menuIcon2"></div>
                <div class="dropdownMenu off">
                    <ul>
                        <li><a href="#" class="profileLink">Profile</a></li>
                        <li><a href="#" class="settingsLink">Settings</a></li>
                        <li><a href="#" class="logoutLink">Logout</a></li>
                    </ul>
                </div>
            </div>
    </header>`)

    const menuContainer = this.container.querySelector('.menuContainer')
    const dropdownMenu = this.container.querySelector('.dropdownMenu')
    this.dropdownMenu = dropdownMenu

    menuContainer.onclick = () => {
        this.onMenuClick()
    }

    const profileLink = this.container.querySelector('.profileLink')
    profileLink.onclick = () => {
        this.onProfileLinkClick()
    }

    const logoutLink = this.container.querySelector('.logoutLink')
    logoutLink.onclick = () => {
        this.onLogoutLinkClick()
    }
    const homeIcon = this.container.querySelector('.homeIcon')
    homeIcon.onclick = () => {
        this.onHomeIconClick()
    }
    }

    onMenuClick(){
        this.container.classList.toggle("change")
        this.dropdownMenu.classList.toggle("off")
        this.dropdownMenu.classList.toggle("displayBlock")
    }

    onProfileLinkClick = null

    onLogoutLinkClick = null

    onHomeIconClick = null
}