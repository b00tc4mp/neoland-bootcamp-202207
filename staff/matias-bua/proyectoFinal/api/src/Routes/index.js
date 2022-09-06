const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
// const { createNoteHandler, retrieveNotesHandler, updateNoteTextHandler } = require('./notes')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
// TODO usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// TODO usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// TODO usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

// const postRouter = Router()

// notesRouter.post('/post', jsonBodyParser, createNoteHandler)
// notesRouter.get('/post', retrieveNotesHandler)
// notesRouter.patch('/post/:postId', jsonBodyParser, updateNoteTextHandler)

module.exports = {
    usersRouter
    // postRouter
}