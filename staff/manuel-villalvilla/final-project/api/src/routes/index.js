const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { retrieveAdsHandler } = require('./ads')

const adsRouter = Router()

adsRouter.get('/ads', retrieveAdsHandler)

module.exports = {
    adsRouter
}