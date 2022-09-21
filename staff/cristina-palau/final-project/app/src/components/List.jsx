import Loggito from '../utils/loggito'
// import './NewRecipe.sass'
import { useState, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { retrieveIngredients, retrieveList, createList, updateList}  from '../logic'

function List({ onBackClick, list }) {
    const logger = new Loggito('User List')
    const { id } = useParams()

    const [ingredients, setIngredients] = useState([])
    const [listState, setListState] = useState(list)

    logger.info('render')

    useEffect(() => {
        if (!listState) {
            retrieveList(sessionStorage.token, id, (error, listFromLogic) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                setListState(listFromLogic)
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
        let data = [...listState.ingredients]

        const ingredient = data.find(ingredient => ingredientId === ingredient.id)
        ingredient.quantity = event.target.value

        const newList = { ...listState, ingredient }

        setListState(newList)
    }

    const handleChangeUnit = (event, ingredientId) => {
        let data = [...listState.ingredients]

        const ingredient = data.find(ingredient => ingredientId === ingredient.id)
        ingredient.unit = event.target.value

        const newList = { ...listState, ingredient }

        setListState(newList)
    }

    const handleChangeTitle = event => {
        let title = event.target.value

        const newTitle = { ...listState, title }

        setListState(newTitle)
    }

    const handleChangeIngredient = (event, ingredientId) => {
        const { target, target: { value: ingredientValue } } = event

        ingredientValue.length >= 3 && target.setAttribute('list', 'ingredientsList')
        ingredientValue.length < 3 && target.removeAttribute('list', 'ingredientsList')

        let data = [...listState.ingredients]

        const ingredient = data.find(ingredient => ingredientId === ingredient.id)
        ingredient.ingredient.name = event.target.value

        const newList = { ...listState, ingredient }

        setListState(newList)

    }

    const handleUpdateList = (listId) => {
        console.log('actualizo receta')
        try {
            const { title } = listState

            if (!title) throw new Error("title is empty or blank")

            const ingredientsItem = []

            listState.ingredients.forEach(ingredient => {
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
                updateList(sessionStorage.token, listId, title, ingredientsItem, (error) => {

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

    const handleCreateList = () => {
        console.log('createRecipe')

        try {
            const { title } = listState

           if (!title) throw new Error("title is empty or blank")

            const ingredientsItem = []

            listState.ingredients.forEach(ingredient => {
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
                createList(sessionStorage.token, title, ingredientsItem, (error) => {
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
        const deletingIndexIngredient = listState.ingredients.findIndex(ingredient => ingredientId === ingredient.id)

        const copyOfIngredients = [...listState.ingredients]
        copyOfIngredients.splice(deletingIndexIngredient, 1)

        const newRecipe = { ...listState, ingredients: copyOfIngredients }

        setListState(newRecipe)
    }

    const addIngredient = event => {
        event.preventDefault()

        let newRow = { id: (listState.ingredients.length), ingredient: { quantity: 0, unit: "", ingredient: "" } }

        const newIngredients = [...listState.ingredients, newRow]

        const newRecipe = { ...listState, ingredients: newIngredients }

        setListState(newRecipe)
    }

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={handleBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
        <h3 className="userRecipeTitle">Guardar receta Usuario</h3>
        <form className="newRecipeForm">
            <div className="recipeHeaderContainer">
                <label className="formLabel" htmlFor="title">Título</label>
                <input type="text" defaultValue={listState ? listState.title : ''} className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" onChange={(event) => handleChangeTitle(event)} />
            </div>
            <p>Ingredientes</p>
            <div className="ingredients">
                {listState && listState.ingredients && listState.ingredients.map((ingredient, index) =>
                    <div className="ingredientsRecipeContainer" key={ingredient.id}>
                        <input type="number" defaultValue={ingredient.quantity} className="input newRecipeInput quantInput" name={`quantity${index}`} placeholder="cantidad" onChange={(event) => handleChangeQuantity(event, ingredient.id)} />
                        <select className="select newRecipeInput unitSelect" defaultValue={ingredient.unit} name={`unit${index}`} placeholder="unit" onChange={(event) => handleChangeUnit(event, ingredient.id)}>
                            <option value="kg" ></option>
                            <option value="kg" >kg</option>
                            <option value="unit">unt</option>
                            <option value="l">l</option>
                        </select>
                        <input className="input newRecipeInput ingredientInput" name={`ingredient${index}`} list="ingredientsList" autoComplete="off" defaultValue={ingredient.ingredient.name} onChange={(event) => handleChangeIngredient(event, ingredient.id)} />
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

                    handleUpdateList(id)
                }}>Actualizar lista</button>
                <button className="createRecipeButton" type="button" onClick={(event) => {
                    event.preventDefault()

                    handleCreateList()
                }}>Crear nueva lista</button>
            </div>
        </form>
    </>
}

export default List