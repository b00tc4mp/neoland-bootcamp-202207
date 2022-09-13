import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import {FormatError} from 'errors'
import { useState, useEffect } from 'react'
import retrieveIngredients from '../logic/retrieveIngredients'
import createRecipe from '../logic/createRecipe'

function NewRecipe({ onBackClick }) {
    const logger = new Loggito('New Recipe')

    logger.info('render')
    const [ingredientsRow, setIngredientsRow] = useState([{ quantity: "", unit: "", ingredient: "" }])
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        logger.info('componentDidMount')

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

    const addIngredient = event => {
        event.preventDefault()

        let newIngredientRow = { quantity: "", unit: "", ingredient: "" }
        setIngredientsRow([...ingredientsRow, newIngredientRow])
    }

    const handleCreateRecipe = event => {
        event.preventDefault()
       
        const { target: form,
            target: {
                title: { value: title },
                persons: { value: persons },
            } } = event
        
        if (!persons) throw new Error("persons is empty or blank")
        else if (!title) throw new Error("title is empty or blank")

        const ingredientsItem = []
        debugger
        console.log("OOOOOO", ingredientsRow)
        ingredientsRow.forEach(row => {
            const { target: form,
                target: {
                    [`quantity[${row.index}]`]: { value: quantity }, //const quantity = quantity[0].value
                    [`unit[${row.index}]`]: { value: unit },
                    [`ingredient[${row.index}]`]: { value: ingredient }
                } } = event

            debugger
            if (!quantity) throw new Error("quantity is empty or blank")
            else if (!unit) throw new Error("unit is empty or blank")
            else if (!unit) throw new Error("ingredient is empty or blank")

            ingredientsItem.push({ quantity, unit, ingredient })
        })
        try {
            createRecipe(title, persons, ingredientsItem, (error) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }
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
        <h3>Nueva receta</h3>
        <form className="newRecipeForm" name="form" onSubmit={handleCreateRecipe} >
            <div className="recipeHeaderContainer">
                <input className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" />
                <input className="input newRecipeInput personsInput" name="persons" placeholder="pax" id="persons" />
            </div>
            <p>Ingredientes</p>
            <div className="ingredientsContainer"> {ingredientsRow.map((input, index) => {
                return (
                    <div className="ingredientsContainer" key={index}>
                        <input className="input newRecipeInput quantInput" value={input.quantity} typeof="number" name="quantity" placeholder="cantidad" id="quantity" />
                        <select className="select newRecipeInput unitSelect" value={input.unit} name="unit" placeholder="unit" id="unit" >
                            <option value="kg">kg</option>
                            <option value="unit">unt</option>
                            <option value="l">l</option>
                        </select>
                        <input className="input newRecipeInput ingredientInput" value={input.ingredient} typeof='text' name="ingredient" placeholder="ingrediente" id="ingredient" autoComplete="off" list="ingredientsList" onChange={event => {

                            const { target, target: { value: ingredientValue } } = event

                            ingredientValue.length >= 3 && target.setAttribute('list', 'ingredientsList')
                            ingredientValue.length < 3 && target.removeAttribute('list', 'ingredientsList')
                        }} />

                        <datalist id="ingredientsList">
                            {
                                ingredients.map(({ name, id }) => <option key={id} value={name}>{name}</option>)
                            }
                        </datalist>
                    </div>)
            })}
                <button className="addIngredient" onClick={addIngredient}>+</button>
            </div>
            <div className="buttonsContainer">
                <button className="createButton" type="submit">Crear receta</button>
            </div>
        </form>
        <button className="backButton" onClick={handleBackClick}>Atrás</button>
    </>
}

export default NewRecipe