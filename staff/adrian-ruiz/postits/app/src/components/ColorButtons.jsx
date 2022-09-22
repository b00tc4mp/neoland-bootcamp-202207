import "./ColorButtons.css"

function ColorButtons({onChangeColorNote, noteId}) {

    const handleChangeColorNote = (color) => {
        onChangeColorNote(noteId, color)
    }

    return (
        <div className="changeNoteColorContainer">
            <div className="changeNoteBlue" onClick={() => handleChangeColorNote('blue')}></div>
            <div className="changeNoteRed" onClick={() => handleChangeColorNote('red')}></div>
            <div className="changeNoteGreen" onClick={() => handleChangeColorNote('green')}></div>
            <div className="changeNoteOrange" onClick={() => handleChangeColorNote('orange')}></div>
            <div className="changeNotePurple" onClick={() => handleChangeColorNote('#7d19c4')}></div>
            <div className="changeNoteGrey" onClick={() => handleChangeColorNote('grey')}></div>
        </div>
    )

}

export default ColorButtons