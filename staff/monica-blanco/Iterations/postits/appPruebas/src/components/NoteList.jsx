import './NoteList.css'
import Loggito from '../utils/Loggito'

function NoteList({notes, onDeleteNote, onUpdateNote, onChangeNoteColor}) {
    const logger = new Loggito('List')

    logger.info('return')

    return <ul className="NoteList">
    {notes && notes.map(note => <li className={`NoteList__item NoteList__item--${note.color}`} key={note.id}>
            <button className="NoteList__item-delete-button" onClick={() => onDeleteNote(note.id)}>x</button>

            <p suppressContentEditableWarning="true" contentEditable="true" className="NoteList__item-text" onKeyUp={event => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId) // con el objeto window puedo añadir variables globales

                window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.innerText
                    
                    onUpdateNote(note.id, text)
                }, 500)
                //changeColor
            const changeColorContainer = document.createElement('div')
            changeColorContainer.classList.add('changeNoteColorContainer')
            const changeBlue = document.createElement('div')
            changeBlue.classList.add('changeNoteBlue')
            changeBlue.onclick = () => {
                onChangeNoteColor(notes, note.id, '#5ceef0')
                // style.backgroundColor = '#5ceef0'
            }
            const changePink = document.createElement('div')
            changePink.classList.add('changeNotePink')
            changePink.onclick = () => {
                onChangeNoteColor(notes, note.id, '#e8a5dea1')
                // style.backgroundColor = '#e8a5dea1'
            }
           
            changeColorContainer.append(changeBlue, changePink)
            onChangeNoteColor = null
            }}>{note.text}</p>
        </li>)}
    </ul>
}

export default NoteList