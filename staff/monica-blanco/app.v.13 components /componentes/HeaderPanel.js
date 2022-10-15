class HeaderPanel extends Component {
    constructor() {
        super(`<header class="header container">
            <img class="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136">
        <div class= "header-top container container--row container--distributed">
            <h1 class="title"> Hello, Pepito!! </h1>
        </div>   
            </header>`)
        
        const headerTop = this.container.querySelector('.header-top')
        
        const menuButton = new IconButton('menu')
        headerTop.append(menuButton.container)
        
        const closeButton = new IconButton('close')
        this.closeButton = closeButton

        const menuPanel = new MenuPanel
        this.menuPanel = menuPanel

        menuButton.onClick = () => {
            headerTop.removeChild(menuButton.container)
            headerTop.append(closeButton.container)

            this.onMenuButtonClick()

            this.container.append(menuPanel.container)
        }

        closeButton.onClick = () => {
            if (headerTop.contains(closeButton.container))
                headerTop.removeChild(closeButton.container)

            headerTop.append(menuButton.container)
            menuPanel.showSettingsButton()

            if (this.container.contains(menuPanel.container))
                this.container.removeChild(menuPanel.container)
        }

        menuPanel.onSettingsButtonClick = () => {
            closeButton.click()

            this.onSettingsButtonClick()
        }
        menuPanel.onFavoriteButtonClick = ()=>{
            closeButton.click()

            this.onFavoriteButtonClick()
        }
        menuPanel.onLogoutButtonClick = () => {
            closeButton.click()

            this.onLogoutButtonClick()
        }
    }

    onMenuButtonClick = null

    hideMenuSettingsButton() {
        this.menuPanel.hideSettingsButton()
    }

    onSettingsButtonClick = null

    onFavoriteButtonClick = null 
    
    onLogoutButtonClick = null

    closeMenu() {
        this.closeButton.click()
    }
}

// <header class="header container">
        //     <img class="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136">
        //     <div class= "header-top container container--row container--distributed">
        //     <h1 class="title"> Hello, Pepito!! </h1>
        //     <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
        //     </div>   
        //         </header> 