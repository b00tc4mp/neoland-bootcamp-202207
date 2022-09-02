const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { homePageHandler } = require('./home')
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler, updateEmailHandler, updatePasswordHandler } = require('./users')
const { createNoteHandler, retrieveNotesHandler, updateNoteHandler, deleteNoteHandler } = require('./notes')
const cookieParser = require('cookie-parser') // parsea cookies del req y las pone en req.cookies --> middleware function

const homeRouter = Router()

homeRouter.get('/', cookieParser, homePageHandler) // para mis pruebas, pero no sirve. la home se pide al servidor react del cliente

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)

usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)

usersRouter.get('/users', retrieveUserHandler)

usersRouter.patch('/users', jsonBodyParser, updateEmailHandler)

usersRouter.patch('/users/auth', jsonBodyParser, updatePasswordHandler)

const notesRouter = Router()

notesRouter.post('/notes', createNoteHandler)

notesRouter.get('/notes', retrieveNotesHandler)

notesRouter.patch('/notes', updateNoteHandler)

notesRouter.delete('/notes/:noteId', deleteNoteHandler)

module.exports = {
    homeRouter,
    usersRouter,
    notesRouter
}