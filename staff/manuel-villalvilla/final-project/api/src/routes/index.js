const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { retrieveAdsHandler } = require('./ads')
const { authenticateUserHandler } = require('./users')

const adsRouter = Router()

adsRouter.get('/ads', retrieveAdsHandler)

const usersRouter = Router()

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

module.exports = {
    adsRouter,
    usersRouter
}