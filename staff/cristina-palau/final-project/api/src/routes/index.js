const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { createListHandler, retrieveUserListsHandler } = require('./lists')
const { createIngredientHandler, searchIngredientHandler, retrieveIngredientsHandler } = require('./ingredients')
const { createRecipeHandler, retrieveRecipeHandler, retrieveRecipeIngredientsHandler, retrieveUserRecipesHandler, updateRecipeHandler, deleteRecipeHandler, retrievePublicRecipesHandler } = require('./recipes')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

usersRouter.patch('/users/email/', jsonBodyParser, updateUserEmailHandler)

usersRouter.patch('/users/password/', jsonBodyParser, updateUserPasswordHandler)

const ingredientsRouter = Router()

ingredientsRouter.post('/ingredients', jsonBodyParser, createIngredientHandler)

ingredientsRouter.get('/ingredients', retrieveIngredientsHandler)

ingredientsRouter.get('/ingredients/search', searchIngredientHandler)

const recipesRouter = Router()

recipesRouter.post('/recipes', jsonBodyParser, createRecipeHandler)

recipesRouter.get('/recipes', retrieveUserRecipesHandler)

recipesRouter.get('/recipes/public', retrievePublicRecipesHandler)

recipesRouter.get('/recipes/:recipeId', retrieveRecipeHandler)

recipesRouter.get('/recipes/:recipeId/ingredients/', retrieveRecipeIngredientsHandler)

recipesRouter.delete('/recipes/:recipeId', deleteRecipeHandler)

recipesRouter.patch('/recipes/:recipeId', jsonBodyParser, updateRecipeHandler)

const listsRouter = Router()

listsRouter.post('/lists', jsonBodyParser, createListHandler)

listsRouter.get('/lists', retrieveUserListsHandler)

module.exports = {
    usersRouter,
    ingredientsRouter,
    recipesRouter,
    listsRouter
}