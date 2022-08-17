import { useState, useRef, forwardRef, useImperativeHandle } from 'react'
import './ListPanel.css'
import Loggito from '../utils/loggito'

import changeNoteColor from '../logic/changeNoteColor'
import ColorButtons from './ColorButtons'

const ListPanel = forwardRef(({ notes, onUpdateNote, onDeleteNote, onChangeColorNote }, ref) => {
    useImperativeHandle(ref, () => {    //MANDATORY TO REF WHOLE FUNCTION
        return {    // ON THIS RETURN WE LINK METHODS TO ACCESS FROM OUTSIDE
            handleScroll: () => { handleScroll() }
        }
    })

    // INSIDE forwardRef we NEST our CODE
    const [colors, setColors] = useState(['orange', 'green', '#7d19c4', 'red', 'blue', 'grey'])

    let noteTitle = {}
    let noteText = {}
    let noteList = useRef(null)

    const logger = new Loggito('ListPanel')

    const handleScroll = () => {
        noteList.current.scroll({ 'top': 0, 'behavior': "smooth" })
    }

    const handleFilterNotes = (color) => {

        let tempColors = [...colors]
        if (color === 'all' && tempColors.length !== 6) {
            tempColors = ['orange', 'green', '#7d19c4', 'red', 'blue', 'grey']
        }
        else if (color === 'all' && colors.toString() === 'orange,green,#7d19c4,red,blue,grey') {
            tempColors = []
        }
        else if (tempColors.includes(color))
            tempColors = tempColors.filter(item => (color !== item))
        else {
            tempColors.push(color)
        }

        setColors(tempColors)

        logger.debug('setColors', tempColors)

    }

    const handleUpdateNote = (noteId) => {
        debugger
        const text = noteText[noteId].textContent
        const title = noteTitle[noteId].textContent

        if (window.timeOutId)
            clearTimeout(window.timeOutId)

        window.timeOutId = setTimeout(() => {
            onUpdateNote(noteId, title, text)
        }, 500)

    }

    const handleChangeColorNote = (noteId, color) => {
        let tempNotes = [...notes] // WE HAVE TO CREATE A DUPLICATE OF STATE TO MANIPULATE TEMPORALLY
        try {
            changeNoteColor(sessionStorage.UserToken, tempNotes, noteId, color, (error) => {
                if (error) {
                    alert(error.message)
                    logger.warn(error.message)
                }

                onChangeColorNote(tempNotes)
            })

        } catch (error) {
            alert(error.message)
            logger.warn(error.message)
        }


    }
    return (<section className="homeMainContainer home__notesContainer">
        <div className="filterNotesButtonsContainer">
            <button className="filterNotesButtons filterAll" onClick={() => handleFilterNotes('all')}>All</button>
            <button className="filterNotesButtons filterBlue" onClick={() => handleFilterNotes('blue')}>Blue</button>
            <button className="filterNotesButtons filterRed" onClick={() => handleFilterNotes('red')}>Red</button>
            <button className="filterNotesButtons filterGreen" onClick={() => handleFilterNotes('green')}>Green</button>
            <button className="filterNotesButtons filterOrange" onClick={() => handleFilterNotes('orange')}>Orange</button>
            <button className="filterNotesButtons filterPurple" onClick={() => handleFilterNotes('#7d19c4')}>Purple</button>
            <button className="filterNotesButtons filterGrey" onClick={() => handleFilterNotes('grey')}>Grey</button>
        </div>

        <ul className="notesList" ref={noteList}>
            {notes && notes.filter(note => colors.includes(note.color)).map(note =>
                <li className="note" style={{ backgroundColor: note.color }} key={note.id}>
                    <button className="deleteNoteButton" onClick={() => onDeleteNote(note.id)}>✖</button>
                    <p className="noteTitle" contentEditable="true" suppressContentEditableWarning={true} ref={titleRefId => noteTitle[note.id] = titleRefId} onKeyUp={() => handleUpdateNote(note.id)}>{note.title}</p>
                    <p className="noteText" contentEditable="true" suppressContentEditableWarning="true" ref={textRefId => noteText[note.id] = textRefId} onKeyUp={() => handleUpdateNote(note.id)} >{note.text} </p>
                    <ColorButtons onChangeColorNote={handleChangeColorNote} noteId={note.id} />
                </li>).reverse()}
        </ul>
    </section>
    )
})

export default ListPanel