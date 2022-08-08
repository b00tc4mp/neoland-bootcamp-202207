class ListPanel extends Component{
    constructor(){
        super(`<ul class="notesList">
    </ul>`)
    
    }

    renderList(notes) {
        
        this.container.innerHTML = ''

        notes.reverse().forEach(note => {
            //Note
            const container = document.createElement('li')
            container.classList.add('note')
            container.style.backgroundColor = note.color
            //Delete Button
            const deleteButton = document.createElement('div')
            deleteButton.classList.add('deleteNoteButton')
            deleteButton.textContent = '✖'
            //Note Title
            const elementTitle = document.createElement('div')
            elementTitle.classList.add('noteTitle')
            elementTitle.contentEditable = true
            //Note text
            const elementText = document.createElement('div')
            elementText.classList.add('noteText')
            elementText.contentEditable = true


            deleteButton.onclick = () => {
                this.onDeleteNoteClick(note.id)

            }

            container.onkeyup = () => {
                if (window.timeOutId)
                    clearTimeout(window.timeOutId)

                window.timeOutId = setTimeout(() => {
                    this.onUpdateNote(note.id, elementTitle.textContent, elementText.textContent)
                }, 500)
            }

            //Botones cambio de color
            const colorButtons = new ColorButtons
            colorButtons.onChangeNoteColor = (color) => {
                this.onChangeNoteColor(notes, note.id, color)
                container.style.backgroundColor = color
            }

            elementTitle.textContent = note.title
            elementText.textContent = note.text
            container.append(deleteButton, elementTitle, elementText, colorButtons.container)
            this.container.append(container)
        })
    }

    onChangeNoteColor = null

    onUpdateNote = null

    onDeleteNoteClick = null
}