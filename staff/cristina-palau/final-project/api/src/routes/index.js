const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { createIngredientHandler} = require('./ingredients')
const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

usersRouter.patch('/users/email/',jsonBodyParser, updateUserEmailHandler)

usersRouter.patch('/users/password/',jsonBodyParser, updateUserPasswordHandler)

const ingredientsRouter = Router ()

ingredientsRouter.post('/ingredients', jsonBodyParser, createIngredientHandler)


module.exports = {
    usersRouter,
    ingredientsRouter
}