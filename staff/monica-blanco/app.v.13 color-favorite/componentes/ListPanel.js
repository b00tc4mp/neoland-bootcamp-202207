class ListPanel extends Component {
    constructor() {
        super(`<ul class="list-panel list">
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem electus distinctio?</p>
            <div class="changeNoteColorContainer">
                <div class="changeNoteBlue"></div>
                <div class="changeNotePink"></div>
            </div>     
        </li>
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Hello, Note!</p>
        </li>
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem imilique ipsam deserunt eius soluta adipisci
                blanditiis nobis fugiat aut nesciunt rerum porro delectus distinctio?</p>
        </li>
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem delectus distinctio?</p>
        </li>
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem  delectus distinctio?</p>
        </li>
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem rerum porro delectus distinctio?</p>
        </li>
        <li class="list__item"><button class="list__item-delete-button">x</button>
            <p contenteditable="true" class="list__item-text">Lorem ipsuectustio?</p>
        </li>
    </ul>`)
    }

    renderList(notes) {
        this.container.innerHTML = ''

        notes.forEach(note => {
            //note
            const item = document.createElement('li')
            item.classList.add('list__item')
            item.style.backgroundColor = note.color
            //delete
            const deleteButton = document.createElement('button')
            deleteButton.classList.add('list__item-delete-button')
            deleteButton.innerText = 'x'
            deleteButton.onclick = () => {
                this.onDeleteNote(note.id)
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
            //changeColor
            const changeColorContainer = document.createElement('div')
            changeColorContainer.classList.add('changeNoteColorContainer')
            const changeBlue = document.createElement('div')
            changeBlue.classList.add('changeNoteBlue')
            changeBlue.onclick = () => {
                this.onChangeNoteColor(notes, note.id, '#5ceef0')
                item.style.backgroundColor = '#5ceef0'
            }
            const changePink = document.createElement('div')
            changePink.classList.add('changeNotePink')
            changePink.onclick = () => {
                this.onChangeNoteColor(notes, note.id, '#e8a5dea1')
                item.style.backgroundColor = '#e8a5dea1'
            }
           
            changeColorContainer.append(changeBlue, changePink)

            text.innerText = note.text

            item.append(deleteButton, text,changeColorContainer)

            this.container.append(item)
        })
    }

    onDeleteNote = null

    onUpdateNote = null

    onChangeNoteColor = null
}