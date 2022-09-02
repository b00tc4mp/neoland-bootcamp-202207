const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateUserEmailHandler, updateUserPasswordHandler } = require('./users')
const { createNoteHandler, updateNoteHandler, retrieveNotesHandler, deleteNoteHandler } = require('./notes')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

usersRouter.patch('/users/updateEmail', jsonBodyParser, updateUserEmailHandler)

usersRouter.patch('/users/updatePassword', jsonBodyParser, updateUserPasswordHandler)

const notesRouter = Router()

notesRouter.post('/notes', jsonBodyParser, createNoteHandler)

notesRouter.patch('/notes/:noteId', jsonBodyParser, updateNoteHandler )

notesRouter.get('/notes', retrieveNotesHandler)

notesRouter.delete('/notes/:noteId', deleteNoteHandler)



module.exports = {
    usersRouter,
    notesRouter
}