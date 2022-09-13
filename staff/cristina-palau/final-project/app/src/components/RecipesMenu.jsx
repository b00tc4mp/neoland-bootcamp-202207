import { useState, useEffect } from 'react'
import Loggito from '../utils/loggito'
import './RecipesMenu.sass'
import NewRecipe from './NewRecipe'
import MyRecipesList from './MyRecipesList'
import PublicRecipesList from './PublicRecipesList'
import { Routes, Route, useNavigate } from 'react-router-dom'
import retrieveUserRecipes from '../logic/retrieveUserRecipes'
import retrieveUser from '../logic/retrieveUserRecipes'
import retrievePublicRecipes from '../logic/retrievePublicRecipes'
import deleteRecipe from '../logic/deleteRecipe'

function RecipesMenu() {
    const logger = new Loggito('Recipes')

    logger.info('render')

    const [userRecipes, setUserRecipes] = useState(null)
    const [publicRecipes, setPublicRecipes] = useState(null)
    const navigate = useNavigate()

    useEffect(() => { // override
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }
            })
        } catch (error) {

            logger.warn(error.message)
        }
        loadUserRecipes()
        loadPublicRecipes()
    }, [])

    const loadUserRecipes = () => {
        try {
            retrieveUserRecipes(sessionStorage.token, (error, userRecipes) => {
                if (error) {


                    logger.warn(error.message)

                    return
                }
                setUserRecipes(userRecipes)

                logger.debug('setUserRecipes', userRecipes)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }

    const loadPublicRecipes = () => {
        try {
            retrievePublicRecipes(sessionStorage.token, (error, publicRecipes) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                setPublicRecipes(publicRecipes)

                logger.debug('setPublicRecipes', publicRecipes)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }

    const handleDeleteRecipe = recipeId => {
        try {
            deleteRecipe(sessionStorage.token, recipeId, error => {
                if (error) {
                    // handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)

                    return
                }

                loadUserRecipes()
            })
        } catch (error) {

            // handleFeedback({ message: error.message, level: 'error' })

            logger.warn(error.message)
        }
    }

    const handleReloadPublicRecipes = event => {
        event.preventDefault()

        loadPublicRecipes()
    }

    const handleNavigationNewRecipe = event => {
        event.preventDefault()

        navigate('newrecipe')

        logger.debug('navigate to new recipe')
    }

    const handleNavigationRecipes = () => {

        navigate('/recipes')

        logger.debug('navigate to recipes')
    }

    return <Routes>
        <Route path="/" element={<>
            <MyRecipesList recipes={userRecipes} onDeleteRecipe={handleDeleteRecipe} />

            <PublicRecipesList recipes={publicRecipes} reloadPublicRecipes={handleReloadPublicRecipes} />

            <div className="addRecipe">
                <button className="addRecipe__button transparentButton" onClick={handleNavigationNewRecipe}>Añadir nueva receta +</button>
            </div>
        </>} />
        <Route path="newrecipe" element={<>
            <NewRecipe onBackClick={handleNavigationRecipes} />
        </>} />
    </Routes>
}
export default RecipesMenu