class HeaderPanel extends Component {
    constructor() {
        super(`<header class="header_home">
        <div class="cont__header">
            <div class="link_home">
                <img class="img img-home " src="https://i.postimg.cc/ZY1nHGSz/logo-Luanna.png" alt="">
            </div>
            <h1 class="messageTitle">Hello Pepito!!</h1>

            <div class="btn-menClo btn-menu">
                
                
            </div>
        </div>
    </header>`)

        const headerTop = this.container.querySelector('.cont__header')
        this.btnMenClo= headerTop.querySelector('.btn-menClo')

        const menuButton = new IconButtonHeader('menu')
        this.btnMenClo.append(menuButton.container)

        const closeButton = new IconButtonHeader('close')
        this.closeButton = closeButton

        const menuPanel = new MenuPanel
        this.menuPanel = menuPanel

        menuButton.onClick = () => {
            this.btnMenClo.removeChild(menuButton.container)
            this.btnMenClo.append(closeButton.container)

            this.onMenuButtonClick()

            this.container.append(menuPanel.container)
        }

        closeButton.onClick=()=>{
            if(this.btnMenClo.contains(closeButton.container))
            this.btnMenClo.removeChild(closeButton.container)

            this.btnMenClo.append(menuButton.container)
            menuPanel.showSettingsButton()

            if(this.container.contains(menuPanel.container))
            this.container.removeChild(menuPanel.container)
        }

        menuPanel.onSettingsButtonClick=()=>{
            closeButton.click()

            this.onSettingsButtonClick()
        }

        menuPanel.onLogoutButtonClick=()=>{
            closeButton.click()

            this.onLogoutButtonClick()
        }
    }

    onMenuButtonClick = null

    hideMenuSettingsButton(){
        this.menuPanel.hideSettingsButton()
    }

    onSettingsButtonClick = null

    onLogoutButtonClick = null

    closeMenu(){
        this.closeButton.click()
    }
}