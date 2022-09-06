const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { registerCompanyHandler, updateCompanyDetailsHandler, deleteCompanyHandler } = require('./companies')
const { createInventoryItemHandler, updateInventoryItemHandler, deleteInventoryItemHandler, retrieveStockHandler } = require('./inventory')

const companiesRouter = Router()

companiesRouter.post('/companies', jsonBodyParser, registerCompanyHandler)

companiesRouter.patch('/companies', jsonBodyParser, updateCompanyDetailsHandler)

companiesRouter.delete('/companies', jsonBodyParser, deleteCompanyHandler)

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.get('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)

usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)

const inventoryRouter = Router()

inventoryRouter.post('/items', jsonBodyParser, createInventoryItemHandler)

inventoryRouter.get('/items', retrieveStockHandler)

inventoryRouter.patch('/items/:itemId', jsonBodyParser, updateInventoryItemHandler)

inventoryRouter.delete('/items/:itemId', deleteInventoryItemHandler)


module.exports = {
    usersRouter,
    companiesRouter,
    inventoryRouter
}