class MenuPanel extends Component{
    constructor() {
        super(`<div class="menu-panel">
            <ul class="menu-panel__list">
                <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button> Settings</li>
                <li><button class="settings-button transparent-button"><span class="material-symbols-outlined">favorite </span></button> Favorite </li>
                <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button> Logout</li>
            </ul>
        </div>`)
    
        this.menuPanelList = this.container.querySelector('.menu-panel__list')
        this.menuPanelListItemSettings = this.menuPanelList.querySelector('.menu-panel__list-item-settings')

        this.container.querySelector('.logout-button').onclick = () => {
            this.onLogout()
        }

        const settingsButton = this.container.querySelector('.settings-button')
        settingsButton.onclick = () => {
            this.onSettings()
        }
    }

    onLogout = null

    onSettings = null

    showSettings() {
        this.menuPanelList.prepend(this.menuPanelListItemSettings)
    }

    hideSettings() {
        this.menuPanelList.removeChild(this.menuPanelListItemSettings)
    }
}