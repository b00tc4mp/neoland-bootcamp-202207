// import './'
import Loggito from '../utils/Loggito'

function NoteList({notes,onDeleteNote,onUpdateNote}) {
    const logger = new Loggito('List')
    logger.info('return')

    return <ul className="list-panel list ">
        {notes && notes.map(note => <li className="list__item" key={note.id}>
            <button className="btn__delete" onClick={() => onDeleteNote(note.id)}>X</button>
            <p suppressContentEditableWarning="true" contenteditable="true" className="list__item-text" 
                onKeyUp={event => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.innerText
                    onUpdateNote(note.id,text)
                }, 500)
            }}>{note.text}</p>

        </li>)}


    </ul>
}

export default NoteList