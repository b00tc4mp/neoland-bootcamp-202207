const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler } = require('./users')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)


module.exports = {
    usersRouter,
}