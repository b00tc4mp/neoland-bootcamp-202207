const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { createNoteHandler, updateNoteTextHandler, deleteNoteHandler } = require('./notes')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

usersRouter.patch('/users/email/',jsonBodyParser, updateUserEmailHandler)

usersRouter.patch('/users/password/',jsonBodyParser, updateUserPasswordHandler)

const notesRouter = Router()

notesRouter.post('/notes', jsonBodyParser, createNoteHandler)

notesRouter.patch('/notes/:noteId', jsonBodyParser, updateNoteTextHandler)

notesRouter.delete('/notes/:noteId', deleteNoteHandler)

module.exports = {
    usersRouter,
    notesRouter
}