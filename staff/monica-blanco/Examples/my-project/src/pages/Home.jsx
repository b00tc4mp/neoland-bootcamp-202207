import { Routes, Route, useNavigate} from "react-router-dom";
import Search from "./Search";
import Login from "./Login";
import Register from "./Register";
import Settings from "./Settings"
import Saludation from "../components/Saludation"
import Header from "../components/Header"
import React from "react";



function HomePage (){

    const navigate = useNavigate()

    const handleSettingsClick = () => {
        navigate('settings')
      }

    
  const handleSearchClick = () => {
    navigate("search");
  }


  const handleLoginClick = () => {
    navigate("login");
  }

  const handleRegisterClick = () => {
    navigate("register");
  }

  const handleHomeClick = () => {
    navigate('/')
}

    return (
        <div>
        <Header onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} onSettingsClick={handleSettingsClick} onSearchClick={handleSearchClick} onHomeClick={handleHomeClick}/>
        <Routes>
            <Route path="/" element={<Saludation/>}/>
            <Route path="settings" element={<Settings/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="search" element={<Search/>}/>
          </Routes> 
          </div>
    )

}
export default HomePage