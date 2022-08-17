const { useState, useEffect } = React

function HomePage({ onLogoutClick, onFeedback }) {

    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [notes, setNotes] = useState(null)
    const [view, setView] = useState('list')

    useEffect(() => {
        logger.info('"componentDidMount"')
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    onFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)
                    onLogoutClick()
                    return
                }
                setName(user.name)
                setEmail(user.email)

                logger.debug('setName' , user.name)
            })
        } catch (error) {
            onFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
        loadNotes()
    }, [])

    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    onFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)
                    return
                }
                // setState({ notes, view: 'list' })
                setNotes(notes)
                logger.debug('setNotes', notes)
            })
        } catch (error) {
            onFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }


    const handleAddClick = () => {
        setView('newNote')
    }

    const handleArrowLeftClick = (newText) => {//onFormCreateNote
        try {
            createNote(sessionStorage.token, newText, error => {
                if (error) {
                    onFeedback({ message: error.message, level: 'error' })

                    return
                }
                loadNotes()
                setView('list')
            })

        } catch (error) {
            onFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }


    const handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
                if (error) {
                    onFeedback({ message: error.message, level: 'error' })
                    return
                }
                //agregado abajo en handleSettingsClick
                // loadNotes()
            })
        } catch (error) {
            onFeedback({ message: error.message, level: 'error'})

            logger.warn(error.message)
        }
    }

    const handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
                    onFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)
                    return
                }
                loadNotes()
            })
        } catch (error) {
            onFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleSettingsClick = () => {

        setView('settings')

        logger.debug('setView', 'settings')

        loadNotes()
    }

    const handleReturnNoteList = () => {
        // loadNotes()
        setView('list')

        logger.debug('setView', 'list')
    }

    const handleUpdateName = (newName) => setName(newName)
    const handleUpdateEmail = (newEmail) => setEmail(newEmail)

    logger.info('render')

    return name ?
        <div className="container home_page ">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

            <main className="main_home">
                {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
                {view === 'newNote' && <NewNoteForm onArrowLeft={handleArrowLeftClick} onCloseClick={handleReturnNoteList} onFeedback={onFeedback}/>}
                {view === 'settings' && <Settings onCloseClick={handleReturnNoteList} email={email} onUpdateEmail={handleUpdateEmail} onFeedback={onFeedback} onUpdateName={handleUpdateName}/>}
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
