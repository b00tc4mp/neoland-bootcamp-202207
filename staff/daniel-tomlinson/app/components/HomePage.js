class HomePage extends Component {
  constructor() {
    super(`<div class="home-page page background flex-container--homepage">

    <main class="main flex-container main-page-content">

    </main>

    <footer class="footer flex-container"><button class="transparent-button add-button">+</button></footer>

</div>`);

    const addButton = this.container.querySelector(".add-button");
    addButton.onclick = () => {
      this.onAddNote();
    };

    const headerPanel = new HeaderPanel();
    this.container.prepend(headerPanel.container);

    headerPanel.onMenuButtonClick = () => {
      if (main.contains(settingsPanel.container))
        headerPanel.hideSettingsButton();
    };

    const footer = this.container.querySelector(".footer");

    headerPanel.onSettingsButtonClick = () => {
      if (footer.contains(addButton)) footer.removeChild(addButton);

      main.removeChild(listPanel.container);
      main.append(settingsPanel.container);
    };

    const main = this.container.querySelector(".main");

    const settingsPanel = new SettingsPanel();
    this.settingsPanel = settingsPanel;

    const listPanel = new ListPanel();
    this.listPanel = listPanel;
    main.append(listPanel.container);

    listPanel.onDeleteNoteClick = (noteId) => this.onDeleteNote(noteId);
    listPanel.onUpdateNote = (noteId, text) => this.onUpdateNote(noteId, text);

    headerPanel.onLogoutButtonClick = () => {
      if (main.contains(settingsPanel.container)) settingsPanel.close();

      this.onLogoutButtonClick();
    };

    settingsPanel.onUpdatePassword = (
      oldPassword,
      newPassword,
      retypeNewPassword
    ) => {
      this.onUpdatePassword(oldPassword, newPassword, retypeNewPassword);
    };

    settingsPanel.onClose = () => {
      main.removeChild(settingsPanel.container);

      // closeButton.click();
      headerPanel.closeMenu();

      main.append(listPanel.container);
      footer.append(addButton);
    };
  }

  setName(name) {
    this.container.querySelector(".welcome").innerText = "Hello, " + name + "!";
  }

  onDeleteNoteClick = null;

  onUpdateNote = null;

  onLogoutButtonClick = null;

  onAddNote = null;

  onUpdatePassword = null;
}
