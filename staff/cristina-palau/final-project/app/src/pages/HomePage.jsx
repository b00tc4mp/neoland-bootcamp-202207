import './HomePage.sass'
import './pages.sass'
import '../index.sass'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Settings from '../components/Settings'
import RecipesMenu from '../components/RecipesMenu'
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
        <div className="page page-homepage">
            <header className="header homeHeader">
                
                

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

                <Route path="settings" element={<>
                    <main className="settingsMenu">
                        <Settings onLogoutClick={handleLinkClick} />
                    </main>
                    <footer className="setingsFooter footer">
                    <a className="anchor" href="login-page.html" onClick={handleLinkClick}>Cerrar sesión</a>
                        <button className='transparentButton homeButton' onClick={handleNavigationHome}>Home</button>
                    </footer>
                </>} />

                <Route path="recipes/*" element={<div className="recipesPage">
                    <main className="recipesMenu">
                        <RecipesMenu />
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
