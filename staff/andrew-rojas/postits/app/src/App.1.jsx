import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Feedback from './components/Feedback'
import Loggito from './utils/Loggito.js'
import Context from './utils/Context'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'

  function App() {
    const logger =  new Loggito('App')

    const [feedback, setFeedback] = useState({ message: null, level: null})
    const navigate = useNavigate()

    const handleNavigationToRegister = () => {
      navigate('register')

      logger.debug('setView', 'register')
    }

    const handleNavigationToLogin = () => {
      navigate('login')

      logger.debug('setView', 'login')
    }

    const handleNavigationToHome = () => {
      navigate('home')

      logger.debug('setView', 'home')
    }

    const handleLogoutClick = () => {
      delete sessionStorage.token

      handleNavigationToLogin()
    }

    const handleAcceptFeedback = () => {
      const feedback = { message: null, level: null}

      setFeedback(feedback)

      logger.debug( 'setFeedback', feedback)
    }

    const handleFeedback = feedback => {
      setFeedback (feedback)

      logger.debug('setFeedback', feedback)
    }

    logger.info('return')

    const toggleTheme = () => {document.documentElement.classList.toggle('light')}

    return <Context.Provider value={{ handleFeedback, toggleTheme }}>
    <div className="App App--dark container container--full"> 
    <Routes>     
      <Route path="login" element={<LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
      <Route path="register" element={<RegisterPage onLinkClick={handleNavigationToLogin} />} />
      <Route path="home" element={<HomePage onLogoutClick={handleLogoutClick} />} />
    </Routes>

      {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
    </div>
  </Context.Provider>
}

export default App