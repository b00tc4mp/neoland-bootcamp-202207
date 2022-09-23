import Loggito from '../utils/loggito'
import './NewForm.sass'
import './RecipesView.sass'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { createRecipe, retrieveRecipe, retrieveIngredients } from '../logic'
import { toast } from 'react-toastify'

function PublicRecipe({ onBackClick, recipe }) {

    const { id } = useParams()

    const [ingredients, setIngredients] = useState([])
    const [recipeState, setRecipeState] = useState(recipe)

    const logger = new Loggito('Public Recipe')

    logger.info('render')

    useEffect(() => {
        if (!recipeState) {
            retrieveRecipe(sessionStorage.token, id, (error, recipeFromLogic) => {
                if (error) {

                    toast.error(error.message, { position: toast.POSITION.TOP_CENTER, theme: "colored" })

                    logger.warn(error.message)

                    return
                }
                setRecipeState(recipeFromLogic)
            })
        }
        try {
            retrieveIngredients(sessionStorage.token, (error, ingredients) => {
                if (error) {
                    
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)
                    return
                }
                setIngredients(ingredients)
            })
        } catch (error) {
            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }, [])



    const handleSaveRecipe = event => {
        event.preventDefault()

        try {
            const { title, persons } = recipeState

            const ingredientsItem = []

            recipeState.ingredients.forEach((ingredient) => {
                const quantityString = ingredient.quantity
                let unit = ingredient.unit
                const ingredientName = ingredient.ingredient.name

                let ingredientFound = ingredients.find(ingredients => ingredients.name === ingredientName)
                if (!ingredientName) throw new Error('ingredient not found')
                let id = ingredientFound.id


                if (unit === "unidad" || unit === "unidades") unit = "unit"

                const quantity = parseInt(quantityString)
                ingredientsItem.push({ quantity, unit, id })
            })

            createRecipe(sessionStorage.token, title, parseInt(persons), ingredientsItem, (error) => {
                if (error) {
                    
                    toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

                    logger.warn(error.message)

                    return
                }
                
                toast.success('a new recipe has been created', {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            })

        } catch (error) {

            toast.error(error.message, {position: toast.POSITION.TOP_CENTER, theme: "colored"})

            logger.warn(error.message)
        }
    }

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    return <>

        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={handleBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button></div>

        <div className="publicRecipeContainer">
            <div className="recipeHeaderContainer">
                <h2 className="publicRecipeTitle" name="title" placeholder="Título" id="title">{recipeState ? recipeState.title : ''}</h2>
                <div className="publicRecipePersons" name="persons" placeholder="pax" id="persons">para {recipeState ? recipeState.persons : ''}</div>
            </div>
            <h3 className="publicIngredientsTitle">Ingredientes</h3>

            <div className="ingredientsContainer"> {recipeState && recipeState.ingredients && recipeState.ingredients.map((ingredient, index) => {
                if (ingredient.unit === "unit") { (ingredient.quantity === 1) ? ingredient.unit = "unidad" : ingredient.unit = "unidades" }
                return <div className="ingredientsRowContainer" key={ingredient.id}>
                    <div className="publicIngredient quantity" name={`quantityt${index}`}> {ingredient.quantity} </div>
                    <div className="publicIngredient unit" name={`unit${index}`}>{ingredient.unit} de </div>
                    <div className="publicIngredient name" name={`ingredient${index}`}>{ingredient.ingredient.name}</div>
                </div>
            })
            }
            </div>
            <div className="buttonContainer">
                <button className="addButton transparentButton" onClick={handleSaveRecipe}><span className="material-symbols-outlined ">heart_plus</span></button>
            </div>
        </div>
    </>
}

export default PublicRecipe