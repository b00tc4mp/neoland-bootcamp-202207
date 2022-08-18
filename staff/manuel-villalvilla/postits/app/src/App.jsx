import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Modal from './components/Modal'
import Logger from './utils/logger'
import Context from './utils/Context'

function App() {
    const logger = new Logger(App.name) 

    const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const [modalContent, setModalContent] = useState({ message: null, title: null })

    const handleRegisterLinkClick = () => setView('register')

    const handleLoginLinkClick = () => setView('login')

    const handleRegisterFormSubmit = () => setView('login')

    const handleLoginFormSubmit = () => setView('home')

    const handleLogoutButtonClick = () => {
        delete sessionStorage.token

        handleLoginLinkClick() // cambio el view a login

        logger.debug('user logged out')
    }

    const handleModalClose = () => {
        const modalContent = { message: null, title: null }

        setModalContent(modalContent)
    }

    const handleModal = (title, message) => {
        setModalContent({ message, title })
    }

    logger.info('return')

    return <Context.Provider value={{handleLogoutButtonClick, handleModal}}>
        {view === 'login' && <LoginPage onRegisterLinkClick={handleRegisterLinkClick} onLoginFormSubmit={handleLoginFormSubmit} modalAlert={handleModal} />}
        {view === 'register' && <RegisterPage onLoginLinkClick={handleLoginLinkClick} onRegisterFormSubmit={handleRegisterFormSubmit} modalAlert={handleModal} />}
        {view === 'home' && <HomePage />}
        {modalContent.message && <Modal onCloseButtonClick={handleModalClose} message={modalContent.message} title={modalContent.title} />}
        </Context.Provider>
}
// el context sirve para enviar al contexto global esas funciones dentro de value
// cuando invoco un componente q las necesite, viene envuelto en una funcion withContext.js
// que le pasa esas funciones por props. Se accede a ellas con context: {funciones}
export default App