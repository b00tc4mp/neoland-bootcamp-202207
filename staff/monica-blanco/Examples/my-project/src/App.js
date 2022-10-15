import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Search from './pages/Search' 
import Settings from './pages/Settings'

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleNavigationToRegister = () => {
    navigate('register')
  
  }
  const handleNavigationToLogin = () => {
  navigate('login')
  
  }
  const handleNavigationToSettings = () => {
  navigate('settings')
  
  }
  const handleNavigationToSearch = () => {
  navigate('search')
  
  }
  const handleNavigationToHome = () => {
  navigate('/')
  
  }

  return (
    <div>
    <Routes>
    <Route path='search' element={ <Search/>} />
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register />}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='/*' element={<Home/>} />
  </Routes>
  </div>
  )
}
export default App
