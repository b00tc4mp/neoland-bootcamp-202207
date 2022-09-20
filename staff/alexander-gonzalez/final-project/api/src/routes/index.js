const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { searchCitiesHandler, retrieveCityHandler } = require('./cities')


const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)

const citiesRouter = Router()

citiesRouter.get('/cities/search', searchCitiesHandler)
citiesRouter.get('/cities/:cityId', retrieveCityHandler)

module.exports = {
    usersRouter,
    citiesRouter
}