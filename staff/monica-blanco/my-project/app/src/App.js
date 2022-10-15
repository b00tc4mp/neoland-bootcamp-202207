import './index.css'
import Home from './Pages/Home'
import Search from './Pages/Search'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Settings from './Pages/Settingns'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'


function App () {
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
        <div class="bg-sky-500/100 ...">
        <Routes>
          <Route path='search' element={ <Search onLinkClick={handleNavigationToSearch}/>} />
          <Route path='login' element={<Login onLinkClick={handleNavigationToLogin}/>}/>
          <Route path='register' element={<Register onLinkClick={handleNavigationToRegister} />}/>
          <Route path='settings' element={<Settings onLinkClick={handleNavigationToSettings}/>}/>
          <Route path='/*' element={<Home/>} />
        </Routes>
        </div>
  )
}

export default App

