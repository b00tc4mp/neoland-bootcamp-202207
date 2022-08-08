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

        <!--nav class="menu-panel" id="menu-panel">
          <ul class="dropdown-menu">
            <li class="dropdown-item settings-button"><button class="dropdown__link"><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Profile</button> </li>
              <li class="dropdown-item notes-button"><button class="dropdown__link"><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Notes</button> </li>
              <li class="dropdown-item logout-button"><button class="dropdown__link"><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Log out</button>  </li>
          </ul>
      </nav-->

    </header>



    <main class="main flex-container main-page-content">
        <ul class="list">
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

        <!--div class="profile-page page background flex-container">
    
            <div class="resetPassword-elements flex-container">
              <form action="" class="form flex-container reset-password-form">
                <div class="input-fields">
      
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
      
                </div></div>
                <button type="submit" class="button--primary">Save</button>
              </form>
            </div-->

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
      '<button class="close-button transparent-button menu-button__styles"><span class="material-symbols-outlined">X</span></button>';
    const closeButton = temp2.firstChild;

    const main = this.container.querySelector(".main");

    const temp3 = document.createElement("temp");
    temp3.innerHTML = `<div class="menu-panel">

    
    <ul class="menu-panel__list">
        <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
        <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
    </ul>
</div>`;
    const menuPanel = temp3.firstChild;

    const menuPanelList = menuPanel.querySelector(".menu-panel__list");
    const menuPanelListItemSettings = menuPanelList.querySelector(
      ".menu-panel__list-item-settings"
    );

    menuPanel.querySelector(".logout-button").onclick = () => {
      this.onLogout;
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

    const temp4 = document.createElement("temp");
    temp4.innerHTML = `<div class="settings-panel">
    Settings

    <button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button>

    TODO implement me
</div>`;

    const settingsPanel = temp4.firstChild;

    const settingsButton =
      menuPanelListItemSettings.querySelector(".settings-button");
    settingsButton.onclick = () => {
      closeButton.click();

      menuPanelList.removeChild(menuPanelListItemSettings);
      main.removeChild(listPanel);
      footer.removeChild(addButton);

      main.append(settingsPanel);
    };

    settingsPanel.querySelector(".close-settings-button").onclick = () => {
      main.removeChild(settingsPanel);

      menuPanelList.prepend(menuPanelListItemSettings);
      main.append(listPanel);
      footer.append(addButton);
    };
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
    // I think there is an error here
  }
  //   catch(error) {
  //     alert(error.message);
  //   }

  onDeleteNoteClick = null;

  onUpdateNote = null;

  onLogout = null;

  onAddNote = null;
}
