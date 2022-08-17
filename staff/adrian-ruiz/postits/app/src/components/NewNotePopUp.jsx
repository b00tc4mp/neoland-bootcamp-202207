import { useRef } from 'react'
import './NewNotePopUp.css'

function NewNotePopUp({ onNewNoteSubmit, onCancelNewNote }) {

    const noteTitle = useRef()
    const noteText = useRef()

    const handleSubmit = event => {
        event.preventDefault()

        const title = noteTitle.current.textContent
        const text = noteText.current.textContent

        let result = window.confirm('Are you sure to create a new note?')
        if (result) {
            onNewNoteSubmit(title, text)
        } else return
    }

    return (
        <div className="containerPopUp">
            <div className="newNotePopUp">
                <form className="newNoteForm" action="#" onSubmit={handleSubmit}>
                    <label htmlFor="newNoteTitle" className="newNoteLabel">Title</label>
                    <p contentEditable="true" suppressContentEditableWarning={true} className="newNoteInput newNoteInput__title" name="newNoteTitle" ref={noteTitle}></p>
                    <label htmlFor="newNoteText" className="newNoteLabel">Describe your new note</label>
                    <p contentEditable="true" suppressContentEditableWarning={true} className="newNoteInput newNoteInput__text" name="newNoteText" ref={noteText}></p>
                    <div className="newNoteButtonsContainer">
                        <button className="newNoteFormButton" id="confirmNewNoteButton">Create note</button>
                        <button type="button" className="newNoteFormButton" id="cancelNewNoteButton" onClick={onCancelNewNote}>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default NewNotePopUp