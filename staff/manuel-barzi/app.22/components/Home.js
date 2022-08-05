class Home extends Component {
    constructor() {
        super(`<div class="home-page container container--full">
            <header class="header container">
                <div class="header-top container container--row container--distributed">
                    <h1 class="title">Hello, User!</h1>
                    <button class="menu-button transparent-button"><span class="material-symbols-outlined">menu</span></button>
                </div>
            </header>

            <main class="main">
                
            </main>

            <footer class="footer">
                <button class="add-button transparent-button">+</button>
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

        const listPanel = new ListPanel
        this.listPanel = listPanel
        main.append(listPanel.container)

        listPanel.onDeleteNote = noteId => this.onDeleteNote(noteId)
        listPanel.onUpdateNote = (noteId, text) => this.onUpdateNote(noteId, text)

        menuPanel.onLogout = () => {
            if (!main.contains(listPanel.container)) {
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

        menuPanel.onSettings = () => {
            closeButton.click()

            if (footer.contains(addButton))
                footer.removeChild(addButton)

            main.removeChild(listPanel.container)
            main.append(settingsPanel.container)
        }

        settingsPanel.onUpdatePassword = (oldPassword, newPassword, newPasswordRepeat) => {
            this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
        }

        settingsPanel.onClose = () => {
            main.removeChild(settingsPanel.container)

            closeButton.click()

            main.append(listPanel.container)
            footer.append(addButton)
        }
    }

    setName(name) {
        this.container.querySelector('.title').innerText = 'Hello, ' + name + '!'
    }

    renderList(notes) {
        this.listPanel.renderList(notes)
    }

    onDeleteNote = null

    onUpdateNote = null

    onLogout = null

    onAddNote = null

    onUpdatePassword = null
}