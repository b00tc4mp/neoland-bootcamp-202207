import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import Modal from './components/Modal'
import Logger from './utils/logger'
import Context from './utils/Context'
import Hello from './components/Hello'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {
    const logger = new Logger(App.name) 

    // const [view, setView] = useState(sessionStorage.token ? 'home' : 'login')
    const navigate = useNavigate()
    const [modalContent, setModalContent] = useState({ message: null, title: null })

    const handleRegisterLinkClick = () => navigate('register')

    const handleLoginLinkClick = () => navigate('login')

    const handleRegisterFormSubmit = () => navigate('login')

    const handleLoginFormSubmit = () => navigate('/')

    const handleLogoutButtonClick = () => {
        delete sessionStorage.token

        handleLoginLinkClick() // navego a login

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
        <Routes>
            <Route path='login' element={sessionStorage.token ? <Navigate to='/' /> : <LoginPage onRegisterLinkClick={handleRegisterLinkClick} onLoginFormSubmit={handleLoginFormSubmit} modalAlert={handleModal} />} />
            <Route path='register' element={sessionStorage.token ? <Navigate to='/' /> : <RegisterPage onLoginLinkClick={handleLoginLinkClick} onRegisterFormSubmit={handleRegisterFormSubmit} modalAlert={handleModal} />} />
            <Route path='/*' element={sessionStorage.token ? <HomePage /> : <Navigate to='login' />} />
            <Route path='/hello/:to' element={<Hello />} /> {/* ejemplo para uso de params */}
        </Routes>
        {modalContent.message && <Modal onCloseButtonClick={handleModalClose} message={modalContent.message} title={modalContent.title} />}
        
        </Context.Provider>
}
// el context sirve para enviar al contexto global esas funciones dentro de value.
// cuando invoco un componente q las necesite, viene envuelto en una funcion withContext.js
// que le pasa esas funciones por props. Se accede a ellas con context: {funciones}
export default App