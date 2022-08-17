class NewNotePopUp extends Component {
    constructor(props) {
        super(props)

        this.noteTitle = React.createRef()
        this.noteText = React.createRef()
    }

    handleSubmit = event => {
        event.preventDefault()
        const title = this.noteTitle.current.textContent
        const text = this.noteText.current.textContent
        let result = confirm('Are you sure to create a new note?')
            if(result){
                this.props.onNewNoteSubmit(title, text)
            }else return
        
    }
    render() {
        return (
            <div className="containerPopUp">
                <div className="newNotePopUp">
                    <form className="newNoteForm" action="#" onSubmit={this.handleSubmit}>
                        <label htmlFor="newNoteTitle" className="newNoteLabel">Title</label>
                        <div contenteditable="true" className="newNoteInput newNoteInput__title" name="newNoteTitle" ref={this.noteTitle}></div>
                        <label htmlFor="newNoteText" className="newNoteLabel">Describe your new note</label>
                        <div contenteditable="true" className="newNoteInput newNoteInput__text" name="newNoteText" ref={this.noteText}></div>
                        <div className="newNoteButtonsContainer">
                            <button className="newNoteFormButton" id="confirmNewNoteButton">Create note</button>
                            <button type="button" className="newNoteFormButton" id="cancelNewNoteButton" onClick={this.props.onCancelNewNote}>Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}