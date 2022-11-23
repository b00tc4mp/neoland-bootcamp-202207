import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Feedback from './components/Feedback'
import Loggito from './utils/Loggito.js'
import Context from './utils/Context'
import './App.css'


function App() {
    const logger = new Loggito('App')

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')// utilizamos ternario para el setView, 
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

    const handleAcceptFeedback = () => {// supuestamente mandamenos el mensaje y renderizamos el estado dependiendo del mensaje
        const feedback = { message: null, level: null }

        setFeedback(feedback)

        logger.debug('setFeedback', feedback)
    }

    const handleFeedback = feedback => {
        setFeedback(feedback)

        logger.debug('setFeedback', feedback)
    }

    logger.info('render')

    const toggleTheme = () => document.documentElement.classList.toggle('light')

    return <Context.Provider value ={{ handleFeedback, toggleTheme }}>
        <div className='App App--dark container container--full'>
        {view === 'login' && <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome}  />}

        {view === 'register' && <RegisterPage onLinkClick={handleNavigationToLogin}  onRegisterFormSubmit={handleNavigationToLogin} />}

        {view === 'home' && <HomePage onLogoutClick={handleLogoutClick}  />}

        {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
        </div>
    </Context.Provider>
}

export default App
/**supuestamente  en App utilizamos tods aesta logica para hacer los pintados de cada lugar, tanto en login como
 * en home como tambien en Register, por ende aqui es dopnde utilizamos las aperturtas y los cierres ademanas de renderizar los estados
 * dependiendo de si sale error o acierto
 */