import './HomePage.sass'
import './pages.sass'
import '../index.sass'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Settings from '../components/Settings'
import RecipesMenu from '../components/RecipesMenu'
import ListsMenu from '../components/ListsMenu'
import Loggito from '../utils/loggito'
import { useState, useEffect } from 'react'
import retrieveUser from '../logic/retrieveUser'
import Header from '../components/Header'

function HomePage({ onLogoutClick }) {

    const [name, setName] = useState(null)

    const navigate = useNavigate()
    const logger = new Loggito('HomePage')


    useEffect(() => {
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                setName(user.name)
            })
        } catch (error) {

            logger.warn(error.message)
        }

    }, [])

    
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

    const handleNavigationLists = event => {
        event.preventDefault()

        navigate('lists')

        logger.debug('navigate to recipes')
    }

    const handleNavigationHome = event => {
        event.preventDefault()

        navigate('/')

        logger.debug('navigate to home')
    }

    return sessionStorage.token ?
        <div className="page page-homepage">
            <Routes>
                <Route path="/" element={
                    <>
                        <Header text={`Hey, ${name}!`} />
                        <main className="homeMenu">
                            <div className='menuOption optionRecipes'><button className='menuButton recipesButton' onClick={handleNavigationRecipes}> Mis recetas </button></div>
                            <div className='menuOption optionList'><button className='menuButton shopListButton' onClick={handleNavigationLists}>Mis listas </button> </div>
                            <div className='menuOption optionProfile'><button className='menuButton profileButton' onClick={handleNavigationSettings}>Perfil</button></div>
                        </main>
                    </>} />

                <Route path="settings" element={<>
                    <Header text="Mi perfil" />
                    <main className="settingsMenu">
                        <Settings onLogoutClick={handleLinkClick} onBackClick={handleNavigationHome}/>
                    </main>
                    <footer className="setingsFooter footer">
                        <a className="anchor" href="login-page.html" onClick={handleLinkClick}><span className="material-symbols-outlined">
                            logout</span></a>
                    </footer>
                </>} />

                <Route path="recipes/*" element={<>
                    <Header />
                    <div className="recipesPage">
                        <main className="recipesMenu">
                            <RecipesMenu onBackClick={handleNavigationHome} />
                        </main>
                    </div></>} />

                    <Route path="lists/*" element={<>
                    <Header />
                    <div className="recipesPage">
                        <main className="recipesMenu">
                            <ListsMenu onBackClick={handleNavigationHome} />
                        </main>
                    </div></>} />
            </Routes>
        </div >
        : null
}

export default HomePage
