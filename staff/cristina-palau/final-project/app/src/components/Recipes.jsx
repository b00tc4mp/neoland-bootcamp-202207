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
    const handleNavigationRecipes = event => {
        event.preventDefault()

        navigate('/')

        logger.debug('navigate to recipes')
    }

    return <Routes>
        <Route path="/" element={<>
            <div className="recipes-container__myRecipes container-recipes">
                <div className="recipe">receta de prueba</div>
                <div className="recipe">receta de prueba2</div>
                <div className="recipe">receta de prueba</div>
                <div className="recipe">receta de prueba</div>
                <div className="recipe">receta de prueba</div>
            </div>


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
            <NewRecipe onClick={handleNavigationRecipes} />
        </>} />
    </Routes>
}
export default Recipes