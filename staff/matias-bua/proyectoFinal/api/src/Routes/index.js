const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserPasswordHandler, updateUserProfileHandler } = require('./users')
const { createAuctionHandler, retrieveAuctionHandler } = require('./auction')
const { createBidHandler } = require('./bids')


const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
usersRouter.patch('/users/password',jsonBodyParser, updateUserPasswordHandler)
usersRouter.patch('/users', jsonBodyParser, updateUserProfileHandler)
// TODO usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

const auctionRouter = Router()

auctionRouter.post('/auction', jsonBodyParser, createAuctionHandler)
auctionRouter.get('/auction', retrieveAuctionHandler)
auctionRouter.patch('/auction/:auctionId', jsonBodyParser, createBidHandler)

// const bidsRouter = Router()

// bidsRouter.patch('/auction/bids', jsonBodyParser, createBidHandler)


module.exports = {
    usersRouter,
    auctionRouter
    // bidsRouter
}