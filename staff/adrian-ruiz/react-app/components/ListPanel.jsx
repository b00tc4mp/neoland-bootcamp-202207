class ListPanel extends Component {
    constructor(props) {
        super(props)

        this.noteTitle = {} /* React.createRef() IF WE ARE USING DYNAMIC REFS, STORE THEM IN OBJ/ARRAY*/
        this.noteText = {}/* React.createRef() IF WE ARE USING DYNAMIC REFS, STORE THEM IN OBJ/ARRAY*/

        this.status = {update: 'update'}
    }

    handleUpdateNote = (noteId) => {
        
        const text = this.noteText[noteId].textContent
        const title = this.noteTitle[noteId].textContent
        if (window.timeOutId)
            clearTimeout(window.timeOutId)


        window.timeOutId = setTimeout(() => {
            this.props.onUpdateNote(noteId, title, text)
        }, 500)

    }

    handleChangeColorNote = (noteId, color) => {
        try{
            changeNoteColor(sessionStorage.UserToken, this.props.notes, noteId, color, (error) => {
                if (error){
                    alert(error.message)
                    this.logger.warn(error.message)
                }

                // this.setState({update: 'update'})

                this.props.onChangeColorNote(this.props.notes)
            })
           
        }catch(error){
            alert(error.message)
            this.logger.warn(error.message)
        }

        
    }

    render() {

        return (

            <ul className="notesList">
                {this.props.notes && this.props.notes.map(note =>
                    <li className="note" style={{backgroundColor: note.color}} key={note.id}>
                        <button className="deleteNoteButton" onClick={() => this.props.onDeleteNote(note.id)}>✖</button>
                        <p className="noteTitle" contentEditable="true" suppressContentEditableWarning={true} ref={titleRefId => this.noteTitle[note.id] = titleRefId} onKeyUp={() => this.handleUpdateNote(note.id)}>{note.title}</p>
                        <p className="noteText" contentEditable="true" suppressContentEditableWarning="true" ref={textRefId =>this.noteText[note.id] = textRefId} onKeyUp={() => this.handleUpdateNote(note.id)} >{note.text} </p>
                        <ColorButtons onChangeColorNote={this.handleChangeColorNote} noteId={note.id}/>
                    </li>).reverse()}
            </ul>
        )
    }
}