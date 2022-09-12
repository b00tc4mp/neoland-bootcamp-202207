const express = require("express");
const { Router, json } = express;
const jsonBodyParser = json();
const {
  registerUserHandler,
  authenticateUserHandler,
  retrieveUserHandler,
} = require("./user");
const { createNoteHandler, retrieveNotesHandler } = require("./notes");
const {
  createGameCodeHandler,
  retrieveGameCodeHandler,
} = require("./gameCode");
const { createQuestionHandler } = require("./questions");

const usersRouter = Router();

usersRouter.post("/users", jsonBodyParser, registerUserHandler);

usersRouter.post("/users/auth", jsonBodyParser, authenticateUserHandler);

usersRouter.get("/users", retrieveUserHandler);

const notesRouter = Router();

notesRouter.post("/notes", jsonBodyParser, createNoteHandler);

notesRouter.get("/notes", retrieveNotesHandler);

const gameCodesRouter = Router();

gameCodesRouter.post("/gameCodes", jsonBodyParser, createGameCodeHandler);

gameCodesRouter.get("/gameCodes", jsonBodyParser, retrieveGameCodeHandler);

const questionsRouter = Router();

questionsRouter.post("/questions", jsonBodyParser, createQuestionHandler);

module.exports = {
  usersRouter,
  notesRouter,
  gameCodesRouter,
  questionsRouter,
};
