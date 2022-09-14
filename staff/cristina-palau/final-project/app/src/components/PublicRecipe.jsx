import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import { useState, useEffect } from 'react'
import createRecipe from '../logic/createRecipe'
import { useParams } from 'react-router-dom'
import retrieveRecipe from '../logic/retrieveRecipe'

function PublicRecipe({ onBackClick, recipe, loadUserRecipes }) {
    
    const { id } = useParams()

    const [recipeState, setRecipeState] = useState(recipe)

    useEffect(() => {
        if(!recipeState) {
            retrieveRecipe(sessionStorage.token, id, (error, recipeFromLogic) => {
                if (error) {
                    console.log(error)
                    //TODO
    
                    return
                }
    
                setRecipeState(recipeFromLogic)
            })
        }
    }, [])

    const logger = new Loggito('Public Recipe')

    logger.info('render')

    function printIngredients() {
        return recipeState.ingredients && recipeState.ingredients.map(row => {
            
            return <div className="ingredientsContainer" key={row.id}>
                <div className="ingredient quantity">quantity: {row.quantity} {row.unit}</div>
                <div className="ingredient quantity">ingredient: {row.ingredient.name}</div>
            </div>
        }
        )
    }

    const handleSaveRecipe = event => {
        event.preventDefault()
        try {
            const { title, persons, ingredients } = recipe
            createRecipe(sessionStorage.token, title, parseInt(persons), ingredients, (error) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                loadUserRecipes()
            })
        } catch (error) {
            logger.warn(error.message)
        }
    }

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    return <>
        <h3>Guardar receta</h3>
        <div className="newRecipeForm">
            <div className="recipeHeaderContainer">
                <div className="recipeTitle" name="title" placeholder="Título" id="title">Title: {recipeState? recipeState.title : ''}</div>
                <div className="recipePersons" name="persons" placeholder="pax" id="persons">Persons: {recipeState? recipeState.persons : ''}</div>
            </div>
            <p>Ingredientes</p>
            <div className="ingredientsContainer"> {recipeState && printIngredients()}

            </div>
            <div className="buttonsContainer">
                <button className="createButton" onClick={handleSaveRecipe} >Guardar receta</button>
            </div>
        </div>
        <button className="backButton" onClick={handleBackClick}>Atrás</button>
    </>
}

export default PublicRecipe