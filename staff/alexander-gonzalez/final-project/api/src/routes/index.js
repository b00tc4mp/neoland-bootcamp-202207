const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler} = require('./users')
const { searchCitiesHandler, retrieveCityHandler, retrieveFavoritePlacesHandler, deleteFavoritePlaceHandler } = require('./cities')
// const {retrieveFavoritePlacesHandler} = require('./places')
const  { toggleFavoritePlaceHandler } = require('./users')



const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
usersRouter.patch('/users', jsonBodyParser, toggleFavoritePlaceHandler)
 

const citiesRouter = Router()

// citiesRouter.patch('/cities', addFavoritesHandler)
citiesRouter.get('/cities/search', searchCitiesHandler)
citiesRouter.get('/cities', retrieveFavoritePlacesHandler)
citiesRouter.get('/cities/:cityId', retrieveCityHandler)
// usersRouter.delete('/cities/favorites/:favoritesId',  deleteFavoritePlaceHandler)
// citiesRouter.delete('/cities/:placeId', deleteFavoritePlaceHandler)



const placesRouter = Router()

// placesRouter.get('/places', retrieveFavoritePlacesHandler)

module.exports = {
    usersRouter,
    citiesRouter,
    placesRouter,
}