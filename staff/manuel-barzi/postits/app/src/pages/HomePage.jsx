import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import createNote from '../logic/createNote'
import updateNoteText from '../logic/updateNoteText'
import deleteNote from '../logic/deleteNote'
import Settings from '../components/Settings'
import NoteList from '../components/NoteList'
import Header from '../components/Header'
import withContext from '../utils/withContext'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { searchNotes } from '../logic'

function HomePage({ onLogoutClick, context: { handleFeedback } }) {
    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const [query, setQuery] = useState(null)

    useEffect(() => {
        logger.info('"componentDidMount"')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    onLogoutClick()

                    return
                }

                setName(user.name)

                logger.debug('setName', user.name)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }

        loadNotes()
    }, [])

    useEffect(() => {
        logger.info('on query changed')

        loadNotes()
    }, [query])

    const loadNotes = () => {
        try {
            if (!query)
                retrieveNotes(sessionStorage.token, (error, notes) => {
                    if (error) {
                        handleFeedback({ message: error.message, level: 'error' })

                        logger.warn(error.message)

                        return
                    }

                    setNotes(notes)

                    logger.debug('setNotes', notes)
                })
            else
                searchNotes(sessionStorage.token, query, (error, notes) => {
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

                setQuery(null)

                loadNotes()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleUpdateNoteText = (noteId, text) => {
        try {
            updateNoteText(sessionStorage.token, noteId, text, error => {
                if (error) {
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

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

    const handleSettingsCloseClick = () => {
        navigate('/')

        logger.debug('navigate to list')
    }

    const handleSearch = query => setQuery(query)

    logger.info('return')

    return name ?
        <div className="home-page container container--full container--distributed">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} onSearch={handleSearch} />

            <main className="main">
                <Routes>
                    <Route path="/" element={<NoteList notes={notes} onUpdateNoteText={handleUpdateNoteText} onDeleteNote={handleDeleteNote} />} />
                    <Route path="settings" element={<Settings onCloseClick={handleSettingsCloseClick} />} />
                </Routes>
            </main>

            <footer className="footer">
                {location.pathname === '/' && <button className="transparent-button" onClick={handleAddClick}>+</button>}
            </footer>
        </div>
        :
        null
}

export default withContext(HomePage)