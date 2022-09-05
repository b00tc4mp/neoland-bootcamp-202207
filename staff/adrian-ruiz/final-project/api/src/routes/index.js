const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { registerCompanyHandler } = require('./companies')
const { createInventoryItemHandler, updateInventoryItemHandler } = require('./inventory')

const companiesRouter = Router()

companiesRouter.post('/companies', jsonBodyParser, registerCompanyHandler)

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.get('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

const inventoryRouter = Router()

inventoryRouter.post('/item', jsonBodyParser, createInventoryItemHandler)

inventoryRouter.patch('/item/:itemId', jsonBodyParser, updateInventoryItemHandler)


module.exports = {
    usersRouter,
    companiesRouter,
    inventoryRouter
}