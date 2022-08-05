class Home extends Component {
    constructor() {  

        super(`<main class="home-page"></main>`)

        const header = new Header

        const settingsPanel = new SettingsPanel

        const notasDisplay = new NotasDisplay

        const footer = new Footer

        const hiddenMenu = new HiddenMenu

        this.container.append(header.container, notasDisplay.container, footer.container, hiddenMenu.container)

        header.onLogoutbuttonClick = () => {
            if (!hiddenMenu.container.classList.contains('voff'))
                header.menuButton.click()
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.append(header.container, hiddenMenu.container, notasDisplay.container, footer.container)
            this.onLogout()
        }

        header.onMenuButtonClick = () => hiddenMenu.container.classList.toggle('voff')

        this.setName = header.setName

        hiddenMenu.onProfileLinkClick = () => {
            header.menuButton.click()
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.append(header.container, hiddenMenu.container, settingsPanel.container)
        }

        hiddenMenu.onNotesLinkClick = () => {
            header.menuButton.click()
            while (this.container.firstChild) {
                this.container.removeChild(this.container.firstChild)
            }
            this.container.append(header.container, hiddenMenu.container, notasDisplay.container, footer.container)
        }

        settingsPanel.updatePassword = (currentPass, newPass, repeatPass) => {
            this.updatePassword(currentPass, newPass, repeatPass)
        }

        settingsPanel.updateEmail = (newEmail) => {
            this.updateEmail(newEmail)
        }

        this.resetPasswordForm = settingsPanel.resetPasswordForm

        this.resetEmailForm = settingsPanel.resetEmailForm

        this.renderList = notasDisplay.renderList

        footer.onFooterClick = () => {
            this.onAddNote()
        }

    }

    setName = null

    renderList = null

    resetPasswordForm = null

    resetEmailForm = null

    onDeleteNoteClick = null

    onUpdateNote = null

    onLogout = null

    onAddNote = null

    updatePassword = null

    updateEmail = null

}