class NewNotePopUp extends Component {
    constructor(){
        super(`<div class="containerPopUp">
        <div class="newNotePopUp">
            <form class="newNoteForm" action="#">
                <label for="newNoteTitle" class="newNoteLabel">Title</label>
                <div contenteditable="true" class="newNoteInput newNoteInput__title" name="newNoteTitle"></div>
                <label for="newNoteText" class="newNoteLabel">Describe your new note</label>
                <div contenteditable="true" class="newNoteInput newNoteInput__text" name="newNoteText"></div>
                <div class="newNoteButtonsContainer">
                    <button class="newNoteFormButton" id="confirmNewNoteButton">Create note</button>
                    <button class="newNoteFormButton" id="cancelNewNoteButton">Cancel</button>
                </div>
                
            </form>
        </div>
    </div>`)
    
        const newNoteForm = this.container.querySelector('.newNoteForm')
        const newNoteConfirm = this.container.querySelector('#confirmNewNoteButton')
        newNoteConfirm.onclick = event => {
            event.preventDefault()
            debugger
            const newNoteTitle = newNoteForm.querySelector('.newNoteInput__title')
            
            const newNoteText = newNoteForm.querySelector('.newNoteInput__text')

            this.onNewNoteSubmit(newNoteTitle.textContent, newNoteText.textContent)
            newNoteTitle.textContent = ''
            newNoteText.textContent = ''
        }

        const cancelNewNote = this.container.querySelector('#cancelNewNoteButton')
        cancelNewNote.onclick = event => {
            event.preventDefault()

            this.onCancelNewNote()
        }
    }

    onNewNoteSubmit = null

    onCancelNewNote = null
}