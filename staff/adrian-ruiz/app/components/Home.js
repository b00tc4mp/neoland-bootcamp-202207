class Home extends Component {
    constructor() {
        super(`<main class="page homePage">
        <section class="homeMainContainer home__notesContainer">
        </section>
        <section class="bottomMenu">
            <button class="newNoteButton"><span class="newNoteEmoji">📝</span></button>
        </section>
    </main>`)

        this.main = this.container.querySelector('.homeMainContainer')

        const header = new HeaderPanel
        this.container.prepend(header.container)

        header.onHomeIconClick = () => {
            if(this.main.contains(profileMenu.container)){
                this.main.removeChild(profileMenu.container)
                this.main.append(notesList.container)
            }
            this.footer.append(newNoteButton)
            notesList.container.scroll({ 'top': 0, 'behavior': "smooth" })
        }

        header.onProfileLinkClick = () => {
            if(this.main.contains(notesList.container)){
                this.main.removeChild(notesList.container)
                this.footer.removeChild(newNoteButton)
            }
            this.main.append(profileMenu.container)
        } 

        header.onLogoutLinkClick = () => {
            if(this.main.contains(profileMenu.container)){
                this.main.removeChild(profileMenu.container)
                this.footer.append(newNoteButton)
            }
            this.main.append(notesList.container)
            this.onLogout()
        }

        const notesList = new ListPanel
        this.notesList = notesList
        this.main.append(notesList.container)

        notesList.onUpdateNote = (noteId, noteTitle, noteText) => {
            this.onUpdateNote(noteId, noteTitle, noteText)
        }

        notesList.onChangeNoteColor = (notes, noteId, color) => {
            this.onChangeNoteColor(notes, noteId, color)
        }

        notesList.onDeleteNoteClick = (noteId) => {
            this.onDeleteNoteClick(noteId)
        }

        const profileMenu = new ProfileMenu
        profileMenu.onUpdateUserPass = (oldPass, newPass, confirmNewPass) => {
            this.onUpdateUserPass(oldPass, newPass, confirmNewPass)
        }

        profileMenu.onUpdateUserEmail = (newEmail) => {
            this.onUpdateUserEmail(newEmail)
        }

        this.newNotePopUp = new NewNotePopUp

        const newNoteButton = this.container.querySelector('.newNoteButton')
        newNoteButton.onclick = () => {
            let result = confirm('Are you sure to create a new note?')
            if(result){
                this.container.prepend(this.newNotePopUp.container)
                this.onNewNoteButton()
            }
        }
        this.newNotePopUp.onNewNoteSubmit = (newNoteTitle, newNoteText) => {
            this.onNewNoteSubmit(newNoteTitle, newNoteText)
        }

        this.newNotePopUp.onCancelNewNote = () => {
            let result = confirm('Are you sure to cancel?')
            if(result)
                this.container.removeChild(this.newNotePopUp.container)
            else return
        }

        

        this.footer = this.container.querySelector('.bottomMenu')

    }

    setName(name) {
        this.container.querySelector('#headerTitle').innerText = `Hello, ${name}!`
    }

    renderList(notes){
        this.notesList.renderList(notes)
    }

    onUpdateUserPass = null

    onUpdateUserEmail = null

    onNewNoteSubmit = null

    onDeleteNoteClick = null

    onUpdateNote = null

    onChangeNoteColor = null

    onLogout = null

    onNewNoteButton = null
}