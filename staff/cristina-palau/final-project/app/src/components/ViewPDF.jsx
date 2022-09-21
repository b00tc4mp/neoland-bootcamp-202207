import Loggito from '../utils/loggito'
import './RecipesNewRecipeForm.sass'
import './RecipesPublicRecipesView.sass'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import retrieveRecipe from '../logic/retrieveRecipe'


function ViewPDF({ onBackClick, recipe, onViewRecipe }) {

    const logger = new Loggito('Recipes')

    logger.info('render')

    const { id } = useParams()

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
    }, [])

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={() => onViewRecipe(id)}>
            <span className="material-symbols-outlined">visibility</span></button></div>
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
        </div>
    </>
}

export default ViewPDF