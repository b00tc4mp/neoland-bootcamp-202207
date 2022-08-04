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

    // removed
    /* const temp2 = document.createElement("temp");
    temp2.innerHTML =
      '<button class="close-button"><span class="material-symbols-outlined">X</span></button>'; */
    // ==
    const closeButton = templateToDOM(
      '<button class="close-button"><span class="material-symbols-outlined">X</span></button>'
    );

    const main = this.container.querySelector(".main");

    const menuPanel = new MenuPanel();

    this.settingsPanel = new SettingsPanel();
    // const settingsPanel = new SettingsPanel
    // this.settingsPanel = settingsPanel;

    /* const temp3 = document.createElement("temp");
    temp3.innerHTML = 
    `<div class="menu-panel">

          <ul class="dropdown-menu menu-panel__list">
            <li class="menu-panel__list-item-settings dropdown-item settings-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Settings</button> </li>
              <li class="menu-panel__list-item-settings dropdown-item notes-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Notes</button> </li>
              <li class="menu-panel__list-item-settings dropdown-item logout-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Log out</button> </li>
          </ul>

</div>` */
    // const menuPanel = temp3.firstChild;

    // here insert: const settingsPanel

    menuButton.onclick = () => {
      if (navigationBar.contains(menuButton))
        navigationBar.removeChild(menuButton);
      navigationBar.append(closeButton);

      // menuPanel.showSettings();
      debugger;
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

    const listPanel = main.querySelector(".list-panel");

    NavigableForm.on;

    // const temp4 = document.createElement("temp");

    /* temp4.innerHTML = `<div class="settings-panel">
    <!-- settings-page page background flex-container -->
    <h2>Settings</h2>

    <!--button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button-->

<h3>Reset Password Form</h3>
    
              <form action="" class="reset-password-form resetPassword-elements flex-container reset-password-form input-fields">
      
                  <div class="form__field">
                    <label for="oldPassword">old password</label>
                    <input type="password" placeholder="old password" name="oldPassword" id="oldPassword" class="input-item" />
                  </div>
      
                  <div class="form__field">
                    <label for="newPassword">new password</label>
                    <input type="password" placeholder="new password" name="newPassword" id="newPassword" class="input-item" />
                  </div>
      
                  <div class="form__field">
                    <label for="retypeNewPassword">retype new password</label>
                    <input type="password" placeholder="retype new password" name="retypeNewPassword" id="retypeNewPassword" class="input-item" />
                  </div>
            
                <button type="submit" class="button--primary">Save</button>
              </form>
             
</div>` */
  }

  // resetPasswordReset() {
  //   this.settingsPanel.querySelector(".reset-password-form").reset();
  // }

  setName(name) {
    this.container.querySelector(".welcome").innerText = "Hello, " + name + "!";
  }

  renderList(notes) {
    const list = this.container.querySelector(".list");
    list.innerHTML = "";

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

      list.append(item);
    });
  }

  onDeleteNoteClick = null;

  onUpdateNote = null;

  onLogout = null;

  onAddNote = null;

  onResetPasswordFormSubmit = null;
}
