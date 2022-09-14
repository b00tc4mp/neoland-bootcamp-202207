import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import { useState, useEffect } from 'react'
import retrieveIngredients from '../logic/retrieveIngredients'
import createRecipe from '../logic/createRecipe'

function UserRecipe({ onBackClick, recipe, loadUserRecipes }) {

    debugger
    const logger = new Loggito('User Recipe')

    const [rows, setRows] = useState([{ id: 0, quantity: 0, unit: "", ingredient: "" }])
    const [ingredients, setIngredients] = useState([])
    logger.info('render')

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

    function printIngredients() {
        return recipe.ingredients && recipe.ingredients.map(row =>
            <div className="ingredientsContainer" key={row.id}>
                 <input type="number" defaultValue={row.quantity} className="input newRecipeInput quantInput" name={`quantity${row.id}`} placeholder="cantidad"/>
                 <select className="select newRecipeInput unitSelect" defaultValue={row.unit} name={`unit${row.id}`} placeholder="unit">
                    <option value="kg" >kg</option>
                    <option value="unit">unt</option>
                    <option value="l">l</option>
                    </select>
                <input className="ingredient quantity" defaultValue={row.ingredient.name}/>
            </div>
        )
    }
    
    function printIngredientsRow() {
        return rows.map(row =>
            <div className="ingredientsContainer" key={row.id}>
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
                <button className="deleteButton" onClick={() => handleDeleteRow(row.id)}>X</button>
            </div>)
    }

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

    const handleDeleteRow = rowId =>{
    
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
    
    return <>
        <h3>Guardar receta Usuario</h3>
        <form className="newRecipeForm">
            <div className="recipeHeaderContainer">
            <input type="text" defaultValue={recipe.title} className="input newRecipeInput titleInput"  name="title" placeholder="Título" id="title" />
                <input type="number" defaultValue={recipe.persons} className="input newRecipeInput personsInput"  name="persons" placeholder="pax" id="persons" />
            </div>
            <p>Ingredientes</p>
            <div className="ingredientsContainer"> 
            {printIngredients()} 
            {printIngredientsRow()}
            <button className="addIngredient" onClick={addIngredient}>+</button>
            </div>

            <div className="buttonsContainer">
            <button className="createButton">Actualizar receta</button>
                <button className="createButton" onClick={handleSaveRecipe}>Crear nueva receta</button>
            </div>
        </form>
        <button className="backButton" onClick={handleBackClick}>Atrás</button>
    </>
}

export default UserRecipe