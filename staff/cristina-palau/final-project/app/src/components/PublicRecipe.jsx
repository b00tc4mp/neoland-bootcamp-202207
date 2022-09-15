import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import createRecipe from '../logic/createRecipe'
import retrieveRecipe from '../logic/retrieveRecipe'
import retrieveIngredients from '../logic/retrieveIngredients'


function PublicRecipe({ onBackClick, recipe }) {

    const { id } = useParams()

    const [ingredients, setIngredients] = useState([])
    const [recipeState, setRecipeState] = useState(recipe)

    useEffect(() => {
        if (!recipeState) {
            retrieveRecipe(sessionStorage.token, id, (error, recipeFromLogic) => {
                if (error) {
                    console.log(error)
                    //TODO

                    return
                }
                setRecipeState(recipeFromLogic)
            })
        }
        try {
            retrieveIngredients(sessionStorage.token, (error, ingredients) => {
                if (error) {

                    logger.warn(error.message)
                    return
                }
                setIngredients(ingredients)
            })
        } catch (error) {
            logger.warn(error.message)
        }
    }, [])

    const logger = new Loggito('Public Recipe')

    logger.info('render')


    const handleSaveRecipe = event => {
        event.preventDefault()
        console.log('inicio el save')
        try {
            const { title, persons } = recipeState

            const ingredientsItem = []
            debugger
            recipeState.ingredients.forEach(index => {
                const {
                        [`quantity${index}`]: { value: quantityString },
                        [`unit${index}`]: { value: unit },
                        [`ingredient${index}`]: { value: ingredientName },
                    } = recipeState.ingredients

                debugger
                let ingredientFound = ingredients.find(ingredient => ingredient.name === ingredientName)
                if (!ingredientName) throw new Error('ingredient not found')
                let id = ingredientFound.id
                debugger
                const quantity = parseInt(quantityString)
                ingredientsItem.push({ quantity, unit, id })

                debugger
                createRecipe(sessionStorage.token, title, parseInt(persons), ingredientsItem, (error) => {
                    if (error) {

                        logger.warn(error.message)

                        return
                    }
                    debugger
                })
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
                <div className="recipeTitle" name="title" placeholder="Título" id="title">Title: {recipeState ? recipeState.title : ''}</div>
                <div className="recipePersons" name="persons" placeholder="pax" id="persons">Persons: {recipeState ? recipeState.persons : ''}</div>
            </div>
            <p>Ingredientes</p>
            <div className="ingredientsContainer"> {recipeState && recipeState.ingredients && recipeState.ingredients.map((ingredient, index) => {
                return <div className="ingredientsContainer" key={ingredient.id}>
                    <div className="ingredient quantity" name={`quantityt${index}`}> quantity: {ingredient.quantity}</div>
                    <div className="ingredient unit" name={`unit${index}`}>{ingredient.unit}</div>
                    <div className="ingredient name" name={`ingredient${index}`}>ingredient: {ingredient.ingredient.name}</div>
                </div>
            })
            }
            </div>
            <div className="buttonsContainer">
                <button className="createButton" onClick={handleSaveRecipe} >Guardar receta</button>
            </div>
        </div>
        <button className="backButton" onClick={handleBackClick}>Atrás</button>
    </>
}

export default PublicRecipe