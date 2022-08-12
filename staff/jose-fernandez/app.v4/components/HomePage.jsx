class HomePage extends Component{
    constructor(){
        super()

        this.state = {name:null, notes: null}
    }

    componentDidMount = () => { // override
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token,(error,user)=>{
                if(error){
                    alert(error.message)

                    this.logger.warn(error.message)
                    return
                }
                this.setState({name:user.name})
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
        this.loadNotes()
    }

    loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token,(error,notes)=>{
                if(error){
                    alert(error.message)

                    this.logger.warn(error.message)
                    return
                }
                this.setState({notes})
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

     //onFormcreate
    handleAddClick=()=>{
        this.setState({view:'newNote'})
    }

    handleArrLeftClick=()=>{
        try {
            createNote(sessionStorage.token, textFromTextarea, error => {
                if (error) {
                    alert(error.message)
                    
                    return
                }
                // renderHome()
                this.loadNotes()
                this.setState({ view: null })
            })
    
        } catch (error) {
            alert(error.message)
        }

    }
    

    handleUpdateNote = (noteId,text) => {
        try {
            updateNote(sessionStorage.token,noteId,text,error =>{
                if(error){
                    alert(error.message)
                    return
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

    handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.token,noteId,error=>{
                if(error){
                    alert(error.message)

                    this.logger.warn(error.message)
                    return
                }
                this.loadNotes()
            })
        } catch (error) {
            alert(error.message)
            
            this.logger.warn(error.message)
        }
    }

    render(){
        this.logger.info('render')

        return this.state.name ?
        <div className="container home_page ">
        <Header name={this.state.name} onLogoutClick={this.props.onLogoutClick}/>

        <main className="main_home">            
        <NoteList notes={this.state.notes} onUpdateNote={this.handleUpdateNote} onDeleteNote={this.handleDeleteNote}/>
        </main>

        <footer className="footer_home">
            <div className="btn_plus" onClick={this.handleAddClick}>
               <span className="material-symbols-outlined add">add</span>       
            </div>

        </footer>
    </div>
    :
    null
    }
}