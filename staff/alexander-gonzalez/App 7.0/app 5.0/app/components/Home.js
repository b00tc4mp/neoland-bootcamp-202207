// Home es la presentacion, trabajara distinto al resto, dando formato a solo  y no uso de logica

class Home {
  constructor() {
    const temp = document.createElement("temp");

    temp.innerHTML = `<div class="home-page container container--full">
        <header class="header container">
          <nav id="menu">
            <ul>
              
              <li><a href="#">Menu</a>
                <ul>
                  <li><a href="#">Setting</a></li>
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Return Home</a></li>
                </ul>
              </li>
              </nav>
      
          <div class="header-top container container--row container--distributed">
          <h1 class="title">Hello, World!</h1>
          <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
          </div>
            </header>
        
    
        <main class="main">
           <ul class="list-panel list">
             <li class="'list__item"><button class="list__item-delete-button">x</button>
                <textarea contenteditable="true" class="list__item-text">Hello, Note!</textarea>
              <textarea contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident alias doloremque minus cum velit error eum perspiciatis, obcaecati sequi dolorem totam ipsum, ab illum aspernatur debitis facere deleniti accusantium praesentium!</textarea>
            </li>
            
             <li class="list__item"><button class="list__item-delete-button">x</button>
              <textarea contenteditable="true" class="list__item-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius iure odit illum consequatur, nam fugit optio. Ducimus dolores maxime voluptas fugiat inventore illum deserunt dolorem numquam, sapiente magni rem aliquid!</textarea>
            </li>
          </ul>
    
          
      </main>
    
    
      <footer class="footer">
        <button class="add-button transparent-button">+</button>
      </footer> 
    </div>`;

    this.container = temp.firstChild;

    const addButton = this.container.querySelector(".add-button");
    addButton.onclick = () => {
      this.onAddNote();
    };

    const header = this.container.querySelector(".header");
    const footer = this.container.querySelector(".footer");

    const menuButton = header.querySelector(".menu-button");

    const temp2 = document.createElement("temp");
    temp2.innerHTML ='<button class="close-button transparent-button"><span class="material-symbols-outlined">close</span></button>';
      
    const closeButton = temp2.firstChild;

    const main = this.container.querySelector(".main");

    const temp3 = document.createElement("temp");
    temp3.innerHTML = `<div class="menu-panel">
    <ul class="menu-panel__list">
    <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button> Settings</li>
    <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button> Logout</li>
</ul>
</div>`
    const menuPanel = temp3.firstChild; //---> luego trasladar paneles

    const menuPanelList = menuPanel.querySelector(".menu-panel__list");
    const menuPanelListItemSettings = menuPanelList.querySelector(".menu-panel__list-item-settings");

    menuPanel.querySelector(".logout-button").onclick = () => {
      if (!main.contains(listPanel)) {
          main.removeChild(settingsPanel);
          main.append(listPanel);
      }

      closeButton.click();

      this.onLogout();
    }

    //aqui es donde ejecutamos que el boton funcione y nos lleve a menu
const headerTop = header.querySelector('.header-top')

    menuButton.onclick = () => {
      headerTop.removeChild(menuButton);
      headerTop.append(closeButton);

      if (main.contains(settingsPanel))
        menuPanelList.removeChild(menuPanelListItemSettings);
      

     header.append(menuPanel);
    };
    // aqui es donde ejecutamos que el boton cierre el menu y su panel

    closeButton.onclick = () => {
      if (headerTop.contains(closeButton)) 
          headerTop.removeChild(closeButton);

      headerTop.append(menuButton);
      menuPanelList.prepend(menuPanelListItemSettings)

      if (header.contains(menuPanel)) 
      header.removeChild(menuPanel);
    };

    //lista de panel --------------------

    const listPanel = main.querySelector(".list-panel");

    const temp4 = document.createElement("temp");
    temp4.innerHTML = `<div class="settings-panel container">
      Settings

      <button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button>

      <form class="update-password-form form">
                    <div class="form__field">
                        <label for="oldPassword">Current password</label>
                        <input class="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword">
                    </div>

                    <div class="form__field">
                        <label for="newPassword">New password</label>
                        <input class="input" type="password" name="newPassword" placeholder="new password" id="newPassword">
                    </div>

                    <div class="form__field">
                        <label for="newPasswordRepeat">Repeat new password</label>
                        <input class="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat">
                    </div>

                    <button class="button" type="submit">Update</button>
                </form>
  </div>`;
    const settingsPanel = temp4.firstChild;

    const updatePasswordForm = settingsPanel.querySelector(".update-password-form");
    updatePasswordForm.onsubmit = (event) => {
      event.preventDefault();

      const oldPassword = updatePasswordForm.oldPassword.value;
      const newPassword = updatePasswordForm.newPassword.value;
      const newPasswordRepeat = updatePasswordForm.newPasswordRepeat.value;

      this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat);
    };

    const settingsButton = menuPanel.querySelector(".settings-button");
    settingsButton.onclick = () => {
      closeButton.click();

      if (footer.contains(addButton)) 
      footer.removeChild(addButton);

      main.removeChild(listPanel);
      main.append(settingsPanel);
    };

    settingsPanel.querySelector(".close-settings-button").onclick = () => {
      main.removeChild(settingsPanel);

      closeButton.click();

      main.append(listPanel);
      footer.append(addButton);
    };
  }

  setName(name) {
    this.container.querySelector(".title").innerText = "Hello, " + name + "!";
  }

  // refrescamos y pintamos nuevas notas y sacamos otras

  renderList(notes) {
    const list = this.container.querySelector(".list");
    list.innerHTML = "";

    notes.forEach(note => {
      const item = document.createElement("li");
      item.classList.add("list__item");

      const deleteButton = document.createElement("button");
      deleteButton.classList.add("list__item-delete-button");
      deleteButton.innerText = "x";
      deleteButton.onclick = () => {
        this.onDeleteNote(note.id);
      };

      const text = document.createElement("textarea");
      text.contentEditable = true;
      text.classList.add("list__item-text");
      text.onkeyup = () => {
        if (window.updateNoteTimeoutId)
          clearTimeout(window.updateNoteTimeoutId);

        window.updateNoteTimeoutId = setTimeout(() => {
          this.onUpdateNote(note.id, text.innerText);
        }, 500);
      };
      text.innerText = note.text;

      item.append(deleteButton, text);

      list.append(item);
    });
  }

  onDeleteNote = null;

  onUpdateNote = null;

  onLogout = null;

  onAddNote = null;

  onUpdatePassword = null;
}
