class Home {
  constructor() {
    const temp = document.createElement("temp");

    temp.innerHTML = `<div class="home-page page background flex-container--homepage">

    <header class=" header flex-container">
        <div class="navigation-bar">
          <p class="welcome">Hello!</p>
          <button type="menu" class="menu-button menu-panel-button"><i class="fa-solid fa-poo nav-icon logout-button-style">
          </i></span>
          
        </div>
        <h1 class="title">Helado Oscuro</h1>

        <nav class="menu-panel off" id="menu-panel">
          <ul class="dropdown-menu">
            <li class="dropdown-item profile-button"><button class="dropdown__link"><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Profile</button> </li>
              <li class="dropdown-item notes-button"><button class="dropdown__link"><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Notes</button> </li>
              <li class="dropdown-item logout-button"><button class="dropdown__link"><i class="fa-solid fa-poo nav-icon poo-list-style"></i>Log out</button>  </li>
          </ul>
      </nav>

    </header>



    <main class="flex-container main-page-content">
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

        <div class="profile-page page off background flex-container">
    
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
            </div>

    </main>


    <footer class="footer flex-container"><button class="transparent-button">+</button></footer>

</div>`;

    this.container = temp.firstChild;
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
      text.onkeyup = function () {
        text.style.height = "1px";
        text.style.height = text.scrollHeight + "px";

        if (item.height > 250)
          item.style.padding = text.scrollHeight - text.height + "px";

        if (window.updateNoteTimeoutId)
          clearTimeout(window.updateNoteTimeoutId);

        window.updateNotetimeoutId = setTimeout(() => {
          try {
            updateNote(sessionStorage.token, note.id, text.value, (error) => {
              if (error) {
                alert(error.message);

                return;
              }
            });
          } catch (error) {
            alert(error.message);
          }
        }, 1000);
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
}
