import Logger from '../utils/logger'
import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import createNote from '../logic/createNote'
import deleteNote from '../logic/deleteNote'
import updateNote from '../logic/updateNote'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NoteList from '../components/NoteList'
import Settings from '../components/Settings'
import Spinner from '../components/Spinner'
import withContext from '../utils/withContext'

export default withContext(function HomePage({ context: { handleModal } }) {
    const logger = new Logger('HomePage')

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [view, setView] = useState('notes')

    useEffect(() => {
        logger.info('component did mount')
        try {

            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleModal('ERROR', error.message)
                    logger.warn(error.message)
                    return
                }

                setName(user.name)
                logger.info('setName')

            })

            loadNotes()

        } catch (error) {
            handleModal('ERROR', error.message)

            logger.error(error.message)
        }
    }, []) // aqui paso un array vacio para q actue como componentDidMount

    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    handleModal('ERROR', error.message)

                    logger.error(error.message)

                    return
                }

                setNotes(notes)
            })

        } catch (error) {
            handleModal('ERROR', error.message)

            logger.error(error.message)
        }
    }

    const handleAddNote = () => {
        try {
            createNote(sessionStorage.token, error => {
                if (error) {
                    handleModal('ERROR', error.message)

                    logger.error(error.message)

                    return
                }

                loadNotes()
            })

        } catch (error) {
            handleModal('ERROR', error.message)

            logger.error(error.message)
        }
    }

    const handleDeleteNoteClick = (noteId) => {
        try {
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
                    handleModal('ERROR', error.message)

                    return
                }

                loadNotes()
            })

        } catch (error) {
            handleModal('ERROR', error.message)

            logger.error(error.message)
        }
    }

    const handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
                if (error) {
                    handleModal('ERROR', error.message)

                    logger.error(error.message)

                    return
                }

                // si no hay error, no pongo ninguna accion porque no hay q actualizar el DOM
            })

        } catch (error) {
            handleModal('ERROR', error.message)

            logger.error(error.message)
        }
    }

    const handleSettingsClick = () => {
        setView('settings')
        
        loadNotes() // para cuando me vaya a settings, q se baje las notas y actualice el state
    }

    const handleNotesClick = () => {
        setView('notes')
    }

    logger.info('return')
    
    if (notes)
        return <div className="home-page">

            <Header name={name} onSettingsButtonClick={handleSettingsClick} 
            onNotesButtonClick={handleNotesClick}
            />

            {view === 'notes' && <>
                <main className="main">
                    <NoteList notes={notes} onDeleteClick={handleDeleteNoteClick}
                        onUpdateNote={handleUpdateNote}
                    />
                </main>
                <Footer onAddNote={handleAddNote} />
            </>}

            {view === 'settings' && <main className="main">
                <Settings />
            </main>}

        </div>
    else
        return <Spinner />
})