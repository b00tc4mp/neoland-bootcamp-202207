import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Feedback from './components/Feedback'
import Loggito from './utils/Loggito.js'

function App () {
    const logger = new Loggito('App')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [feedback, setFeedback] = useState({ message: null, level: null })

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

    const handleLogoutClick = () => {
        delete sessionStorage.token

        handleNavigationToLogin()
    }
    const handleAcceptFeedback = () => {
        const feedback = { message: null, level: null }

        setFeedback(feedback)

        logger.debug('setFeedback', feedback)
    }

    const handleFeedback = feedback => {
        setFeedback(feedback)

        logger.debug('setFeedback', feedback)
    }
    logger.info('return')

    return <>

        {view === 'login'&& <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} onFeedback={handleFeedback} />}
        {view === 'register' && <RegisterPage onLinkClick={handleNavigationToLogin} onFeedback={handleFeedback} />}
        {view === 'home'&& <HomePage onLogoutClick={handleLogoutClick} onFeedback={handleFeedback} />}

        {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
    </>
}
export default App



