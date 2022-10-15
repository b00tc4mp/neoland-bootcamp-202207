import Header from "../components/Header";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Search from ".";
import Login from "./Login"
import Register from "./Register"
import Settings from "./Settingns"

function Home() {
  const navigate = useNavigate();

  function handleSearchClick() {
    navigate("search");
  }


  function handleLoginClick() {
    navigate("login");
  }

  function handleSettingsClick() {
    navigate("settings");
  }

  function handleRegisterClick() {
    navigate("register");
  }

  function handleHomeClick () {
    navigate('/')
}

         return (
<div>
            <Header onHomeClick={handleHomeClick} onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} onSearchClick={handleSearchClick} onSettingsClick={handleSettingsClick} />
          {/* <Routes>

            <Route path="/" element={<Home/>}>
            <Route path="settings" element={<Settings/>}>
            <Route path="login" element={<Login/>}>
            <Route path="register" element={<Register/>}>
            <Route path="search" element={<Search/>}>
        
          </Routes> */}
          </div>
        )
    }
    
  export default Home
    
