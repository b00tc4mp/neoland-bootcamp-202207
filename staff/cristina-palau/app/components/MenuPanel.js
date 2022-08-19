class MenuPanel extends Component {
    constructor() {
        super(`<div class="menu-panel">
        <div class=close></div>
        <ul class="menu-list">
            <li class="menu-panel-settings"><button class=profile-button>Profile Settings</button>
            <li class="menu-panel-logout"><button class=logout-button>Logout</button></li>
        </ul>
        </div>`)

        this.menuPanelList = this.container.querySelector('.menu-list')
        this.menuPanelSettings = this.container.querySelector('.menu-panel-settings')
        this.menuPanelLogout = this.container.querySelector('.menu-panel-logout')

        this.container.querySelector('.close').onclick = () => {
            this.onClose()
        }

        const logoutButton = this.container.querySelector('.logout-button')
        logoutButton.onclick = () => {
            this.onLogout()
        }


        const settingsButton = this.container.querySelector('.profile-button')
        settingsButton.onclick = () => {
            
            this.onSettings()
        }

        
    }

    onClose = null

    onLogout = null

    onSettings = null

    showSettings() {
        this.menuPanelList.prepend(this.menuPanelSettings)
    }

    hideSettings() {
        this.menuPanelList.removeChild(this.menuPanelSettings)
    }
}