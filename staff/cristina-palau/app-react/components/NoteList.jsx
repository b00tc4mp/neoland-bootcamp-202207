function NoteList(props) {

    const logger = new Loggito('List')

    logger.info('render')

    return <>
        <ul className="list" >
            {props.notes && props.notes.map(note => <li className="list__item" key={note.id}>
                <button className="delete" onClick={() => props.onDeleteNote(note.id)}>✖️</button>

                <p className="list__item-text" contentEditable="true"  suppressContentEditableWarning={true} onKeyUp={event => {
                    if (window.updateNoteTimeoutId)
                        clearTimeout(window.updateNoteTimeoutId)

                    window.updateNoteTimeoutId = setTimeout(() => {
                        const text = event.target.innerText

                        props.onUpdateNote(note.id, text)
                    }, 500)
                }}>{note.text}</p>
            </li>)}

        </ul>
    </>
}
