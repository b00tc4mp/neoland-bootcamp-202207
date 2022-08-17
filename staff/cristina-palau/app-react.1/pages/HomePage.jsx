class HomePage extends Component {
    constructor() {
        super()

        this.state = { name: null, notes: null, view: 'list' }
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

    loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ notes })
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    handleAddClick = () => {
        try {
            createNote(sessionStorage.token, error => {
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

    handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
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


    handleSettingsClick = () => {
        this.setState({ view: 'settings' })

        this.loadNotes()
    }

    handleHomeClick = () => this.setState({ view: 'list' })

    render() {
        this.logger.info('render')
        const {
            state: { name, view, notes },
            props: { onLogoutClick },
            handleAddClick,
            handleDeleteNote,
            handleUpdateNote,
            handleSettingsClick,
            handleUpdatePassword,
            handleHomeClick,
            handleUpdateEmail
        } = this

        return name ?
            <div className="home-page page">
                <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view}/>

                {view === 'list' &&
                    <>
                        <main className="notes-page">
                            <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
                        </main>
                        <footer className="homefooter">
                            <button className="addnote" onClick={handleAddClick}>✏️</button>
                        </footer>
                    </>}

                {view === 'settings' &&
                    <> 
                        <main className="notes-page">
                            <Settings onUpdatePassword={handleUpdatePassword} onUpdateEmail={handleUpdateEmail} />
                        </main>
                        <footer className="homefooter">
                            <a className="anchor home-button" onClick={handleHomeClick}>🏠️</a>
                        </footer>
                    </>}

            </div>
            : null
    }
}