class HeaderPanel extends Component {
  constructor() {
    super(`<header class=" header flex-container navigation-bar">
    <div class="navigation-bar">
      <p class="welcome">Hello!</p>
      <!--button type="menu" class="menu-button menu-button__styles menu-panel-button"><i class="fa-solid fa-poo nav-icon logout-button-style">
      </i></button-->
      <!--/span-->
      
    </div>
    <h1 class="title">Helado Oscuro</h1>

</header>`);

    const navigationBar = this.container.querySelector(".navigation-bar");

    const menuButton = new IconButton(
      `<i class="fa-solid fa-poo nav-icon logout-button-style">
    </i>`,
      "menu-button",
      "menu-button__styles",
      "menu-panel-button"
    );
    navigationBar.append(menuButton.container);

    const closeButton = new IconButton("X");
    this.closeButton = closeButton;
    // '<button class="close-button"><span class="material-symbols-outlined">X</span></button>'
    // );//

    const menuPanel = new MenuPanel();
    this.menuPanel = menuPanel;

    menuButton.onClick = () => {
      navigationBar.removeChild(menuButton.container);
      navigationBar.append(closeButton.container);

      this.onMenuButtonClick();

      this.container.append(menuPanel.container);

      // main.prepend(menuPanel.container);
    };

    closeButton.onClick = () => {
      if (navigationBar.contains(closeButton.container))
        navigationBar.removeChild(closeButton.container);

      navigationBar.append(menuButton.container);

      menuPanel.showSettingsButton();

      if (this.container.contains(menuPanel.container))
        this.container.removeChild(menuPanel.container);

      // if (main.contains(menuPanel.container))
      //   main.removeChild(menuPanel.container);
    };

    menuPanel.onSettingsButtonClick = () => {
      closeButton.click();

      // if (footer.contains(addButton)) footer.removeChild(addButton);

      // main.removeChild(listPanel);
      // main.append(settingsPanel.container);

      this.onSettingsButtonClick();
    };

    menuPanel.onLogoutButtonClick = () => {
      // if (!main.contains(listPanel)) {
      //   main.removeChild(settingsPanel.container);
      //   main.append(listPanel);
      // }

      closeButton.click();

      this.onLogoutButtonClick();
    };
  }

  onMenuButtonClick = null;

  hideSettingsButton() {
    this.menuPanel.hideSettingsButton();
  }

  onSettingsButtonClick = null;

  onLogoutButtonClick = null;

  closeMenu() {
    this.closeButton.click();
  }
}
