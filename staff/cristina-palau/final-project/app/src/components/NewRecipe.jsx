import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import { useState } from 'react'

function NewRecipe(handleNavigationRecipes) {
    const logger = new Loggito('New Recipe')

    logger.info('render')
    const [ingredients, setIngredients] = useState([{ quantity: "", unit: "", ingredient: "" }])

    const addIngredient = event => {
        event.preventDefault()

        let newIngredient = { quantity: "", unit: "", ingredient: "" }
        setIngredients([...ingredients, newIngredient])
    }

    return <>
        <h3>Nueva receta</h3>
        <form className="newRecipeForm" >
            <div className="recipeHeaderContainer">
                <input className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" />
                <input className="input newRecipeInput personsInput" name="persons" placeholder="pax" id="persons" />
            </div>
            <p>Ingredientes</p>
            <div className="ingredientsContainer"> {ingredients.map((input, index) => {
                return (
                    <div key={index}>
                        <input className="input newRecipeInput quantInput" typeof="number" name="quantity" placeholder="cantidad" id="cantidad" />
                        <input className="input newRecipeInput unitInput" name="unit" placeholder="unit" id="unidad" />
                        <input className="input newRecipeInput ingredientInput" name="ingredient" placeholder="ingrediente" id="ingrediente" />
                    </div>)
            })}
                <button className="addIngredient" onClick={addIngredient}>+</button>
            </div>
            <div className="buttonsContainer">
                <button className="backButton" onClick={handleNavigationRecipes}>Atrás</button>
                <button className="saveButton">Guardar</button>
            </div>
        </form>

    </>
}
export default NewRecipe