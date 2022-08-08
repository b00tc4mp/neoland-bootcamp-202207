class Home extends Component {
  constructor() {
    super(`<div class="home-page page background flex-container--homepage">

    <header class=" header flex-container navigation-bar">
        <div class="navigation-bar">
          <p class="welcome">Hello!</p>
          <button type="menu" class="menu-button menu-button__styles menu-panel-button"><i class="fa-solid fa-poo nav-icon logout-button-style">
          </i></span>
          
        </div>
        <h1 class="title">Helado Oscuro</h1>

    </header>



    <main class="main flex-container main-page-content">
        <ul class="list list-panel">
          <li class="list__item">
            <textarea class="list__item-text">
          </textarea>
        </li>
        <li class="list__item">
          <textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
        </textarea>
      </li>
      <li class="list__item">
        <textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
      </textarea>
    </li>
    <li class="list__item">
      <textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
    </textarea>
  </li>
  <li class="list__item">
    <textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
  </textarea>
</li>
<li class="list__item">
  <textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
</textarea>
</li>
<li class="list__item">
<textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
</textarea>
</li>
<li class="list__item">
<textarea class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias repellendus aliquid facere. Ullam dolore, nostrum possimus asperiores dignissimos, voluptatem ducimus sapiente aliquid facilis consequuntur sunt adipisci, nemo odit!
</textarea>
</li>
        </ul>

    </main>


    <footer class="footer flex-container"><button class="transparent-button add-button">+</button></footer>

</div>`);

    const addButton = this.container.querySelector(".add-button");
    addButton.onclick = () => {
      this.onAddNote();
    };

    const header = this.container.querySelector(".header");
    const footer = this.container.querySelector(".footer");

    const navigationBar = header.querySelector(".navigation-bar");
    const menuButton = navigationBar.querySelector(".menu-button");

    const closeButton = templateToDOM(
      '<button class="close-button"><span class="material-symbols-outlined">X</span></button>'
    );

    const main = this.container.querySelector(".main");

    const menuPanel = new MenuPanel();

    const settingsPanel = new SettingsPanel();
    this.settingsPanel = settingsPanel;

    const listPanel = main.querySelector(".list-panel");

    menuPanel.onLogout = () => {
      if (!main.contains(listPanel)) {
        main.removeChild(settingsPanel.container);
        main.append(listPanel);
      }

      closeButton.click();

      this.onLogout();
    };

    menuButton.onclick = () => {
      if (navigationBar.contains(menuButton))
        navigationBar.removeChild(menuButton);
      navigationBar.append(closeButton);

      menuPanel.showSettings();

      main.prepend(menuPanel.container);
    };

    closeButton.onclick = () => {
      if (navigationBar.contains(closeButton))
        navigationBar.removeChild(closeButton);

      navigationBar.append(menuButton);

      // main.removeChild(menuPanel);
      menuPanel.hideSettings();

      //changed from header
      if (main.contains(menuPanel.container))
        main.removeChild(menuPanel.container);
    };

    menuPanel.onSettings = () => {
      closeButton.click();

      if (footer.contains(addButton)) footer.removeChild(addButton);

      main.removeChild(listPanel);
      main.append(settingsPanel.container);
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

      closeButton.click();

      main.append(listPanel);
      footer.append(addButton);
    };
  }

  setName(name) {
    this.container.querySelector(".welcome").innerText = "Hello, " + name + "!";
  }

  renderList(notes) {
    const listPanel = this.container.querySelector(".list");
    listPanel.innerHTML = "";

    notes.forEach((note) => {
      const item = document.createElement("li");
      item.classList.add("list__item");

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("list__item-delete-button");
      deleteButton.innerText = "x";
      deleteButton.onclick = () => {
        this.onDeleteNoteClick(note.id);
      };

      const text = document.createElement("textarea");
      text.classList.add("list__item-text");
      text.onkeyup = () => {
        /* text.style.height = "1px";
        text.style.height = text.scrollHeight + "px";

        if (item.height > 250)
          item.style.padding = text.scrollHeight - text.height + "px"; */

        if (window.updateNoteTimeoutId)
          clearTimeout(window.updateNoteTimeoutId);

        window.updateNoteTimeoutId = setTimeout(() => {
          this.onUpdateNote(note.id, text.value);
        }, 500);
      };
      text.value = note.text;

      item.append(deleteButton, text);

      listPanel.append(item);
    });
  }

  onDeleteNoteClick = null;

  onUpdateNote = null;

  onLogout = null;

  onAddNote = null;

  onResetPasswordFormSubmit = null;
}
