import './HomePage.css'
import './pages.css'
import logoAnimado from '../images/logoAnimado.gif'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Settings from '../components/Settings'
import Recipes from '../components/Recipes'
import Loggito from '../utils/loggito'


function HomePage({ onLogoutClick }) {
    const navigate = useNavigate()
    const logger = new Loggito('HomePage')

    const handleLinkClick = event => {
        event.preventDefault()

        onLogoutClick()
    }

    const handleNavigationSettings = event => {
        event.preventDefault()

        navigate('settings')

        logger.debug('navigate to settings')
    }

    const handleNavigationRecipes = event => {
        event.preventDefault()

        navigate('recipes')

        logger.debug('navigate to recipes')
    }

    const handleNavigationHome = event => {
        event.preventDefault()

        navigate('/')

        logger.debug('navigate to home')
    }

    return sessionStorage.token ?
        <div className="page homePage">
            <header className="header homeHeader">
                <img className="logo headerLogo" alt="logo" src={logoAnimado} />
                <div className="theme headerTheme"></div>

            </header>

            <Routes>
                <Route path="/" element={
                    <>
                        <main className="homeMenu">
                            <button className='menuOption optionMenus'>Mis menus </button>
                            <button className='menuOption optionRecipes' onClick={handleNavigationRecipes}> Mis recetas </button>
                            <button className='menuOption optionProfile' onClick={handleNavigationSettings}>Perfil </button>
                        </main>
                    </>} />

                <Route path="settings" element={<div className="settingsPage">
                    <main className="settingsMenu">
                        <Settings onLogoutClick={handleLinkClick} />
                    </main>
                    <footer className="footer">
                        <button className='homeButton' onClick={handleNavigationHome}>Home</button>
                    </footer>
                </div>} />

                <Route path="recipes" element={<div className="recipesPage">
                    <main className="recipesMenu">
                        <Recipes />
                    </main>
                    <footer className="footer">
                        <button className='transparentButton homeButton' onClick={handleNavigationHome}>Home</button>
                    </footer>
                </div>} />
            </Routes>

        </div >

        : null
}

export default HomePage
