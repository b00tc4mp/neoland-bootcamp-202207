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
import { Routes, Route, useNavigate } from 'react-router-dom'

function HomePage({ onLogoutClick, context: { handleFeedback } }) {

    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const navigate = useNavigate()
    
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
        navigate('settings')

        logger.debug('navigate to settings')

        loadNotes()
    }

    const handleHomeClick = () => {

        navigate('/')

   

        logger.debug('navigate to list')
    }

    logger.info('render')

    return name ?
        <div className="home-page page">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} />

            <Routes>
                <Route path="/" element={
                    <>
                        <main className="notes-page page">
                            <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />
                        </main>
                        <footer className="homefooter">
                            <button className="addnote" onClick={handleAddClick}><span className="addnote--span material-symbols-outlined ">note_add</span></button>
                        </footer>
                    </>} />

                <Route path="settings" element={
                    <>
                        <main className="settings-page page">
                            <Settings />
                        </main>
                        <footer className="homefooter">
                            <a className="anchor home-link" onClick={handleHomeClick}><span className="homeButton material-symbols-outlined">home</span></a>
                        </footer>
                    </>} />
            </Routes>
        </div>
        : null
}

export default withContext(HomePage)
