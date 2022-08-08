class HeaderPanel extends Component {
  constructor() {
    super(`<header class="header container">
      <div class="header-top container container--row container--distributed">
        <h1 class="title">Hello, User!</h1>
        <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
      </div>
    </header>`)

    const menuButton = this.container.querySelector('.menu-button')
    const closeButton = templateToDOM('<button class="close-button transparent-button"><span class="material-symbols-outlined">close</span></button>')
    this.closeButton = closeButton

    const menuPanel = new MenuPanel
    this.menuPanel = menuPanel

    const headerTop = this.container.querySelector('.header-top')

    menuButton.onclick = () => {
      headerTop.removeChild(menuButton)
      headerTop.append(closeButton)

      this.onMenuButtonClick()

      this.container.append(menuPanel.container)
    }

    closeButton.onclick = () => {
      if (headerTop.contains(closeButton))
          headerTop.removeChild(closeButton)

      headerTop.append(menuButton)
      menuPanel.showSettingsButton()

      if (this.container.contains(menuPanel.container))
          this.container.removeChild(menuPanel.container)
    }

    menuPanel.onSettingsButtonClick = () => {
      closeButton.click()

      this.onSettingsButtonClick()
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

  onLogoutButtonClick = null
  
  closeMenu() {
    this.closeButton.click()
  }
}