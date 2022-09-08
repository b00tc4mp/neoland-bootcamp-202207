import Loggito from '../utils/loggito'
import './Recipes.sass'
import NewRecipe from './NewRecipe'
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

    return <Routes>
        <Route path="/" element={<>
            <div className="myRecipes recipesContainer">
                <div className="recipe">receta de prueba</div>
                <div className="recipe">receta de prueba2</div>
                <div className="recipe">receta de prueba</div>
                <div className="recipe">receta de prueba</div>
                <div className="recipe">receta de prueba</div>
            </div>

            <div className="addRecipeContainer">
                <button className="addRecipe transparentButton" onClick={handleNavigationNewRecipe}>Añadir nueva receta +</button>
            </div>

            <div className="inspiration recipesContainer">
                <div className="recipe">receta pública</div>
                <div className="recipe">receta pública2</div>
                <div className="recipe">receta pública</div>
                <div className="recipe">receta pública</div>
                <div className="recipe">receta pública</div>
            </div>
        </>} />
        <Route path="newrecipe" element={<>
            <NewRecipe />
        </>} />
    </Routes>
}
export default Recipes