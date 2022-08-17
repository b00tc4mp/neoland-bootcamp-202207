function NoteList(props) {
    const logger = new Loggito('List')

    logger.info('render')

    return <ul className="list-panel list">
        {props.notes && props.notes.map(note => <li className="list__item" key={note.id}>
            <button className="list__item-delete-button" onClick={() => props.onDeleteNote(note.id)}>x</button>

            <p contentEditable="true" className="list__item-text" onKeyUp={event => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    const text = event.target.innerText
                    
                    props.onUpdateNote(note.id, text)
                }, 500)
            }}>{note.text}</p>
        </li>)}
    </ul>
}