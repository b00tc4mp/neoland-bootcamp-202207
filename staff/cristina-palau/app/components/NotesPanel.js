class NotesPanel extends Component {
    constructor() {
        super(`<div class="note-container">
    <ul class="list">
        <li class="list__item">
            <button class="delete">✖️</button>
            <p class="list__item-text" contentEditable=true>hello, note</p>
        </li>
    </ul>
</div>`)
    }

    renderList(notes) {
        this.container.innerHTML = ''

        notes.forEach(note => {
            const item = document.createElement('li')
            item.classList.add('list__item')

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('delete')
            deleteButton.innerHTML = '✖️'
            deleteButton.onclick = () => {
                this.onDeleteNote(note.id)
            }

            const text = document.createElement('p')
            text.contentEditable = true
            text.classList.add('list__item-text')

            text.onkeyup = () => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutOId = setTimeout(() => {
                    this.onUpdateNote(note.id, text.innerText)
                }, 500)

            }
            text.innerHTML = note.text

            item.append(deleteButton, text)

            this.container.append(item)
        })
    }

    onDeleteNote = null

    onUpdateNote = null
}

