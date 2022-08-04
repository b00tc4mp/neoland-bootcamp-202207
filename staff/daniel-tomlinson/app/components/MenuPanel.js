class MenuPanel extends Component {
  constructor() {
    super(`<div class="menu-panel">

        <ul class="dropdown-menu menu-panel__list">
          <li class="menu-panel__list-item-settings dropdown-item settings-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Settings</button> </li>
            <li class="menu-panel__list-item-settings dropdown-item notes-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Notes</button> </li>
            <li class="menu-panel__list-item-settings dropdown-item logout-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Log out</button> </li>
        </ul>

</div>`);

    this.menuPanelList = this.container.querySelector(".menu-panel__list");
    this.menuPanelListItemSettings = this.menuPanelList.querySelector(
      ".menu-panel__list-item-settings"
    );

    this.menuPanelList.querySelector(".logout-button").onclick = () => {
      this.onLogout();
    };

    const settingsButton = this.menuPanelList.querySelector(".settings-button");
    settingsButton.onclick = () => {
      //   closeButton.click();
      this.onSettings();
      //   main.removeChild(menuPanel);
      //   menuPanelList.removeChild(menuPanelListItemSettings);
      /*       main.removeChild(listPanel);
      footer.removeChild(addButton);

      main.append(settingsPanel); */
    };

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

  onLogout = null;

  onSettings = null;

  showSettings() {
    this.menuPanelList.prepend(this.menuPanelListItemSettings);
  }

  hideSettings() {
    this.menuPanelList.removeChild(this.menuPanelListItemSettings);
  }
}
