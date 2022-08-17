const { useState, useEffect, useRef } = React


function HomePage({onLogout, onFeedback}) {
    const [view, setView] = useState('list')
    const [name, setName] = useState('null')
    const [notes, setNotes] = useState(null)
    const [popUp, setPopUp] = useState(null)

    const myComponentRef = useRef()

    const logger = new Loggito('HomePage')

    useEffect(() => {
        logger.info('"componentDidMount"')

        try {
            retrieveUser(sessionStorage.UserToken, (error, user) => {
                if (error) {
                    onFeedback({level: "error", message: error.message})
                    logger.warn(error.message)
                    return
                }

                setName(user.name)

                logger.debug('setName', user.name)
            })

        } catch (error) {
            onFeedback({level: "error", message: error.message})
            logger.warn(error.message)
        }

        loadNotes()
      }, []);
    

    const loadNotes = () => {

        try {
            retrieveNotes(sessionStorage.UserToken, (error, notes) => {
                if (error) {
                    onFeedback({level: "error", message: error.message})
                    logger.warn(error.message)

                    return
                }

                setNotes(notes)
                
               
                logger.debug('setNotes' , notes )
            })
        } catch (error) {
            onFeedback({level: "error", message: error.message})
            logger.warn(error.message)
        }
    }

    const handleChangeColorNote = (notes) => {
        
        setNotes(notes)
        logger.debug('setNotes' , notes )
    }

    const handleUpdateNote = (noteId, title, text) => {
        try {
            updateNote(sessionStorage.UserToken, noteId, title, text, error => {
                if (error) {
                    onFeedback({level: "error", message: error.message})
                    logger.warn(error.message)

                    return
                }
            })
        } catch (error) {
            onFeedback({level: "error", message: error.message})
            logger.warn(error.message)
        }
    }

    const handleDeleteNote = (noteId) => {
        let result = confirm('Are you sure to delete that note?')
        if (result) {
            try {
                deleteNote(sessionStorage.UserToken, noteId, error => {
                    if (error) {
                        onFeedback({level: "error", message: error.message})
                        logger.warn(error.message)

                        return
                    }

                    loadNotes()

                })
            } catch (error) {
                onFeedback({level: "error", message: error.message})
                logger.warn(error.message)
            }
        }
    }

    const handleLogout = () => {
        const result = confirm('Are you sure to Log Out?')
        if (result)
            onLogout()
        else return

    }

    const handleAddClick = () => {
        setPopUp('newNote')

        logger.debug('setPopUp', 'newNote')
    }

    const handleSubmitNewNote = (title, text) => {
        try {
            createNote(sessionStorage.UserToken, title, text, (error) => {
                if (error) {
                    onFeedback({level: "error", message: error.message})
                    logger.warn(error.message)

                    return
                }

                setPopUp(null)

                logger.debug('setPopUp', null)

                loadNotes()

            })
        } catch (error) {
            onFeedback({level: "error", message: error.message})
            logger.warn(error.message)
        }
    }

    const handleCancelNewNote = () => {
        let result = confirm('Are you sure to cancel note creation?')

        if (result) {
            setPopUp(null)
            logger.debug('setPopUp', null)
        } else return
    }

    const handleProfileClick = () => {
        if(view !== 'profile'){
            setView('profile')

            logger.debug('setView', 'profile')
        }
    }

    const handleHomeClick = () => {
        if(view !== 'list'){
            setView('list')
            logger.debug('setView', 'list')
        }
        
        if (myComponentRef.current) {
            // handleScroll is a method from my Child (List panel) which I invoke by ref
            myComponentRef.current.handleScroll()
        } 
    }

    if (name)
        return (
            <>
                {popUp === 'newNote' &&
                    <NewNotePopUp onNewNoteSubmit={handleSubmitNewNote} onCancelNewNote={handleCancelNewNote} />
                }
                <main className="page homePage">
                    <Header name={name} onLogout={handleLogout} onProfileClick={handleProfileClick} onHomeClick={handleHomeClick} />

                    {view === 'list' &&
                        <ListPanel notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} onChangeColorNote={handleChangeColorNote} ref={myComponentRef} />}
                    {view === 'profile' &&
                        <ProfileMenu onFeedback={onFeedback}/>}
                    <section className="bottomMenu">
                        {view === 'list' && <button className="newNoteButton"><span className="newNoteEmoji" onClick={handleAddClick}>📝</span></button>
                        }

                    </section>
                </main>
            </>
        )
}