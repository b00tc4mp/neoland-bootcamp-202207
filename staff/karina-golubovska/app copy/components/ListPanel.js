class ListPanel extends Component{
    constructor(){
        super(`<ul class="list-panel list">
        <li class="list__item"><button class="delete-button ">x</button><p
                class="list__item-text">hELLJHGD</p></li>
        <li class="list__item"><button class="delete-button">x</button><p
                class="list__item-text">hE73646H</p></li>
        <li class="list__item"><button class="delete-button">x</button><p
                class="list__item-text">hSSSSSSS</p>
                </li>
    </ul>`)
}
    renderList(notes){
        this.container.innerHTML=''

        notes.forEach(note =>{
            const item =document.creareElement('li')
            item.classList.add('list__item')

            const deleteButton = document.createElement('p')
            text.contentEditable = true 
            text.classList.add('list__item-text')
            text.onkeyup =()=>{
                if(window.updateNoteTimeoutId)
                clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId =setTimeoutId(()=>{
                this.onUpdateNote(note.id , text.innnerText)
                },500)
            }
            text.innerText = note.text
            item.append (deleteButton , text)
            this.container.append(item)
        })
    }
    onDeleteNote = null
    onUpdateNote = null
}