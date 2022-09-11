import Loggito from '../utils/loggito'
import './Recipes.sass'
import NewRecipe from './NewRecipe'
import MyRecipesList from './MyRecipesList'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Recipes() {
    const logger = new Loggito('Recipes')
    logger.info('render')

    const navigate = useNavigate()

    const handleNavigationNewRecipe = event => {
        event.preventDefault()

        navigate('newrecipe')

        logger.debug('navigate to new recipe')
    }
    const handleNavigationRecipes = event => {
      
        navigate('/recipes')

        logger.debug('navigate to recipes')
    }

    return <Routes>
        <Route path="/" element={<>
           <MyRecipesList />

            <div className="recipes-container__inspiration container-recipes">
                <div className="recipe">receta pública</div>
                <div className="recipe">receta pública</div>
                <div className="recipe">receta pública</div>
                <div className="recipe">receta pública</div>
                <div className="retrievePublicRecipe">añadir más</div>
                </div>

            <div className="addRecipe">
                <button className="addRecipe__button transparentButton" onClick={handleNavigationNewRecipe}>Añadir nueva receta +</button>
            </div>
        </>} />
        <Route path="newrecipe" element={<>
            <NewRecipe onBackClick={handleNavigationRecipes} />
        </>} />
    </Routes>
}
export default Recipes