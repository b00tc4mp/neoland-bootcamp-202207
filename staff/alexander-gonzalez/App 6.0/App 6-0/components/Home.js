// Home es la presentacion, trabajara distinto al resto, dando formato a solo  y no uso de logica

class Home { 
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML =  `<div class="home-page container container--distributed">
        <header class="header">
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
          
          <h1 class="title">Hello, World!</h1>
          <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
    
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

    const main = this.container.querySelector('main')

    const temp3 = document.createElement('temp')
    temp3.innerHTML = `<div class="menu-panel">
    <ul class="menu-panel__list">
    <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
    <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
</ul>
</div>`
const menuPanel = temp3.firstChild //---> luego trasladar paneles

const menuPanelList = menuPanel.querySelector('.menu-panel__list')
const menuPanelListItemSettings = menuPanelList.querySelector('.menu-panel__list-item-settings')

menuPanel.querySelector('.logout-button').onclick = () => {
  this.onLogout()
}

//aqui es donde ejecutamos que el boton funcione y nos lleve a menu

menuButton.onclick = () => {
  header.removeChild(menuButton)
  header.append(closeButton)

  main.prepend(menuPanel)
}
// aqui es donde ejecutamos que el boton cierre el menu y su panel

closeButton.onclick = () => {
  header.removeChild(closeButton)
  header.append(menuButton)

  main.removeChild(menuPanel)
}

//lista de panel --------------------

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

  //aqui, es donde el menu deja de aparecer, removiendo su lista

  menuPanelList.removeChild(menuPanelListItemSettings)
  main.removeChild(listPanel)
  footer.removeChild(addButton)

  main.append(settingsPanel)
}

settingsPanel.querySelector('.close-settings-button').onclick = () => {
  main.removeChild(settingsPanel)

  menuPanelList.prepend(menuPanelListItemSettings)
  main.append(listPanel)
  footer.append(addButton)
}

    }

    setName(name) {
        this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
        }

        // refrescamos y pintamos nuevas notas y sacamos otras

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

        const text = document.createElement('textarea')
        text.contentEditable = true
        text.classList.add('list__item-text')
        text.onkeyup = () => {
            if(window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId)

            window.updateNoteTimeoutId = setTimeout (() =>{
                this.onUpdateNote(note.id, text.innertext)
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