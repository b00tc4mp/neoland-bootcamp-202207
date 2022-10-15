import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import createNote from '../logic/createNote'
import updateNote from '../logic/updateNote'
import deleteNote from '../logic/deleteNote'
import Settings from '../components/Settings'
import Info from '../components/Info'
import NoteList from '../components/NoteList'
import Header from '../components/Header'
import withContext from '../utils/withContext'

function HomePage({onLogoutClick, context: { handleFeedback }}){
    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [view, setView] = useState('info')

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

    const loadNotes = () =>{
        try{
            retrieveNotes(sessionStorage.token, (error, notes)=>{
                if (error){
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }
                setNotes(notes)

                logger.debug('setNotes', notes)

            })
        }catch (error){
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleAddClick = () =>{
        try {
            createNote(sessionStorage.token, error =>{
                if (error){
                    handleFeedback({ message: error.message, level: 'error' })
                    logger.warn(error.message)

                    return
                }
                loadNotes()
            })
        } catch (error){
            handleFeedback({ message: error.message, level: 'error' })
            logger.warn(error.message)
        }
    }

    const handleUpdateNote = (noteId, text)=>{
        try{
            updateNote (sessionStorage.token, noteId, text, error =>{
                if (error){
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }
            })
        }catch (error){
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleDeleteNote = noteId =>{
        try {
            deleteNote (sessionStorage.token, noteId, error =>{
                if (error){
                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                loadNotes()
            })
        } catch (error){
            handleFeedback({ message: error.message, level: 'error' })

            logger.warn (error.message)
        }
    }

    const handleSettingsClick = () => {
        setView('settings')
        logger.debug('setView', 'settings')
        loadNotes()
    }

    const handleInfoClick = () =>{
        setView('info')
        logger.debug('setView', 'info')
        loadNotes()  
    }

    const handleSettingsCloseClick = () => {
        setView('list')
        logger.debug ('setView', 'list')
    }

    const handleInfoCloseCLick = () => {
        setView('list')
        logger.debug('setView', 'list')
    }

    logger.info('return')

    return name ?
        <div className="home-page container--full container--distributed">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} onInfoClick={handleInfoClick} view={view} />

        <main className="main">
            {view === 'list' && <NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} />}
            {view === 'settings' && <Settings onCloseClick={handleSettingsCloseClick} />}
            {view === 'info' &&<Info onCloseClick={handleInfoCloseCLick}/>}
        </main> 

        <footer className="footer">
            {view === 'list'&& <button className="add-button transparent-button" onClick={handleAddClick}>+</button>}
        </footer>
    </div>
    :
    null
}  
export default withContext(HomePage)


