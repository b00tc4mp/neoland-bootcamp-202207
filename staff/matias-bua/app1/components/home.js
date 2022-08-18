class Home {
  constructor() {
    const temp = document.createElement("temp");

    temp.innerHTML = `<div class="home-page container container--distributed">
          <header class="header">
              <nav id="menu">
                <ul>
                <li><a href="#">Menu</a>
                <ul>
                <li><a href="#">Settings</a></li>
                <li><a href="components/login.js">Logout</a></li>
                </ul>
              </nav>
              <h1 class="title">Hello, User!</h1>
          </header>

          <main class="main">
                <ul class="list-panel list">
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Hello</p>
                  </li>
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Lorem </p>
                  </li>
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Lorem </p>
                  </li>
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Lorem </p>
                  </li>
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Lorem</p>
                  </li>
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Lorem </p>
                  </li>
                  <li class="list__item"><button class="list__item-delete-button">x</button>
                      <p contenteditable="true" class="list__item-text">Lorem </p>
                  </li>
              </ul>

              <div class="settings-panel off">
                  Settings

                  TODO implement me
              </div>
          </main>

          <footer class="footer">
              <button class="add-button transparent-button">+</button>
          </footer>
      </div>`;

    this.container = temp.firstChild;
  }

  setName(name) {
    this.container.querySelector(".title").innerText = "Hello, " + name + "!";
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

      const text = document.createElement("p");
      text.contentEditable = true;
      text.classList.add("list__item-text");
      text.onkeyup = () => {
        if (window.updateNoteTimeoutId)
          clearTimeout(window.updateNoteTimeoutId);

        window.updateNoteTimeoutId = setTimeout(() => {
          this.onUpdateNote(note.id, text.innerText);
        }, 1000);
      };
      text.innerText = note.text;

      item.append(deleteButton, text);

      list.append(item);
    });
  }

  onDeleteNoteClick = null;

  onUpdateNote = null;
}
