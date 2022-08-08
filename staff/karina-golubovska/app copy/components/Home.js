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
            header.removeChild(menuButton)
            header.append(closeButton)
            if (main.contains(settingsPanel.container))
                menuPanel.hideSettings()

            header.append(menuPanel.container)
        }
        closeButton.onclick = () => {
            header.removeChild(closeButton)
            header.append(menuButton)
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
