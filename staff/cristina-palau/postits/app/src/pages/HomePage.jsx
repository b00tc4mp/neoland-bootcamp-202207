import { useState, useEffect } from 'react'
import Loggito from '../utils/loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import createNote from '../logic/createNote'
import updateNote from '../logic/updateNote'
import deleteNote from '../logic/deleteNote'
import Settings from '../components/Settings'
import NoteList from '../components/NoteList'
import Header from '../components/Header'
import withContext from '../utils/withContext'

function HomePage({ onLogoutClick, context: { handleFeedback }}) {

    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [view, setView] = useState('list')

    useEffect(() => { // override
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                setName(user.name)

            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }

        loadNotes()
    }, [])

    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                setNotes(notes)

                logger.debug('setNotes', notes)
            })
        } catch (error) {

            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleAddClick = () => {
        try {
            createNote(sessionStorage.token, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                loadNotes()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleUpdateNote = (noteId, text) => {
        try {
            updateNote(sessionStorage.token, noteId, text, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    this.logger.warn(error.message)

                    return
                }
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                loadNotes()
            })

        } catch (error) {
            
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleSettingsClick = () => {
        setView('settings')

        logger.debug('setView', 'settings')

        loadNotes()
    }

    const handleHomeClick = () => {

        setView('list')

        logger.debug('setView', 'list')
    }

    logger.info('render')

    return name ?
        <div className="home-page page">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

            {view === 'list' &&
                <>
                    <main className="notes-page page">
                        <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
                    </main>
                    <footer className="homefooter">
                        <button className="addnote" onClick={handleAddClick}><span className="addnote--span material-symbols-outlined ">note_add</span></button>
                    </footer>
                </>
            }
            {view === 'settings' &&
                <>
                    <main className="settings-page page">
                        <Settings/>
                    </main>
                    <footer className="homefooter">
                        <a className="anchor home-link" onClick={handleHomeClick}><span className="homeButton material-symbols-outlined">home</span></a>
                    </footer>
                </>
            }
        </div>
        : null
}

export default withContext(HomePage)
