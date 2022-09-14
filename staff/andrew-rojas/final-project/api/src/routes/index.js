const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { createProductHandler, retrieveProductsHandler, deleteProductHandler } = require('./products')
const { movementHandler } = require('./movement')



const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
// TODO usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// TODO usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// TODO usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

const productRouter = Router()

productRouter.post('/product', jsonBodyParser, createProductHandler)
productRouter.get('/product', retrieveProductsHandler)
productRouter.delete('/product', deleteProductHandler)

const movementRouter = Router()

movementRouter.post('/movement', jsonBodyParser, movementHandler)

module.exports = {
  usersRouter,
  productRouter,
  movementRouter
}