class HeaderPanel extends Component {
    constructor() {
        super(`<div class="topcontainer homecontainer">
        <div class="header">
            <h1 class="greeting"></h1>
            <button class="burger">
                <div class="burgerline"></div>
                <div class="burgerline"></div>
                <div class="burgerline"></div>
            </button>
         </div>   
    </div>`)

        const headerTop = this.container.querySelector('.header')

        const menuButton = this.container.querySelector('.burger')
        this.menuButton = menuButton

        const menuPanel = new MenuPanel
        this.menuPanel = menuPanel

        menuButton.onclick = () => {
            headerTop.removeChild(menuButton)

            this.onMenuButtonClick()

            headerTop.append(menuPanel.container)
        }


        this.onClose = () => {
            if (headerTop.contains(menuPanel.container)) {
                headerTop.removeChild(menuPanel.container)
            }

            headerTop.append(menuButton)
        }

        this.onSettings = () => {
            menuPanel.onClose()

            menuPanel.onSettings()
        }

        this.onLogout = () => {
            menuPanel.onClose()

            menuPanel.onLogout()
        }

    }

    setName(name) {
        this.container.querySelector('.greeting').innerText = 'Hello, ' + name + '!'
    }


    hideMenuSettingsButton() {
        this.menuPanel.hideSettingsButton()
    }


    closeMenu() {
        this.closeButton.click()
    }

    onSettings = null

    onLogout = null

    onMenuButtonClick = null

    onClose = null

}