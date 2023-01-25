const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserPasswordHandler, updateUserProfileHandler } = require('./users')
const { createAuctionHandler, retrieveAuctionHandler, retrieveUserAuctionsHandler } = require('./auction')
const { createBidHandler } = require('./bids')


const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
usersRouter.patch('/users/password',jsonBodyParser, updateUserPasswordHandler)
usersRouter.patch('/users/', jsonBodyParser, updateUserProfileHandler)


const auctionRouter = Router()

auctionRouter.post('/auction', jsonBodyParser, createAuctionHandler)
auctionRouter.get('/auction', retrieveAuctionHandler)
auctionRouter.get('/auction/:authorId', retrieveUserAuctionsHandler)
auctionRouter.patch('/auction/:auctionId', jsonBodyParser, createBidHandler)


module.exports = {
    usersRouter,
    auctionRouter
  
}