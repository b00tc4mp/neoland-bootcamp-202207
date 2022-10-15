import { useState, useEffect } from 'react'
import Loggito from '../utils/Loggito'
import retrieveUser from '../logic/retrieveUser'
import retrieveNotes from '../logic/retrieveNotes'
import createNote from '../logic/createNote'
import updateNote from '../logic/updateNote'
import deleteNote from '../logic/deleteNote'
import Settings from '../components/Settings'
import NoteList from '../components/NoteList'
import Header from '../components/Header'
import withContext from '../utils/withContext'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import changeNoteColor from '../logic/changeNotecolor'
import NoteColor from '../components/NoteColor'

function HomePage({onLogoutClick, onChangeNoteColor, context: { handleFeedback }}){
    const logger = new Loggito('HomePage')

    const [name, setName] = useState(null)
    const [noteSelected, setNoteSelected] = useState(null)
    const [notes, setNotes] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    let color = null

    useEffect(() => {
        logger.info('"componentDidMount"')
// recuperar usuario
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

    const handleNoteClick = (noteId) {
        setNoteSelected(noteId)
    }

    // carga de notas
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

    // cambio de color
    
        const handleChangeColor = (noteId, color, error) =>{
                try {
                    changeNoteColor(sessionStorage.token, notes, noteId, color,error, function (notes, noteId, color) { //noteId, color,
                        if (error)
                        handleFeedback({ message: error.message, level: 'error' })
                    })
                } catch (error) {
                    handleFeedback({ message: error.message, level: 'error' })
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
        navigate('settings')
        logger.debug('navigate to settings')
        loadNotes()
    }
    
    const handleSettingsCloseClick = () => {
        navigate('/')
        logger.debug ('navigate to list')
    }
    const handleHomeClick = () => {
        navigate ('/')
        logger.debug ('navigate to home')
    }

    logger.info('return')

    return name ?
        <div className="container container--full container--distributed">
            <Header name={name} onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick} onHomeClick={handleHomeClick}/>

        <main className="main">
            <Routes>
                <Route path="/" element={<NoteList notes={notes} onUpdateNote={handleUpdateNote} onDeleteNote={handleDeleteNote} onNoteClick={handleNoteClick}/>}/>
                <Route path="settings" element={<Settings onCloseClick={handleSettingsCloseClick} />}/>
            </Routes>
        </main> 

        <footer className="footer">
        {location.pathname === '/' && <button className="add-button transparent-button" onClick={handleAddClick}>+</button>}
        {location.pathname === '/' &&  <div className="changeNoteColorContainer">
                <div className="changeNoteBlue" onClick={handleChangeColor} ></div> 
                <div className="changeNotePink" onClick={handleChangeColor}></div>
            </div>}
        </footer>
    </div>
    :
    null
}  
export default withContext(HomePage)

{/* onClick= {()=> onChangeNoteColor (note, note.id, color) */}


