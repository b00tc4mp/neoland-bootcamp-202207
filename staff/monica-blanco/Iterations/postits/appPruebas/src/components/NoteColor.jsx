
function NoteColor (token, notes, noteId,color,error, onChangeNoteColor) {

    const handleChangeNoteColor = (noteId, color, error) => {
        onChangeNoteColor(notes, noteId, color)
    }

    return (
        <div className="changeNoteColorContainer">
            <div className="changeNoteBlue" onClick={() => handleChangeNoteColor('blue')}></div>
            <div className="changeNotePink" onClick={() => handleChangeNoteColor('pink')}></div>
        </div>
    )

}

export default NoteColor