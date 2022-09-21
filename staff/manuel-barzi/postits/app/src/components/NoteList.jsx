import './NoteList.sass'
import Loggito from '../utils/Loggito'

function NoteList({ notes, onDeleteNote, onUpdateNoteText }) {
    const logger = new Loggito('List')

    logger.info('return')

    return <ul className="NoteList">
        {notes && notes.map(note => <li className="NoteList__item" key={note.id}>
            <button className="NoteList__item-delete-button" onClick={() => onDeleteNote(note.id)}>x</button>

            <p suppressContentEditableWarning="true" contentEditable="true" className="NoteList__item-text" onKeyUp={event => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.innerText

                    onUpdateNoteText(note.id, text)
                }, 500)
            }}>{note.text}</p>
        </li>)}
    </ul>
}

export default NoteList