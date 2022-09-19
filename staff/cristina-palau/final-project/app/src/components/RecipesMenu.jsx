import { useState, useEffect } from 'react'
import Loggito from '../utils/loggito'
import NewRecipe from './NewRecipe'
import MyRecipesList from './MyRecipesList'
import PublicRecipesList from './PublicRecipesList'
import PublicRecipe from './PublicRecipe'
import UserRecipe from './UserRecipe'
import { Routes, Route, useNavigate } from 'react-router-dom'
import retrieveUserRecipes from '../logic/retrieveUserRecipes'
import retrieveUser from '../logic/retrieveUserRecipes'
import retrievePublicRecipes from '../logic/retrievePublicRecipes'
import retrieveRecipe from '../logic/retrieveRecipe'
import deleteRecipe from '../logic/deleteRecipe'
import withContext from '../utils/withContext'

function RecipesMenu({ onBackClick, context: { reloadThePage } }) {
    const logger = new Loggito('Recipes')

    logger.info('render')

    const [userRecipes, setUserRecipes] = useState(null)
    const [publicRecipes, setPublicRecipes] = useState(null)
    const [recipe, setRecipe] = useState(null)

    const navigate = useNavigate()

    useEffect(() => { // override
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                loadUserRecipes(user)
                loadPublicRecipes(user)
            })
        } catch (error) {

            logger.warn(error.message)
        }


    }, [])

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

    const handleClickUserRecipe = recipeId => {
        try {
            retrieveRecipe(sessionStorage.token, recipeId, (error, recipe) => {


                if (error) {

                    logger.warn(error.message)

                    return
                }

                setRecipe(recipe)

                console.log(recipe)

                navigate(`myrecipes/${recipeId}`)
            })

        } catch (error) {

            logger.warn(error.message)
        }
    }

    const handleClickPublicRecipe = recipeId => {
        try {
            retrieveRecipe(sessionStorage.token, recipeId, (error, recipe) => {

                if (error) {

                    logger.warn(error.message)

                    return
                }

                setRecipe(recipe)

                navigate(`public/${recipeId}`)
            })

        } catch (error) {

            logger.warn(error.message)
        }
    }

    const handleDeleteRecipe = recipeId => {
        try {
            deleteRecipe(sessionStorage.token, recipeId, error => {
                if (error) {
                 
                    logger.warn(error.message)
                    return
                }
            })
        } catch (error) {

            logger.warn(error.message)
        }

        reloadThePage()
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

        loadUserRecipes()

        logger.debug('navigate to recipes')
    }


    return <Routes>
        <Route path="/" element={<>
            
            <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
                <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
            <MyRecipesList userRecipes={userRecipes} onRecipeClick={handleClickUserRecipe} onDeleteRecipe={handleDeleteRecipe} />

            <div className="addRecipe">
                <button className="addRecipe__button transparentButton" onClick={handleNavigationNewRecipe}><span className="material-symbols-outlined">add_circle</span> </button>
            </div>
            <PublicRecipesList recipes={publicRecipes} onRecipeClick={handleClickPublicRecipe} reloadPublicRecipes={handleReloadPublicRecipes} />

        </>} />
        <Route path="newrecipe" element={<>
            <NewRecipe onBackClick={handleNavigationRecipes} />
        </>} />

        <Route path="myrecipes/:id" element={<>
            <UserRecipe recipe={recipe} onBackClick={handleNavigationRecipes} />
        </>} />

        <Route path="public/:id" element={<>
            <PublicRecipe recipe={recipe} onBackClick={handleNavigationRecipes} />
        </>} />

    </Routes>
}
export default withContext(RecipesMenu)