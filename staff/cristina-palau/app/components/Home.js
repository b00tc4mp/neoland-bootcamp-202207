class Home extends Component {
    constructor() {
        super(`<main class="home-page page">
        
        <div class="notes-page">
        </div>
        
        <div class="botcontainer homecontainer">
            <footer class="homefooter">
                <button class="addnote">✏️</button>
            </footer>
        </div>
    </main>`)

        const addButton = this.container.querySelector('.addnote')
        addButton.onclick = () => {
            this.onAddNote()
        }

        
        const header = new HeaderPanel
        this.container.prepend(header.container)

               
        const footer = this.container.querySelector('.homefooter')

        const main = this.container.querySelector('.notes-page')
        
        const settingsPanel = new SettingsPanel

        const notesPanel = new NotesPanel
        this.notesPanel = notesPanel
        main.append(notesPanel.container)


        header.onSettings = () => {
            header.onClose()

            if (footer.contains(addButton)) {
                footer.removeChild(addButton)
                footer.append(homeButton)
            }

            header.hideSettings()

            main.removeChild(notesPanel)
            main.append(settingsPanel.container)
        }

        header.onLogout = () => {
            if (!main.contains(notesPanel.container)) {
                main.removeChild(settingsPanel.container)
                footer.removeChild(homeButton)
                main.append(notesPanel.container)
            }

            if (!footer.contains(addButton)) {
                footer.append(addButton)
            }

            header.showSettings()

            header.onClose()

            this.onLogout()
        }


        const homeButton = document.createElement('temp')
        homeButton.innerHTML = `<div class="footer-panel-home"><span class="material-symbols-outlined homeSpan">
        home</span></div>`

        homeButton.onclick = () => {
            header.onClose()
            footer.removeChild(homeButton)
            main.removeChild(settingsPanel.container)

            header.showSettings()

            footer.append(addButton)
            main.append(notesPanel)
        }

        settingsPanel.onUpdatePassword = (oldPass, newPass, newPass2) => {
            this.onUpdatePassword(oldPass, newPass, newPass2)
        }

        settingsPanel.onUpdateEmail = (newEmail) => {
            this.onUpdateEmail(newEmail)
        }

        notesPanel.onDeleteNote = (noteId) => {
            this.onDeleteNote(noteId)
        }

        notesPanel.onUpdateNote = (noteId, text) => {
            this.onUpdateNote(noteId, text)
        }

        header.onMenuButtonClick = () => {
            if (main.contains(settingsPanel.container))
                headerPanel.hideMenuSettings()
        }

        this.setName = header.setName
    }

    // setName(name) {
    //     this.header.setName(name)
    // }

    renderList(notes) {
        this.notesPanel.renderList(notes)
    }

    onDeleteNote = null
    
    onUpdateNote = null
    
    onLogout = null
    
    onAddNote = null
    
    onUpdatePassword = null
    
    onUpdateEmail = null

    setName = null
}