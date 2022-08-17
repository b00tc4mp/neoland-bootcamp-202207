import {useState} from "react"
import Feedback from './components/Feedback'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

import Loggito from './utils/loggito'

function App() {
   
    const logger = new Loggito('App')

    const [view, setView] = useState(sessionStorage.UserToken ? 'home' : 'login')
    const [feedback, setFeedback] = useState({message: null, level: null})
    const handleNavigationToRegister = () => {
        setView('register')

        logger.debug('setView', 'register')
    }

    const handleNavigationToLogin = () => {
        setView('login')

        logger.debug('setView', 'login')
    }

    const handleNavigationToHome = () => {
        setView('home')

        logger.debug('setView', 'home')
    }

    const handleLogout = () => {
        sessionStorage.removeItem('UserToken')
        
        handleNavigationToLogin()
    }

    const handleFeedback = feedback => {
        setFeedback(feedback)
       /*  setTimeout(() => {
            setFeedback({message: null, level: null})
        },3990) */
        logger.debug('setFeedback', feedback)
    }

    const handleAcceptFeedback = () => {
        const feedback = {message: null, level: null}

        setFeedback(feedback)

        logger.debug('Set Feedback', feedback)
    }

    logger.info('render')

    return <>
    
    {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}

    {view === 'login' && <LoginPage onLinkClick={handleNavigationToRegister} onLogin={handleNavigationToHome} onFeedback={handleFeedback} />}

    {view === 'register' && <RegisterPage navigateLogin={handleNavigationToLogin} />}
    
    {view === 'home' && <HomePage onLogout={handleLogout} onFeedback={handleFeedback} />}

    
    </>
}

export default App