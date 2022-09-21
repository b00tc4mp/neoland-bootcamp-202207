import Loggito from '../utils/loggito'
import { useState, useEffect } from 'react'
import {retrieveIngredients, retrieveUser, retrieveUserRecipes, retrieveRecipeIngredients, createList}  from '../logic'
import RecipesList from './RecipesList'

function NewList({ onBackClick }) {
    const logger = new Loggito('New Recipe')

    logger.info('render')

    const [ingredients, setIngredients] = useState([])
    const [userRecipes, setUserRecipes] = useState(null)
    const [buyingListIngredients, setBuyingListIngredients] = useState([])

    useEffect(() => { // override
        logger.info('componentDidMount')

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {

                    logger.warn(error.message)

                    return
                }

                loadUserRecipes(user)
            })
        } catch (error) {

            logger.warn(error.message)
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

    const loadUserRecipes = () => {
        try {
            retrieveUserRecipes(sessionStorage.token, (error, userRecipes) => {
                if (error) {


                    logger.warn(error.message)

                    return
                }
                setUserRecipes(userRecipes)

                logger.debug('setUserRecipes', userRecipes)
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }

    const handleCreateNewList = event => {
        event.preventDefault()


        try {
            const { target: form,
                target: {
                    title: { value: title },
                } } = event


            if (!title) throw new Error("title is empty or blank")

            let ingredientsItem = []

            buyingListIngredients.forEach(ingredient => {
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
                 
                if (ingredientsItem.find(({ ingredient }) => ingredientFound.id === ingredient.ingredient.id) === true) {
                     
                    const index = ingredientsItem.indexOf(({ ingredient }) => ingredientFound.id === ingredient.ingredient.id)
                    ingredientsItem[index].quantity += quantity
                }
                else ingredientsItem.push({ quantity, unit, id })
                 

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
            })
        } catch (error) {
            logger.warn(error.message)
        }
    }



    const handleAddIngredients = recipeId => {

        try {

            retrieveRecipeIngredients(sessionStorage.token, recipeId, (error, recipeIngredients) => {


                if (error) {

                    logger.warn(error.message)

                    return
                }

                setBuyingListIngredients(buyingListIngredients.concat(recipeIngredients))
            })
        } catch (error) {

            logger.warn(error.message)
        }
    }



    const handleChangeQuantity = (event, ingredientId) => {
        let data = [...buyingListIngredients]

        const row = data.find(ingredient => ingredientId === ingredient.id)

        row.quantity = event.target.value

        setBuyingListIngredients(data)
    }

    const handleChangeUnit = (event, ingredientId) => {
        let data = [...buyingListIngredients]

        const row = data.find(ingredient => ingredientId === ingredient.id)

        row.unit = event.target.value

        setBuyingListIngredients(data)
    }

    const handleChangeIngredient = (event, ingredientId) => {
        const { target, target: { value: ingredientValue } } = event

        ingredientValue.length >= 3 && target.setAttribute('list', 'ingredientsList')
        ingredientValue.length < 3 && target.removeAttribute('list', 'ingredientsList')

        let data = [...buyingListIngredients]

        const row = data.find(ingredient => ingredientId === ingredient.id)

        row.ingredient.name = event.target.value

        setBuyingListIngredients(data)
    }


    const handleDeleteIngredient = (ingredientId) => {

        const deletingIndexIngredient = buyingListIngredients.findIndex(ingredient => ingredientId === ingredient.id)

        const copyOfIngredients = [...buyingListIngredients]
        copyOfIngredients.splice(deletingIndexIngredient, 1)


        setBuyingListIngredients(copyOfIngredients)
    }

    const addIngredient = event => {
        event.preventDefault()

        let newRow = { index: (buyingListIngredients.length), ingredient: { quantity: 0, unit: "", ingredient: "" } }

        const newIngredients = [...buyingListIngredients, newRow]

        setBuyingListIngredients(newIngredients)
    }


    const handleBackClick = event => {
        event.preventDefault()

        onBackClick()
    }

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={handleBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
        <form className="newRecipeForm" onSubmit={handleCreateNewList}>
            <RecipesList userRecipes={userRecipes} onAddClick={handleAddIngredients} />
            <div className="ListHeaderContainer">
                <label className="formLabel" htmlFor="title">Lista: </label>
                <input type="text" className="input newRecipeInput titleInput" name="title" placeholder="Título" id="title" defaultValue="nueva lista" />
            </div>
            <p>Ingredientes</p>
            <div className="ingredients"> {buyingListIngredients && buyingListIngredients.map((ingredient, index) =>
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
                < button className="addIngredient transparentButton" onClick={addIngredient} > <span className="material-symbols-outlined">add_circle</span></button>

            </div>

            <div className="buttonsContainer">
                <button className="createButton transparentButton" type="submit"><span className="material-symbols-outlined">save</span></button>
            </div>
        </form>
    </>
}

export default NewList