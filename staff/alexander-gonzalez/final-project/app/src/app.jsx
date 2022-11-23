import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Feedback from './components/Feedback'
import Loggito from './utils/Loggito'
import Context from './utils/Context'
import './App.css'
import { Routes, Route, useNavigate, Navigate, Router } from 'react-router-dom'
import Search from './components/Search'
import FavList from './components/FavList'



function App() {
    const logger = new Loggito('App')

    const [feedback, setFeedback] = useState({ message: null, level: null })
    const navigate = useNavigate()

    const handleNavigationToRegister = () => {
        navigate('register')

        logger.debug('navigate to register')
    }

    const handleNavigationToLogin = () => {
        navigate('login')

        logger.debug('navigate to login')
    }

    const handleNavigationToHome = () => {
        navigate('/')

        logger.debug('navigate to home')
    }

    const handleNavigationToSearch = () => {
        navigate('search')
    
        logger.debug('navigate to search')
    }

    const handleNavigationToFavorites = () => {
        navigate('favorites')
    
        logger.debug('navigate to favorites')
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

    logger.info('return')

    const toggleTheme = () => document.documentElement.classList.toggle('light')

 return <Context.Provider value={{ handleFeedback, toggleTheme }}>
        <div className="App App--dark container container--full">
            <Routes>
                <Route path="login" element={sessionStorage.token ? <Navigate to="/" /> : <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
                <Route path="register" element={sessionStorage.token ? <Navigate to="/" /> : <RegisterPage onLinkClick={handleNavigationToLogin} />} />
                 <Route path="/*" element={sessionStorage.token ? <HomePage onLogoutClick={handleLogoutClick} /> : <Navigate to="login"/>} />
                 <Route path="search" element={sessionStorage.token? <Navigate to ="search" /> :<Search onLinkClick={handleNavigationToSearch}/>} />
                 <Route path="favorites" element={sessionStorage.token? <Navigate to ="favorites" /> :<FavList onNavigationToFavorites={handleNavigationToFavorites} />} />
                
            </Routes>
           

            {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
        </div>
    </Context.Provider>
}

export default App
/**supuestamente  en App utilizamos tods aesta logica para hacer los pintados de cada lugar, tanto en login como
 * en home como tambien en Register, por ende aqui es dopnde utilizamos las aperturtas y los cierres ademanas de renderizar los estados
 * dependiendo de si sale error o acierto
 */