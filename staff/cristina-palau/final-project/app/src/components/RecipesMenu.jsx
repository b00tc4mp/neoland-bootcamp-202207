import { useState, useEffect } from 'react'
import Loggito from '../utils/loggito'
import NewRecipe from './NewRecipe'
import UserRecipesList from './UserRecipesList'
import PublicRecipesList from './PublicRecipesList'
import PublicRecipe from './PublicRecipe'
import ViewUserRecipe from './ViewUserRecipe'
import UserRecipe from './UserRecipe'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { retrieveUserRecipes, retrieveUser, retrievePublicRecipes, retrieveRecipe, deleteRecipe } from '../logic'
import withContext from '../utils/withContext'
import Header from './Header'
import { toast } from 'react-toastify'

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
                    
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }

                loadUserRecipes(user)
                loadPublicRecipes(user)
            })
        } catch (error) {
            
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }


    }, [])

    const loadPublicRecipes = () => {
        try {
            retrievePublicRecipes(sessionStorage.token, (error, publicRecipes) => {

                if (error) {

                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }

                setPublicRecipes(publicRecipes)

                logger.debug('setPublicRecipes', publicRecipes)
            })
        } catch (error) {

            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }

    const loadUserRecipes = () => {
        try {
            retrieveUserRecipes(sessionStorage.token, (error, userRecipes) => {
                if (error) {
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }
                setUserRecipes(userRecipes)

                logger.debug('setUserRecipes', userRecipes)
            })
        } catch (error) {
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }

    const handleClickUserRecipe = recipeId => {
        try {
            retrieveRecipe(sessionStorage.token, recipeId, (error, recipe) => {

                if (error) {
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }

                setRecipe(recipe)

                navigate(`myrecipes/${recipeId}`)
            })

        } catch (error) {
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }

    const handleClickPublicRecipe = recipeId => {
        try {
            retrieveRecipe(sessionStorage.token, recipeId, (error, recipe) => {

                if (error) {
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }

                setRecipe(recipe)

                navigate(`public/${recipeId}`)
            })

        } catch (error) {
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }

    const handleViewRecipe = recipeId => {
        try {
            retrieveRecipe(sessionStorage.token, recipeId, (error, recipe) => {

                if (error) {
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }

                setRecipe(recipe)

                navigate(`viewRecipe/${recipeId}`)
            })

        } catch (error) {
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }

    const handleDeleteRecipe = recipeId => {

        try {

            deleteRecipe(sessionStorage.token, recipeId, error => {
                if (error) {
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)
                    return
                }
                
                
            })

            toast.success('your recipe has been deleted', {position: toast.POSITION.TOP_CENTER, theme: "colored", autoClose: 2000})
            
            setTimeout(retardedReload, 2000) 

            function retardedReload() {
                reloadThePage()
            }

        } catch (error) {
            
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

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

        loadUserRecipes()

        logger.debug('navigate to recipes')
    }

    return <Routes>
        <Route path="/" element={<>
            <Header text="Recetas" />

            <div className="buttonContainer buttonTopContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
                <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
            <h2 className='recipesTitle'>Mis recetas</h2>
            <UserRecipesList userRecipes={userRecipes} onRecipeClick={handleClickUserRecipe} onDeleteRecipe={handleDeleteRecipe} onViewClick={handleViewRecipe} />
            <h2 className='recipesTitle'>Inspírate</h2>
            <PublicRecipesList recipes={publicRecipes} onRecipeClick={handleClickPublicRecipe} reloadPublicRecipes={handleReloadPublicRecipes} />
            <div className="addRecipe">
                <button className="addButton transparentButton" onClick={handleNavigationNewRecipe}><span className="material-symbols-outlined">add_circle</span> </button>
            </div>

        </>} />
        <Route path="newrecipe" element={<>
            <NewRecipe onBackClick={handleNavigationRecipes} />
        </>} />

        <Route path="myrecipes/:id" element={<>
            <UserRecipe recipe={recipe} onBackClick={handleNavigationRecipes} />
        </>} />

        <Route path="viewrecipe/:id" element={<>
            <ViewUserRecipe recipe={recipe} onBackClick={handleNavigationRecipes} />
        </>} />

        <Route path="public/:id" element={<>
            <PublicRecipe recipe={recipe} onBackClick={handleNavigationRecipes} />
        </>} />

    </Routes>
}
export default withContext(RecipesMenu)