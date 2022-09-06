import { useState } from 'react';
// import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage'
import FeedBack  from './components/Feedback';
import './App.css';
import Context from './utils/Context';
import Loggito from './utils/Loggito.js';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

function App() {
  const logger = new Loggito('App')

  const [feedback, setFeedback] = useState ({ message: null, level: null })

  const navigate = useNavigate()

  const handleNavigationToRegister = () => {
    navigate('register')

    logger.debug('navigate to register')
    }

  const handleNavigationToHome = () => {
    navigate('home')

    logger.debug('navigate to home')
  } 

  // const handleNavigationToLogin = () => {
  //   navigate('login')

  //   logger.debug('navigate to login')
  // }

  const handleAcceptFeedback = () => {
    const feedback = { message: null, level: null }

    setFeedback(feedback)

    logger.debug('setFeedback', feedback)
  }

  const handleFeedback = feedback => {
    setFeedback(feedback)

    logger.debug('setFeedback', feedback)
  }

  return <Context.Provider value={ handleFeedback }>
    <div className="App">
      <Routes>
       <Route path="login" element={sessionStorage.token ? <Navigate to="home" /> : <LoginPage onLinkClick={handleNavigationToRegister} onLogIn={handleNavigationToHome} />} />
       {/* <Route path="register" element={sessionStorage.token ? <Navigate to="home" /> : <RegisterPage onLinkClick={handleNavigationToLogin} />} /> */}
       {/* <Route path='/*' element={sessionStorage.token ? <HomePage onLogoutClick={handleLogoutClick} /> : <Navigate to="login" />} /> */}
      </Routes>

      {feedback.message && <FeedBack level={feedback.level} message={feedback.message} onClick={handleAcceptFeedback} />}
    </div>
  </Context.Provider>
}

export default App;
