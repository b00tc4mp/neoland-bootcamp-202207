class HomePage extends Component {
    constructor() {
        super()

        this.state = { name: null, email: null, notes: null, view:'list' }
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
                this.setState({ name: user.name ,email: user.email})
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
        this.loadNotes()
    }

    loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)
                    return
                }
                this.setState({ notes, view: 'list' })
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    
    handleAddClick = () => {
        this.setState({ view: 'newNote' })
    }

    handleArrowLeftClick = (newText) => {//onFormCreateNote
        try {
            createNote(sessionStorage.token, newText, error => {
                if (error) {
                    alert(error.message)

                    return
                }
                this.loadNotes()


            })

        } catch (error) {
            alert(error.message)
        }
    }


    handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
                if (error) {
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
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
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

    handleSettingsClick = () => this.setState({ view: 'settings' })

    handleReturnNoteList = () => this.setState({ view: 'list' })

    render() {
        this.logger.info('render')

        const{  
            state:{name,view,notes,email},
            props:{onLogoutClick},
            handleSettingsClick,
            handleUpdateNote,
            handleArrowLeftClick,
            handleReturnNoteList,
            handleDeleteNote,
            handleAddClick
        } = this

        return name ?
            <div className="container home_page ">
                <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

                <main className="main_home">
                    {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
                    {view === 'newNote' && <NewNoteForm onArrowLeft={handleArrowLeftClick} onCloseClick={handleReturnNoteList} />}
                    {view === 'settings' && <Settings  onCloseClick={handleReturnNoteList} email={email} />}
                </main>

                <footer className="footer_home">
                    {view === 'list' && <div className="btn_plus" onClick={handleAddClick}>
                        <span className="material-symbols-outlined add">add</span>
                    </div>}

                </footer>
            </div>
            :
            null
    }
}