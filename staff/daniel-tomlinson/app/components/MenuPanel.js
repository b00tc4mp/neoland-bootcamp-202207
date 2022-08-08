class MenuPanel extends Component {
  constructor() {
    super(`<div class="menu-panel">

        <ul class="dropdown-menu menu-panel__list">
          <li class="menu-panel__list-item-settings dropdown-item settings-button"></button> </li>
            <li class="menu-panel__list-item-notes dropdown-item notes-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Notes</button> </li>
            <li class="menu-panel__list-item-logout dropdown-item logout-button"></button> </li>
        </ul>

</div>`);

    const logoutButton = new IconButton(
      `<i class="fa-solid fa-poo nav-icon poo-list-style"></i>Log out`,
      "dropdown__link"
    );
    logoutButton.onClick = () => {
      this.onLogoutButtonClick();
    };

    const settingsButton = new IconButton(
      `<i class="fa-solid fa-poo nav-icon poo-list-style"></i>Settings`,
      "dropdown__link"
    );
    settingsButton.onClick = () => {
      this.onSettingsButtonClick();
    };

    this.menuPanelList = this.container.querySelector(".menu-panel__list");

    const menuPanelListItemSettings = this.menuPanelList.querySelector(
      ".menu-panel__list-item-settings"
    );
    this.menuPanelListItemSettings = menuPanelListItemSettings;
    menuPanelListItemSettings.append(settingsButton.container);

    const menuPanelListItemLogout = this.menuPanelList.querySelector(
      ".menu-panel__list-item-logout"
    );
    menuPanelListItemLogout.append(logoutButton.container);

    /* this.menuPanelList.querySelector(".notes-button").onclick = () => {
      // == ToDo
      this.onNotes();

      // == Old Code
      // closeButton.click();
      // main.removeChild(settingsPanel);

      // menuPanelList.prepend(menuPanelListItemSettings);
      // main.append(listPanel);
      // footer.append(addButton);
    }; */
  }

  onSettingsButtonClick = null;

  onLogoutButtonClick = null;

  onNotesButtonClick = null;

  showSettingsButton() {
    this.menuPanelList.prepend(this.menuPanelListItemSettings);
  }

  hideSettingsButton() {
    this.menuPanelList.removeChild(this.menuPanelListItemSettings);
  }
}
