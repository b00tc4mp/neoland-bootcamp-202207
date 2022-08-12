class ColorButtons extends Component{
    constructor(props){
        super(props)
    }

    handleChangeColorNote = (color) => {
       
        this.props.onChangeColorNote(this.props.noteId, color)
    }
    render(){
        return(
        <div className="changeNoteColorContainer">
        <div className="changeNoteBlue" onClick={() => this.handleChangeColorNote('blue')}></div>
        <div className="changeNoteRed" onClick={() => this.handleChangeColorNote('red')}></div>
        <div className="changeNoteGreen" onClick={() => this.handleChangeColorNote('green')}></div>
        <div className="changeNoteOrange" onClick={() => this.handleChangeColorNote('orange')}></div>
        <div className="changeNotePurple" onClick={() => this.handleChangeColorNote('#7d19c4')}></div>
        <div className="changeNoteGrey" onClick={() => this.handleChangeColorNote('grey')}></div>
        </div>
        )
    }
}