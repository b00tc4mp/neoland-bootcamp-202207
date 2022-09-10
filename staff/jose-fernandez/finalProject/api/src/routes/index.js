const express = require('express')
const {Router, json} = express
const jsonBodyParser = json()
const {registerUserHandler, authenticateUserHandler, retrieveUserHandler,registerAnonymousUserHandler} = require('./users')
const { searchProductHandler,retrieveProductsHandler} = require('./products')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/usersAnonymous', jsonBodyParser, registerAnonymousUserHandler)

usersRouter.post('/users/auth',jsonBodyParser,authenticateUserHandler)

usersRouter.get('/users',retrieveUserHandler)
// TODO usersRouter.patch('/users/email',jsonBodyParser,updateUserEmailHandler)
// TODO usersRouter.patch('/users/password',jsonBodyParser,updateUserPasswordHandler)
// TODO usersRouter.patch('/users/name',jsonBodyParser,updateUserNameHandler)


const productRouter = Router()
productRouter.get('/products/search',searchProductHandler)
productRouter.get('/products',retrieveProductsHandler)
// notesRouter.post('/notes', jsonBodyParser,createNoteHandler)
// notesRouter.get('/notes', retrieveNotesHandler)
// notesRouter.patch('/notes/:noteId', jsonBodyParser,updateNoteTextHandler)

module.exports={
    usersRouter,
    productRouter
    // ,
    // notesRouter
}