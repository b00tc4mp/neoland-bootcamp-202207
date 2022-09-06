import Loggito from '../utils/loggito'
import './Recipes.css'

function Recipes() {
    const logger = new Loggito('Settings')

    logger.info('render')

    return <>
        <div className="myRecipes recipesContainer"> 
            <div className="recipe">receta de prueba</div>
            <div className="recipe">receta de prueba2</div>
            <div className="recipe">receta de prueba</div>
            <div className="recipe">receta de prueba</div>
            <div className="recipe">receta de prueba</div>
        </div>

        <div className="addRecipeContainer"> 
            <button className="addRecipe transparentButton">Añadir nueva receta +</button>
        </div>

        <div className="inspiration recipesContainer"> 
            <div className="recipe">receta de prueba</div>
            <div className="recipe">receta de prueba2</div>
            <div className="recipe">receta de prueba</div>
            <div className="recipe">receta de prueba</div>
            <div className="recipe">receta de prueba</div>
        </div>
    </>

}
export default Recipes