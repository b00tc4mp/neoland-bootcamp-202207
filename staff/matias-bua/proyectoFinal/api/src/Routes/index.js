const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { createAuction } = require('./auction')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
// TODO usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// TODO usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// TODO usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

const auctionRouter = Router()

auctionRouter.post('/users/auction', jsonBodyParser, createAuction)
// auctionRouter.get('/auction', retrieveauctionHandler)
// auctionRouter.patch('/auction/:auctionId', jsonBodyParser, updateNoteTextHandler)

module.exports = {
    usersRouter,
    auctionRouter
}