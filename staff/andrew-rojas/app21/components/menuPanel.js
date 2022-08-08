class MenuPanel extends Component {
  constructor() {
      super(`<div class="menu-panel">
          <ul class="menu-panel__list">
              <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button> Settings</li>
              <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button> Logout</li>
          </ul>
      </div>`)

      this.menuPanelList = this.container.querySelector('.menu-panel__list')
      this.menuPanelListItemSettings = this.menuPanelList.querySelector('.menu-panel__list-item-settings')

      this.container.querySelector('.logout-button').onclick = () => {
          this.onLogoutButtonClick()
      }

      const settingsButton = this.container.querySelector('.settings-button')
      settingsButton.onclick = () => {
          this.onSettingsButtonClick()
      }
  }

  onLogoutButtonClick = null

  onSettingsButtonClick = null

  showSettingsButton() {
      this.menuPanelList.prepend(this.menuPanelListItemSettings)
  }

  hideSettingsButton() {
      this.menuPanelList.removeChild(this.menuPanelListItemSettings)
  }
}