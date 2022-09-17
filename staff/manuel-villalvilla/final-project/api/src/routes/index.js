const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { retrieveAdsHandler, retrieveAdWithIdHandler } = require('./ads')
const { authenticateUserHandler, contactUserHandler } = require('./users')
const { verifyGoogleCaptchaHandler } = require('./utils')

const adsRouter = Router()

adsRouter.get('/ads', retrieveAdsHandler)

adsRouter.get('/ads/:adId', retrieveAdWithIdHandler)

const usersRouter = Router()

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.post('/users/contact', jsonBodyParser, contactUserHandler)

const utilsRouter = Router()

utilsRouter.post('/utils', jsonBodyParser, verifyGoogleCaptchaHandler)

module.exports = {
    adsRouter,
    usersRouter,
    utilsRouter
}