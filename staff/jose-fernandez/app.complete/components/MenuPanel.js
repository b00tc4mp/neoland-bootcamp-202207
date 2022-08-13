class MenuPanel extends Component {
    constructor() {
        super(`<nav class="menu-panel nav-home" id="nav-home">
        <ul class="menu-panel__list menu-home">
            <li class="menu-item item_settings"></li>
            <li class="menu-item item_design"></li>
            <li class="menu-item item_language"></li>
            <li class="menu-item item_logout"></li>
        </ul>
    </nav>`)

    //solo acepta click al icono y no al texto, poner class menu__link en iconButton y las clases items_ mover al li

        const settingsButton = new IconButtonMenuPanel('settings','Settings')
        settingsButton.onClick = () => this.onSettingsButtonClick()

        const designButton = new IconButtonMenuPanel('brush','Design')
        designButton.onClick = () => this.onSettingsButtonClick()

        const languageButton = new IconButtonMenuPanel('language','Language')
        languageButton.onClick = () => this.onSettingsButtonClick()

        const logoutButton = new IconButtonMenuPanel('logout','Logout')
        logoutButton.onClick = () => this.onLogoutButtonClick()

        this.menuPanelList = this.container.querySelector('.menu-panel__list')
        const menuPanelListSettings = this.menuPanelList.querySelector('.item_settings')
        this.menuPanelListSettings= menuPanelListSettings
        menuPanelListSettings.append(settingsButton.container)

        const menuPanelListDesign = this.menuPanelList.querySelector('.item_design')
        menuPanelListDesign.append(designButton.container)

        const menuPanelListLanguage = this.menuPanelList.querySelector('.item_language')
        menuPanelListLanguage.append(languageButton.container)

        const menuPanelListItemLogout = this.menuPanelList.querySelector('.item_logout')
        menuPanelListItemLogout.append(logoutButton.container)
    }

    onLogoutButtonClick=null

    onSettingsButtonClick = null

    showSettingsButton(){
        this.menuPanelList.prepend(this.menuPanelListSettings)
    }

    hideSettingsButton(){
        this.menuPanelList.removeChild(this.menuPanelListSettings)
    }
}