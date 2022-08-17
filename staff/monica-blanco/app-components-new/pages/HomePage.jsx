class HomePage extends Component {
    constructor() {
        super()

        this.state = { name: null, notes: null, view: 'list', view: 'info'}
    }

    componentDidMount = () => { // override
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ name: user.name })

            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }

        this.loadNotes()
    }

    loadNotes = () =>{
        try{
            retrieveNotes(sessionStorage.token, (error, notes)=>{
                if (error){
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }
                this.setState({notes})
            })
        }catch (error){
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    handleAddClick = () =>{
        debugger
        try {
            createNote(sessionStorage.token, error =>{
                if (error){
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }
                this.loadNotes()
            })
        } catch (error){
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    handleUpdateNote = (noteId, text)=>{

        try{
            updateNote (sessionStorage.token, noteId, text, error =>{
                if (error){
                    alert (error.message)

                    this.logger.warn(error.message)

                    return
                }
            })
        }catch (error){
            alert (error.message)

            this.logger.warn(error.message)
        }
    }

    handleDeleteNote = noteId =>{
        try {
            deleteNote (sessionStorage.token, noteId, error =>{
                if (error){
                    alert (error.message)

                    this,logger.warn(error.message)

                    return
                }

                this.loadNotes()
            })
        } catch (error){
            alert (error.message)

            this.logger.warn (error.message)
        }
    }
    handleSettingsClick = () => {
        this.setState({ view: 'settings' })

        this.loadNotes()
    }
    handleInfoCLick = () =>{
        this.setState({view: 'info'})
        this.loadNotes()
        
    }

    handleSettingsCloseClick = () => this.setState({ view: 'list' })
    handleInfoCloseCLick = () => this.setState({view: 'list'})


    render() {
        this.logger.info('render')

        const {
            state: { name, view, notes },
            props: { onLogoutClick },
            handleSettingsClick,
            handleUpdateNote,
            handleDeleteNote,
            handleSettingsCloseClick,
            handleAddClick, 
            handleInfoCloseCLick
        } = this

        return name ?
        <div className="home-page page container--full container--distributed">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

        <main className="main">
            {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
            {view === 'settings' && <Settings onCloseClick={handleSettingsCloseClick}/>}
            {view === 'info' &&<Info onCloseClick={handleInfoCloseCLick}/>}
        </main> 

        <footer className="footer">
            {view === 'list'&& <button className="add-button transparent-button" onClick={handleAddClick}>+</button>}
        </footer>
    </div>
    :
    null
    }  

}


