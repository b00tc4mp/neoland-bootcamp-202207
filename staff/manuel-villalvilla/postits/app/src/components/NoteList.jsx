import Logger from '../utils/logger'

function NoteList({notes, onDeleteClick, onUpdateNote}) {
    const logger = new Logger(NoteList.name)

    logger.info('render')

    return <div className="notas-display">
    <ul className="list">
        {notes && // significa: if (notes) { haz algo }
        
        notes.map((note) =>
        <li className="list__item" key={note.id}> { /* tambien tengo q darle una key unica a la lista para que pinte bien en el DOM */ }
            <button className="list__item-delete-button" onClick={() => onDeleteClick(note.id)}>x</button>

            <p suppressContentEditableWarning={true} contentEditable={true} onKeyUp={event => {
                if (window.timeoutID) // con el objeto window puedo añadir variables globales
                    clearTimeout(window.timeoutID)

                window.timeoutID = setTimeout(() => {
                    const text = event.target.innerText
                    onUpdateNote(note.id, text)
                }, 500)}}>{note.text}</p>
        </li>
        )}
    </ul>
    </div>
}

export default NoteList