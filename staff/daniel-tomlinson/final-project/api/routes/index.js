const express = require("express");
const { Router, json } = express;
const jsonBodyParser = json();
const {
  registerUserHandler,
  authenticateUserHandler,
  retrieveUserHandler,
} = require("./user");
const { createNoteHandler, retrieveNotesHandler } = require("./notes");
const { createGameHandler } = require("./game");

const usersRouter = Router();

usersRouter.post("/users", jsonBodyParser, registerUserHandler);

usersRouter.post("/users/auth", jsonBodyParser, authenticateUserHandler);

usersRouter.get("/users", retrieveUserHandler);

const notesRouter = Router();

notesRouter.post("/notes", jsonBodyParser, createNoteHandler);

notesRouter.get("/notes", retrieveNotesHandler);

const gamesRouter = Router();

gamesRouter.post("/games", jsonBodyParser, createGameHandler);

module.exports = {
  usersRouter,
  notesRouter,
  gamesRouter,
};
