import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Feedback from './components/Feedback'
import Loggito from './utils/Loggito'
import Context from './utils/Context'
import './App.css'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {
    const logger = new Loggito ('App')

    const [feedback, setFeedback] = useState({message: null,  level: null })
    const navigate = useNavigate()

    const handleNavigationToRegister = () => {
        navigate('register')
        // setView('register') <-- Forma de visualizar con react sin router
        logger.debug('navigate to register')
    }

    const handleNavigationToLogin = () => {
        navigate('login')
        // setView('login')
        logger.debug('navigate to login')
    }

    const handleNavigationToHome = () => {
        navigate('/')
        // setView('home')
        logger.debug('navigate to home')
    }

    const handleLogoutClick = () => {
        delete sessionStorage.token

        handleNavigationToLogin()
   }

   const handleAcceptFeedback = () => {
    const feedback = { message: null, level: null}

    setFeedback(feedback)

    logger.debug('setFeedback', feedback)
   }

   const handleFeedback = feedback => {
    setFeedback(feedback)

    logger.debug('setFeedback', feedback)
   }
   
   logger.info('return')

   const toggleTheme = () => document.documentElement.classList.toggle('light')


    return <Context.Provider value={{ handleFeedback, toggleTheme}}>
        <Routes>
            <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
            <Route path="register" element={<RegisterPage onLinkClick={handleNavigationToLogin} />} />
            <Route path="/*" element={sessionStorage.token? <HomePage onLogoutClick={handleLogoutClick} /> : <Navigate to='login'/>} />
           
        </Routes>
            {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
    </Context.Provider>

       
}

export default App



