class Home {
  constructor() {
    const temp = document.createElement('temp')

    temp.innerHTML = `<div class="home-page container container--distributed "> 
      <header class="header">
        <h1 class="title"> Hello, Drew</h1>
        <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
      </header>
     
      <main class="main"> 
        <ul class="list-panel list">
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Hello, Note! 
            Lorem ipsum dolor sit ametconsectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores 
            similique ipsamdeserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro 
            delectusistinctio?</p>
          </li>
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
          </li>
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
           elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
           blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
          </li>
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
          </li>
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
          </li>
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
          </li>
          <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
            deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
            distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora
            esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
            nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
            blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam
            deserunt eius soluta adipisci blanditiis nobis fugiat aut nesciunt rerum porro delectus
            istinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab sunt tempora
            esse eaque, maiores similique ipsam deserunt eius soluta adipisci blanditiis nobis fugiat aut
            nesciunt rerum porro delectus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Dolores ab sunt tempora esse eaque, maiores similique ipsam deserunt eius soluta adipisci
           blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
          </li>
        </ul>
      </main>

      <footer class="footer">
        <button class="add-button transparent-button">+</button>
      </footer>
    </div>`


    this.container = temp.firstChild

    const addButton = this.container.querySelector('.add-button')
    addButton.onclick = () => {
      this.onAddNote()
    }

    const header = this.container.querySelector('.header')
    const footer = this.container.querySelector('.footer')

    const menuButton = header.querySelector('.menu-button')

    const temp2 = document.createElement('temp')
    temp2.innerHTML = '<button class="close-button transparent-button"><span class="material-symbols-outlined">close</span></button>'
    const closeButton = temp2.firstChild

    const main = this.container.querySelector('.main')

    const temp3 = document.createElement('temp')
    temp3.innerHTML = `<div class="menu-panel">
        <ul class="menu-panel__list">
          <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
          <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
        </ul>
      </div>`
    const menuPanel = temp3.firstChild

    const menuPanelList = menuPanel.querySelector('.menu-panel__list')
    const menuPanelListItemSettings = menuPanelList.querySelector('.menu-panel__list-item-settings')

    menuPanel.querySelector('.logout-button').onclick = () => {
      if (!main.contains(listPanel)) {
        main.removeChild(settingsPanel)
        main.append(listPanel)
      }

      closeButton.Click()

      this.onLogout()
    }

    menuButton.onclick = () => {
      header.removeChild(menuButton)
      header.append(closeButton)

      if (main.contains(settingsPanel))
         menuPanelList.removeChild(menuPanelListItemSettings)
      else
        menuPanelList.prepend(menuPanelListItemSettings)

      main.prepend(menuPanel)
    }

    closeButton.onclick = () => {
      if (header.contains(closeButton))
          header.removeChild(closeButton)

      main.append(menuButton)

      if (main.contains(menuPanel))
          main.removeChild(menuPanel)
    }

    const listPanel = main.querySelector('.list-panel')

    const temp4 = document.createElement('temp')
    temp4.innerHTML = `<div class="settings-panel">
        Settings

        <button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button>

        TODO implement me
      </div>`
    const settingsPanel = temp4.firstChild
        
    const settingsButton = menuPanel.querySelector('.settings-button')
    settingsButton.onclick = () => {
      closeButton.click()
            
      if(footer.contains(addButton))
        footer.removeChils(addButton)

      main.removeChild(listPanel)
      main.append(settingsPanel)
    }

    settingsPanel.querySelector('.close-settings-button').onclick = () => {
      main.removeChild(settingsPanel)

      closeButton.click()

      main.append(listPanel)
      footer.append(addButton)
    }
  }

  setName(name) {
    this.container.querySelector('.title').innerText = 'Hello, ' + name + ' '
  }

  renderList(notes) {
    const list = this.container.querySelector('.list')
    list.innerHTML = ''

    notes.forEach(note => {
      const item = document.createElement('li')
      item.classList.add('list__item')

      const deleteButton = document.createElement('button')
      deleteButton.classList.add('list__item-delete-button')
      deleteButton.innerText = 'x'
      deleteButton.onclick = () => {
        this.onDeleteNoteClick(note.id)
      }

      const text = document.createElement('p')
      text.contentEditable = true
      text.classList.add('list__item-text')
      text.onkeyup = () => {
        if (window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId)

        window.updateNoteTimeoutId = setTimeout(() => {
          this.onUpdateNote(note.id, text.innerText)
        }, 500)
      }
      text.innerText = note.text

      item.append(deleteButton, text)

      list.append(item)
    })
  }

  onDeleteNoteClick = null

  onUpdateNote = null

  onLogout = null

  onAddNote = null
}