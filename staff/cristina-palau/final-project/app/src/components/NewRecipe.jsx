import Loggito from '../utils/loggito'
import './RecipesNewRecipeForm.sass'
import { useState, useEffect } from 'react'
import {retrieveIngredients, createRecipe} from '../logic'

function NewRecipe({ onBackClick, printIngredientsRow }) {
    const logger = new Loggito('New Recipe')

    logger.info('render')
    const [rows, setRows] = useState([{ id: 0, quantity: 0, unit: "", ingredient: "" }])
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

    const handleChangeQuantity = (event, rowId) => {
        let data = [...rows]

        const row = data.find(row => rowId === row.id)

        row.quantity = event.target.value

        setRows(data)
    }

    const handleChangeUnit = (event, rowId) => {
        let data = [...rows]

        const row = data.find(row => rowId === row.id)

        row.unit = event.target.value

        setRows(data)
    }

    const handleChangeIngredient = (event, rowId) => {
        const { target, target: { value: ingredientValue } } = event

        ingredientValue.length >= 3 && target.setAttribute('list', 'ingredientsList')
        ingredientValue.length < 3 && target.removeAttribute('list', 'ingredientsList')

        let data = [...rows]

        const row = data.find(row => rowId === row.id)

        row.ingredient = event.target.value

        setRows(data)
    }


    const handleCreateRecipe = event => {
        event.preventDefault()

        try {
            const { target: form,
                target: {
                    title: { value: title },
                    persons: { value: persons },
                } } = event

            if (!persons) throw new Error("persons is empty or blank")
            else if (!title) throw new Error("title is empty or blank")

            const ingredientsItem = []

            rows.forEach(row => {
                const { target: form,
                    target: {
                        [`quantity${row.id}`]: { value: quantityString },
                        [`unit${row.id}`]: { value: unit },
                        [`ingredient${row.id}`]: { value: ingredientName },
                    } } = event


                let ingredientFound = ingredients.find(ingredient => ingredient.name === ingredientName)
                if (!ingredientName) throw new Error('ingredient not found')
                let id = ingredientFound.id


                if (!quantityString) throw new Error("quantity is empty or blank")
                else if (!unit) throw new Error("unit is empty or blank")
                else if (!unit) throw new Error("ingredient is empty or blank")

                let quantity = parseInt(quantityString)
                ingredientsItem.push({ quantity, unit, id })

            })

            try {
                createRecipe(sessionStorage.token, title, parseInt(persons), ingredientsItem, (error) => {
                    if (error) {

                        logger.warn(error.message)

                        return
                    }
                })
            } catch (error) {
                logger.warn(error.message)
            }

        } catch (error) {
            logger.warn(error.message)
        }
    }

    const handleDeleteRow = rowId => {

        if (rows.length > 1) {
            setRows(rows.filter(_row => _row.id !== rowId))
        }
    }

    const addIngredient = event => {
        event.preventDefault()

        const lastRow = rows[rows.length - 1]

        let newRow = { id: lastRow.id + 1, quantity: 0, unit: "", ingredient: "" }

        setRows([...rows, newRow])
    }

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={handleBackClick}>
                <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
            <form className="newRecipeForm" onSubmit={handleCreateRecipe} >
            <div className="recipeHeaderContainer">
            <label className="formLabel" htmlFor="title">Título</label>
                <input type="text" className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" />
                <label className="formLabel" htmlFor="persons">para<input type="number" className="input newRecipeInput personsInput" name="persons" placeholder="pax" id="persons"/></label>
            </div>
            <p>Ingredientes</p>
            <div className="ingredients"> {
                rows.map(row =>
                    <div className="ingredientsRecipeContainer" key={row.id}>
                        <input type="number" className="input newRecipeInput quantInput" name={`quantity${row.id}`} placeholder="cantidad" onChange={(event) => handleChangeQuantity(event, row.id)} />
                        <select className="select newRecipeInput unitSelect" defaultValue={"kg"} name={`unit${row.id}`} placeholder="unit" onChange={(event) => handleChangeUnit(event, row.id)}>
                            <option value="kg" >kg</option>
                            <option value="unit">unt</option>
                            <option value="l">l</option>
                        </select>
                        <input className="input newRecipeInput ingredientInput" typeof='text' name={`ingredient${row.id}`} placeholder="ingrediente" autoComplete="off" list="ingredientsList" onChange={(event) => handleChangeIngredient(event, row.id)} />
                        <datalist id="ingredientsList">
                            {
                                ingredients.map(({ name, id }) => <option key={id} value={name}>{name}</option>)
                            }
                        </datalist>
                        <button className="deleteButton transparentButton" onClick={() => handleDeleteRow(row.id)}><span className="material-symbols-outlined">remove</span></button>
                    </div>)

            }
                <button className="addIngredient transparentButton" onClick={addIngredient}><span className="material-symbols-outlined">add_circle</span></button>
            </div>
            <div className="buttonsContainer">
                <button className="createButton transparentButton" type="submit"><span className="material-symbols-outlined">save</span></button>
            </div>
        </form>
    </>
}

export default NewRecipe