// const { useState, useEffect } = React
import {useState,useEffect} from 'react'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import createNote from '../logic/createNote'
import updateNote from '../logic/updateNote'
import deleteNote from '../logic/deleteNote'
import Header from '../components/Header'
import NoteList from '../components/NoteList'
import NewNoteForm from '../components/NewNoteForm'
import Settings from '../components/Settings'
import Context from '../utils/Context'
import { useContext } from 'react'

function HomePage({ onLogoutClick }) {
    const {handleFeedback} = useContext(Context)

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
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)
                    onLogoutClick()
                    return
                }
                setName(user.name)
                setEmail(user.email)

                logger.debug('setName' , user.name)
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
                // setState({ notes, view: 'list' })
                setNotes(notes)
                logger.debug('setNotes', notes)
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error' })

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
                    handleFeedback({ message: error.message, level: 'error' })

                    return
                }
                loadNotes()
                setView('list')
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
                    return
                }
                //agregado abajo en handleSettingsClick
                // loadNotes()
            })
        } catch (error) {
            handleFeedback({ message: error.message, level: 'error'})

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

    const handleReturnNoteList = () => {
        // loadNotes()
        setView('list')

        logger.debug('setView', 'list')
    }

    const handleUpdateName = (newName) => setName(newName)
    const handleUpdateEmail = (newEmail) => setEmail(newEmail)

    logger.info('return')

    return name ?
        <div className="container home_page ">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} view={view} />

            <main className="main_home">
                {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
                {view === 'newNote' && <NewNoteForm onArrowLeft={handleArrowLeftClick} onCloseClick={handleReturnNoteList} />}
                {view === 'settings' && <Settings onCloseClick={handleReturnNoteList} email={email} onUpdateEmail={handleUpdateEmail} onUpdateName={handleUpdateName}/>}
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
export default HomePage