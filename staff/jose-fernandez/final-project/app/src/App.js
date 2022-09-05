import { useState } from 'react'
import Feedback from './components/Feedback'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Context from './utils/Context'

function App() {
    const navigate = useNavigate()

    const [feedback, setFeedback] = useState({ message: null, level: null })

    const handleNavigationToRegister = () => {
        navigate('register')
    }

    const handleNavigationToLogin = () => {
        navigate('login')
    }

    const handleNavigationToHome = () => {
        navigate('/')
    }

    const handleAcceptFeedback = () => {
        const feedback = { message: null, level: null }

        setFeedback(feedback)

    }

    const handleFeedback = feedback => {
        setFeedback(feedback)

    }


    return <Context.Provider value={{ handleFeedback }}>

        <div className="App container container--full container--width">
            <Routes>
                <Route path='login' element={sessionStorage.token ? <Navigate to="/" /> : <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />}/>

                <Route path='register' element={sessionStorage.token ? <Navigate to="/" /> : <RegisterPage onLinkClick={handleNavigationToLogin} onSingUp={handleNavigationToLogin} />} />

                <Route path='/*' element={<HomePage onLoginClick={handleNavigationToLogin}/> }/>

            </Routes>
            {feedback.message && <Feedback level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
        </div>
    </Context.Provider>
}

export default App
