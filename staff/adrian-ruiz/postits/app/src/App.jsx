import {useState} from "react"
import Feedback from './components/Feedback'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Context from "./utils/Context"
import Loggito from './utils/loggito'
import { Routes, Route, useNavigate, Navigate} from 'react-router-dom'

function App() {
   
    const logger = new Loggito('App')
    const navigate = useNavigate()

    const [feedback, setFeedback] = useState({message: null, level: null})
    const handleNavigationToRegister = () => {
        navigate('register')

        logger.debug('navigate -> register')
    }

    const handleNavigationToLogin = () => {
        navigate('login')

        logger.debug('navigate -> login')
    }

    const handleNavigationToHome = () => {
        navigate('/')

        logger.debug('navigate -> / (home)')
    }

    const handleLogout = () => {
        sessionStorage.removeItem('UserToken')
        
        handleNavigationToLogin()
    }

    const handleFeedback = feedback => {
        setFeedback(feedback)
        window.timer = setTimeout(() => {
            setFeedback({message: null, level: null})
        },3900)
        logger.debug('setFeedback', feedback)
    }

    const handleAcceptFeedback = () => {
        const feedback = {message: null, level: null}
        //Cancel feedback timer if clicked on accept
        clearTimeout(window.timer)
        setFeedback(feedback)

        logger.debug('Set Feedback', feedback)
    }

    logger.info('render')

    return <Context.Provider value={{handleFeedback}}>
    {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
    <Routes>
        <Route path='login' element={!(sessionStorage.UserToken) ?<LoginPage onLinkClick={handleNavigationToRegister} onLogin={handleNavigationToHome}/> : <Navigate to='/'/>}/>
        <Route path='register' element={!(sessionStorage.UserToken) ? <RegisterPage navigateLogin={handleNavigationToLogin} /> : <Navigate to='/' />}/>
        <Route path='/*' element={sessionStorage.UserToken ? <HomePage onLogout={handleLogout}/> : <Navigate to='login'/>} /> 
    </Routes>
    </Context.Provider>
}

export default App