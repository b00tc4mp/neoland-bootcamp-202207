class ListPanel extends Component {
    constructor(props) {
        super(props)

        this.noteTitle = {} /* React.createRef() IF WE ARE USING DYNAMIC REFS, STORE THEM IN OBJ/ARRAY*/
        this.noteText = {}/* React.createRef() IF WE ARE USING DYNAMIC REFS, STORE THEM IN OBJ/ARRAY*/

        this.noteListRef = React.createRef()

        this.state = {color:['orange','green','#7d19c4', 'red', 'blue', 'grey']}
    }

    handleScroll = () => {
        this.noteListRef.current.scroll({ 'top': 0, 'behavior': "smooth" })
    }

    handleFilterNotes = (color) => {
        let tempColors = this.state.color
        if(color === 'all' && this.state.color.toString() !== 'orange,green,#7d19c4,red,blue,grey'){
            tempColors = ['orange','green','#7d19c4', 'red', 'blue', 'grey']
        }
        else if(color === 'all' && this.state.color.toString() === 'orange,green,#7d19c4,red,blue,grey'){
            tempColors = [undefined]
        }
        else if(tempColors.includes(color))
            tempColors = tempColors.filter(item => (color!==item))
        else{
            tempColors.push(color)
        } 
        this.setState({color: tempColors})
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
        try {
            changeNoteColor(sessionStorage.UserToken, this.props.notes, noteId, color, (error) => {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)
                }

                this.props.onChangeColorNote(this.props.notes)
            })

        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }


    }

    render() {

        return (
            <section className="homeMainContainer home__notesContainer">
                <div className="filterNotesButtonsContainer">
                    <button className="filterNotesButtons filterAll" onClick={() => this.handleFilterNotes('all')}>All</button>
                    <button className="filterNotesButtons filterBlue" onClick={() => this.handleFilterNotes('blue')}>Blue</button>
                    <button className="filterNotesButtons filterRed" onClick={() => this.handleFilterNotes('red')}>Red</button>
                    <button className="filterNotesButtons filterGreen" onClick={() => this.handleFilterNotes('green')}>Green</button>
                    <button className="filterNotesButtons filterOrange" onClick={() => this.handleFilterNotes('orange')}>Orange</button>
                    <button className="filterNotesButtons filterPurple" onClick={() => this.handleFilterNotes('#7d19c4')}>Purple</button>
                    <button className="filterNotesButtons filterGrey" onClick={() => this.handleFilterNotes('grey')}>Grey</button>
                </div>
                
                <ul className="notesList" ref={this.noteListRef}>
                    {this.props.notes && this.props.notes.filter(note => this.state.color.includes(note.color)).map(note =>
                        <li className="note" style={{ backgroundColor: note.color }} key={note.id}>
                            <button className="deleteNoteButton" onClick={() => this.props.onDeleteNote(note.id)}>✖</button>
                            <p className="noteTitle" contentEditable="true" suppressContentEditableWarning={true} ref={titleRefId => this.noteTitle[note.id] = titleRefId} onKeyUp={() => this.handleUpdateNote(note.id)}>{note.title}</p>
                            <p className="noteText" contentEditable="true" suppressContentEditableWarning="true" ref={textRefId => this.noteText[note.id] = textRefId} onKeyUp={() => this.handleUpdateNote(note.id)} >{note.text} </p>
                            <ColorButtons onChangeColorNote={this.handleChangeColorNote} noteId={note.id} />
                        </li>).reverse()}
                </ul>
            </section>
        )
    }
}