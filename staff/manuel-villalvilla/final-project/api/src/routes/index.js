const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { retrieveAdsHandler, retrieveAdWithIdHandler } = require('./ads')
const { authenticateUserHandler } = require('./users')

const adsRouter = Router()

adsRouter.get('/ads', retrieveAdsHandler)

adsRouter.get('/ads/:adId', retrieveAdWithIdHandler)

const usersRouter = Router()

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

module.exports = {
    adsRouter,
    usersRouter
}