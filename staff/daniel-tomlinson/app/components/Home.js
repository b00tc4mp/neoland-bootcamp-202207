class Home {
  constructor() {
    const temp = document.createElement("temp");

    temp.innerHTML = `<div class="home-page page background flex-container--homepage">

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

</div>`;

    this.container = temp.firstChild;

    const addButton = this.container.querySelector(".add-button");
    addButton.onclick = () => {
      this.onAddNote();
    };

    const header = this.container.querySelector(".header");
    const footer = this.container.querySelector(".footer");

    const navigationBar = header.querySelector(".navigation-bar");
    const menuButton = navigationBar.querySelector(".menu-button");

    const temp2 = document.createElement("temp");
    temp2.innerHTML =
      '<button class="close-button"><span class="material-symbols-outlined">X</span></button>';
    const closeButton = temp2.firstChild;

    const main = this.container.querySelector(".main");

    const temp3 = document.createElement("temp");
    temp3.innerHTML = `<div class="menu-panel">

          <ul class="dropdown-menu menu-panel__list">
            <li class="menu-panel__list-item-settings dropdown-item settings-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Settings</button> </li>
              <li class="menu-panel__list-item-settings dropdown-item notes-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Notes</button> </li>
              <li class="menu-panel__list-item-settings dropdown-item logout-button"><button class="dropdown__link "><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Log out</button> </li>
          </ul>

</div>`;
    const menuPanel = temp3.firstChild;

    const menuPanelList = menuPanel.querySelector(".menu-panel__list");
    const menuPanelListItemSettings = menuPanelList.querySelector(
      ".menu-panel__list-item-settings"
    );

    menuPanelList.querySelector(".logout-button").onclick = () => {
      this.onLogout();
    };

    menuButton.onclick = () => {
      navigationBar.removeChild(menuButton);
      navigationBar.append(closeButton);

      main.prepend(menuPanel);
    };

    closeButton.onclick = () => {
      navigationBar.removeChild(closeButton);
      navigationBar.append(menuButton);

      main.removeChild(menuPanel);
    };

    const listPanel = main.querySelector(".list-panel");

    const settingsButton = menuPanelList.querySelector(".settings-button");
    settingsButton.onclick = () => {
      closeButton.click();

      //   main.removeChild(menuPanel);
      //   menuPanelList.removeChild(menuPanelListItemSettings);
      main.removeChild(listPanel);
      footer.removeChild(addButton);

      main.append(settingsPanel);
    };

    menuPanelList.querySelector(".notes-button").onclick = () => {
      closeButton.click();

      main.removeChild(settingsPanel);

      menuPanelList.prepend(menuPanelListItemSettings);
      main.append(listPanel);
      footer.append(addButton);
    };

    const temp4 = document.createElement("temp");

    temp4.innerHTML = `<div class="settings-panel">
    <!-- settings-page page background flex-container -->
    <h1>Settings</h1>

    <!--button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button-->

<h2>Reset Password Form</h2>
    
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
             
</div>`;

    const settingsPanel = temp4.firstChild;
    this.settingsPanel = settingsPanel;
  }

  onResetPasswordFormSubmit(callback) {
    const resetPasswordForm = this.settingsPanel.querySelector(
      ".reset-password-form"
    );

    resetPasswordForm.onsubmit = (event) => {
      event.preventDefault();

      const oldPassword = resetPasswordForm.oldPassword.value;
      const newPassword = resetPasswordForm.newPassword.value;
      const retypeNewPassword = resetPasswordForm.retypeNewPassword.value;

      callback(oldPassword, newPassword, retypeNewPassword);
    };
  }

  resetPasswordReset() {
    this.settingsPanel.querySelector(".reset-password-form").reset();
  }

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
}
