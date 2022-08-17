class NotasDisplay extends Component {
    constructor() {
        super(`<div class="notas-display">
        <ul class="list"></ul>
        </div>`)
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

            const text = document.createElement('div')
            text.contentEditable = true
            text.classList.add('list__item-text')
            text.onkeyup = () => { // auto-binding. mete el this de fuera dentro de la funcion. se consigue con arrow function
                if (window.timeoutID) // con el objeto window puedo añadir variables globales
                    clearTimeout(window.timeoutID)
                window.timeoutID = setTimeout(() => {
                    this.onUpdateNote(note.id, text.innerText)
                }, 1000)
            }
            text.innerText = note.text

            item.append(deleteButton, text)

            list.append(item)
            
        })
    }

    onDeleteNoteClick = null
    onUpdateNote = null
}