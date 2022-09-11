import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import { useState, useEffect } from 'react'
import retrieveIngredients from '../logic/retrieveIngredients'

function NewRecipe({ onBackClick, onSearchIngredient }) {
    const logger = new Loggito('New Recipe')

    logger.info('render')
    const [ingredientsRow, setIngredientsRow] = useState([{ quantity: "", unit: "", ingredient: "" }])
    const [ingredients, setIngredients] = useState([])

    useEffect(async () => {
        const res = await retrieveIngredients(sessionStorage.token, (error, token) => {
            if (error) {

                logger.warn(error.message)

                return
            }

            logger.debug('user logged in')

            sessionStorage.token = token

        })

        setIngredients(res)
    })

    const addIngredient = event => {
        event.preventDefault()

        let newIngredientRow = { quantity: "", unit: "", ingredient: "" }
        setIngredientsRow([...ingredientsRow, newIngredientRow])
    }

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }


    return <>
        <h3>Nueva receta</h3>
        <form className="newRecipeForm" >
            <div className="recipeHeaderContainer">
                <input className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" />
                <input className="input newRecipeInput personsInput" name="persons" placeholder="pax" id="persons" />
            </div>
            <p>Ingredientes</p>
            <div className="ingredientsContainer"> {ingredientsRow.map((input, index) => {
                return (
                    <div className="ingredientsContainer" key={index}>
                        <input className="input newRecipeInput quantInput" typeof="number" name="quantity" placeholder="cantidad" id="cantidad" />
                        <select className="select newRecipeInput unitSelect" name="unit" placeholder="unit" id="unidad" >
                            <option value="kg">kg</option>
                            <option value="unit">unt</option>
                            <option value="l">l</option>
                        </select>
                        <input className="input newRecipeInput ingredientInput" name="ingredient" placeholder="ingrediente" id="ingredient" onChange={event => {

                            const { target, target: { value } } = event

                            value.length >= 3 && target.setAttribute('list', 'ingredientsList')
                            value.length < 3 && target.removeAttribute('list', 'ingredientsList')
                        }} />
                        <datalist id="ingredientsList" >
                            {
                                ingredients.map(({ ingredient, id }) => <option value={id}>${ingredient}</option>)
                            }
                        </datalist>
                    </div>)
            })}
                <button className="addIngredient" onClick={addIngredient}>+</button>
            </div>
            <div className="buttonsContainer">
                <button className="backButton" onClick={handleBackClick}>Atrás</button>
                <button className="saveButton">Crear receta</button>
            </div>
        </form>

    </>
}
export default NewRecipe