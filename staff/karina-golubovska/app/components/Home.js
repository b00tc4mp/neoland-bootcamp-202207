class Home extends Component {
    constructor() {

        super(`<div class = "home-page container container--full container--distributed">
        <main class="main"> 
        </main>
        <footer class="footer">
            <button class="transparent-button plusbutton">+</button>
        </footer>
    </div>`)
        const plusButton = this.container.querySelector('.plusbutton')
        plusButton.onclick = () => {
            this.onAddNote()
        }
        const headerPanel  = new HeaderPanel
        this.container.prepend(headerPanel.container)

        headerPanel.onMenuButtonClick =()=>{
            if (main.contains(settingsPanel.container))
            menuPanel.hideMenuSettingsButton()
        }
        
        const footer = this.container.querySelector('.footer')

        headerPanel.onMenuButtonClick = () => {
            if (footer.contains(plusButton))
            footer.removeChild(plusButton)

            main.removeChild(listPanel.container)
                main.append(settngsPanel.container)
        }

        const main = this.container.querySelector('.main')
        const settingsPanel = new SettingsPanel
        const listPanel = new ListPanel
        this.listPanel = listPanel
        main.append(listPanel.container)

        listPanel.onLogoutButtonClick = ()=>{
            if(main.contains (settingsPannel.container))
            settingsPanel.close()
             this.onLogoutButtonClick()
        }

        settingsPanel.onUpdatePassword = (oldPassword, newPassword, newPasswordRepeat) => {
            this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
        }
        settingsPanel.onClose = () => {
            main.removeChild(settingsPanel.container)
            headerPanel.closeMenu()

            main.append(listPanel.container)
            footer.append(addButton)
        }
    }
    setName(name) {
        this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
    
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
    onDeleteNote = null
    
    onUpdateNote = null
    
    onLogout = null
    
    onAddNote = null
    
    onUpdatePassword = null
    }
    





        