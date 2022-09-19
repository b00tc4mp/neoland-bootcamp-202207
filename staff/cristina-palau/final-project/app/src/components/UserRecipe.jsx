import Loggito from '../utils/loggito'
import './NewRecipe.sass'
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import retrieveIngredients from '../logic/retrieveIngredients'
import retrieveRecipe from '../logic/retrieveRecipe'
import createRecipe from '../logic/createRecipe'
import updateRecipe from '../logic/updateRecipe'


function UserRecipe({ onBackClick, recipe }) {
    const logger = new Loggito('User Recipe')
    const { id } = useParams()

    const [ingredients, setIngredients] = useState([])
    const [recipeState, setRecipeState] = useState(recipe)

    logger.info('render')

    useEffect(() => {
        if (!recipeState) {
            retrieveRecipe(sessionStorage.token, id, (error, recipeFromLogic) => {
                if (error) {

                    logger.warn(error.message)

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

    const handleChangeQuantity = (event, ingredientId) => {
        let data = [...recipeState.ingredients]

        const ingredient = data.find(ingredient => ingredientId === ingredient.id)
        ingredient.quantity = event.target.value

        const newRecipe = { ...recipeState, ingredient }

        setRecipeState(newRecipe)
    }

    const handleChangeUnit = (event, ingredientId) => {
        let data = [...recipeState.ingredients]

        const ingredient = data.find(ingredient => ingredientId === ingredient.id)
        ingredient.unit = event.target.value

        const newRecipe = { ...recipeState, ingredient }

        setRecipeState(newRecipe)
    }

    const handleChangeTitle = event => {
        let title = event.target.value

        const newTitle = { ...recipeState, title }

        setRecipeState(newTitle)
    }

    const handleChangePersons = event => {
        let persons = event.target.value

        const newPersons = { ...recipeState, persons }

        setRecipeState(newPersons)
    }

    const handleChangeIngredient = (event, ingredientId) => {
        const { target, target: { value: ingredientValue } } = event

        ingredientValue.length >= 3 && target.setAttribute('list', 'ingredientsList')
        ingredientValue.length < 3 && target.removeAttribute('list', 'ingredientsList')

        let data = [...recipeState.ingredients]
    
        const ingredient = data.find(ingredient => ingredientId === ingredient.id)
        ingredient.ingredient.name = event.target.value

        const newRecipe = { ...recipeState, ingredient }

        setRecipeState(newRecipe)

    }

    const handleUpdateRecipe = (recipeId) => {
        console.log('actualizo receta')
        try {
            const { title, persons } = recipeState

            if (!persons) throw new Error("persons is empty or blank")
            else if (!title) throw new Error("title is empty or blank")

            const ingredientsItem = []

            recipeState.ingredients.forEach(ingredient => {
                const quantityString = ingredient.quantity
                const unit = ingredient.unit
                const ingredientName = ingredient.ingredient.name

                let ingredientFound = ingredients.find(ingredients => ingredients.name === ingredientName)
                if (!ingredientName) throw new Error('ingredient not found')
                let id = ingredientFound.id


                if (!quantityString) throw new Error("quantity is empty or blank")
                else if (!unit) throw new Error("unit is empty or blank")
                else if (!unit) throw new Error("ingredient is empty or blank")

                let quantity = parseInt(quantityString)
                ingredientsItem.push({ quantity, unit, id })
            })

            try {
                updateRecipe(sessionStorage.token, recipeId, title, parseInt(persons), ingredientsItem, (error) => {

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

    const handleCreateRecipe = () => {
        console.log('createRecipe')

        try {
            const { title, persons } = recipeState

            if (!persons) throw new Error("persons is empty or blank")
            else if (!title) throw new Error("title is empty or blank")

            const ingredientsItem = []

            recipeState.ingredients.forEach(ingredient => {
                const quantityString = ingredient.quantity
                const unit = ingredient.unit
                const ingredientName = ingredient.ingredient.name

                let ingredientFound = ingredients.find(ingredients => ingredients.name === ingredientName)
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

    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    const handleDeleteIngredient = (ingredientId) => {
        const deletingIndexIngredient = recipeState.ingredients.findIndex(ingredient => ingredientId === ingredient.id)

        const copyOfIngredients = [...recipeState.ingredients]
        copyOfIngredients.splice(deletingIndexIngredient, 1)

        const newRecipe = { ...recipeState, ingredients: copyOfIngredients }

        setRecipeState(newRecipe)
    }

    const addIngredient = event => {
        event.preventDefault()

        let newRow = { index: (recipeState.ingredients.length), ingredient: { quantity: 0, unit: "kg", ingredient: "" } }

        const newIngredients = [...recipeState.ingredients, newRow]

        const newRecipe = { ...recipeState, ingredients: newIngredients }

        setRecipeState(newRecipe)
    }

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={handleBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
        <h3 className="userRecipeTitle">Guardar receta Usuario</h3>
        <form className="newRecipeForm">
            <div className="recipeHeaderContainer">
                <label className="formLabel" htmlFor="title">Título</label>
                <input type="text" defaultValue={recipeState ? recipeState.title : ''} className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" onChange={(event) => handleChangeTitle(event)} />
                <label className="formLabel" htmlFor="persons">para</label>
                <input type="number" defaultValue={recipeState ? recipeState.persons : ''} className="input newRecipeInput personsInput" name="persons" placeholder="pax" id="persons" onChange={(event) => handleChangePersons(event)} />
            </div>
            <p>Ingredientes</p>
            <div className="ingredients">
                {recipeState && recipeState.ingredients && recipeState.ingredients.map((ingredient, index) =>
                    <div className="ingredientsRecipeContainer" key={ingredient.id}>
                        <input type="number" defaultValue={ingredient.quantity} className="input newRecipeInput quantInput" name={`quantity${index}`} placeholder="cantidad" onChange={(event) => handleChangeQuantity(event, ingredient.id)} />
                        <select className="select newRecipeInput unitSelect" defaultValue={ingredient.unit} name={`unit${index}`} placeholder="unit" onChange={(event) => handleChangeUnit(event, ingredient.id)}>
                            <option value="kg" >kg</option>
                            <option value="unit">unt</option>
                            <option value="l">l</option>
                        </select>
                        <input className="input newRecipeInput ingredientInput" defaultValue={ingredient.ingredient.name} name={`ingredient${index}`} list="ingredientsList" onChange={(event) => handleChangeIngredient(event, ingredient.id)} />
                        <datalist id="ingredientsList">
                            {
                                ingredients.map(({ name, id }) => <option key={id} value={name}>{name}</option>)
                            }
                        </datalist>
                        <button type="button" className="deleteButton transparentButton" onClick={(event) => {
                            event.preventDefault()

                            handleDeleteIngredient(ingredient.id)
                        }}><span className="material-symbols-outlined">remove</span></button>
                    </div>
                )}

                <button className="addIngredient transparentButton" onClick={addIngredient}><span className="material-symbols-outlined">add_circle</span></button>
            </div>

            <div className="buttonsContainer">
                <button className="updateRecipeButton" type="button" onClick={(event) => {
                    event.preventDefault()

                    handleUpdateRecipe(id)
                }}>Actualizar receta</button>
                <button className="createRecipeButton" type="button" onClick={(event) => {
                    event.preventDefault()

                    handleCreateRecipe()
                }}>Crear nueva receta</button>
            </div>
        </form>
    </>
}

export default UserRecipe