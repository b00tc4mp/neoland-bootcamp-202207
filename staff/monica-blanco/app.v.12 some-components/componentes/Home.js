class Home extends Component {
    constructor() {
        super(`<div class="home-page container container--full">
        <header class="header container">
            <img class="imgHome" src="https://media4.giphy.com/media/lnyLJ57x8jJ13ZDhTZ/giphy.gif?cid=a267dfa35mpqsy8edagjq1n6d14c20r903cyt2gneqzbgona&rid=giphy.gif&60490a1f0d4f710d77dfff46&1653264000136">
            <div class= "header-top container container--row container--distributed">
            <h1 class="title"> Hello, Pepito!! </h1>
            <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
            </div>   
                </header> 

        <main class="main">
            <ul class="list-panel list">
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem electus distinctio?</p>     
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Hello, Note!</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem imilique ipsam deserunt eius soluta adipisci
                        blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem  delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem rerum porro delectus distinctio?</p>
                </li>
                <li class="list__item"><button class="list__item-delete-button">x</button>
                    <p contenteditable="true" class="list__item-text">Lorem ipsuectustio?</p>
                </li>
            </ul>           
        </main>          
            <footer class="footer">
                <button class="add-button transparent-button"> + </button>
            </footer>
        </div>`)

        const addButton = this.container.querySelector('.add-button')
            addButton.onclick = () => {
                this.onAddNote()
            }
            const header = this.container.querySelector('.header')
            const footer = this.container.querySelector('.footer')

            const menuButton = header.querySelector('.menu-button')

            const closeButton = templateToDOM('<button class="close-button transparent-button"><span class="material-symbols-outlined">close</span></button>')

            const main = this.container.querySelector('.main')

            const menuPanel = new MenuPanel

            const settingsPanel = new SettingsPanel

        menuPanel.onLogout = () => {
            if (!main.contains(listPanel)) {
                main.removeChild(settingsPanel.container)
                main.append(listPanel)
            }

            closeButton.click()
            
            this.onLogout()
        }
        
        const headerTop = header.querySelector('.header-top')
        
        menuButton.onclick = () => {
            headerTop.removeChild(menuButton)
            headerTop.append(closeButton)
            
            if (main.contains(settingsPanel.container))
            menuPanel.hideSettings()
            
            header.append(menuPanel.container)
        }
        
        
        closeButton.onclick = () => {
            if (headerTop.contains(closeButton))
            headerTop.removeChild(closeButton)
            
            headerTop.append(menuButton)
            menuPanel.showSettings()

        if (header.contains(menuPanel.container))
            header.removeChild(menuPanel.container)
    }

    const listPanel = main.querySelector('.list-panel')

    menuPanel.onSettings = () => {
        closeButton.click()

        if (footer.contains(addButton))
            footer.removeChild(addButton)

            main.removeChild(listPanel)
            main.append(settingsPanel.container)
    }
    
    settingsPanel.onUpdatePassword = (oldPassword, newPassword, newPasswordRepeat) => {
        this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
    }
    
    settingsPanel.onClose = () => {
        main.removeChild(settingsPanel.container)
        
        closeButton.click()
        
        main.append(listPanel)
        footer.append(addButton)
    }
}

setName(name) {
    this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
}

renderList(notes) {
    const listPanel = this.container.querySelector('.list-panel')
    listPanel.innerHTML = ''
    
    notes.forEach(note => {
        const item = document.createElement('li')
        item.classList.add('list__item')
        
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('list__item-delete-button')
        deleteButton.innerText = 'x'
        deleteButton.onclick = () => {
            this.onDeleteNote(note.id)
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
        
        listPanel.append(item)
    })
}

onDeleteNote = null

onUpdateNote = null

onLogout = null

onAddNote = null

onUpdatePassword = null
}
