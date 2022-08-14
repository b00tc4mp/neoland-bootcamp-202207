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

        return this.state.name ?
            <div className="container home_page ">
                <Header name={this.state.name} onLogoutClick={this.props.onLogoutClick} onSettingsClick={this.handleSettingsClick} view={this.state.view} />

                <main className="main_home">
                    {this.state.view === 'list' && <NoteList notes={this.state.notes} onUpdateNote={this.handleUpdateNote} onDeleteNote={this.handleDeleteNote} />}
                    {this.state.view === 'newNote' && <NewNoteForm onArrowLeft={this.handleArrowLeftClick} onCloseClick={this.handleReturnNoteList} />}
                    {this.state.view === 'settings' && <Settings  onCloseClick={this.handleReturnNoteList} email={this.state.email} />}
                </main>

                <footer className="footer_home">
                    {this.state.view === 'list' && <div className="btn_plus" onClick={this.handleAddClick}>
                        <span className="material-symbols-outlined add">add</span>
                    </div>}

                </footer>
            </div>
            :
            null
    }
}