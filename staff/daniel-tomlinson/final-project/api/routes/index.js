const express = require("express");
const { Router, json } = express;
const jsonBodyParser = json();
const {
  registerUserHandler,
  authenticateUserHandler,
  retrieveUserHandler,
} = require("./user");
const {
  createQuestionHandler,
  retrieveQuestionsHandler,
  searchQuestionsHandler,
  updateQuestionTextHandler,
  deleteQuestionHandler,
} = require("./questions");
const {
  createGameCodeHandler,
  retrieveGameCodeHandler,
} = require("./gameCode");
// const { createQuestionHandler } = require("./questions");

const usersRouter = Router();

usersRouter.post("/users", jsonBodyParser, registerUserHandler);

usersRouter.post("/users/auth", jsonBodyParser, authenticateUserHandler);

usersRouter.get("/users", retrieveUserHandler);

// TODO usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// TODO usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// TODO usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

const questionsRouter = Router();

// questionsRouter.post("/questions", jsonBodyParser, createQuestionHandler);
questionsRouter.post("/questions", jsonBodyParser, createQuestionHandler);

questionsRouter.get("/questions", retrieveQuestionsHandler);

questionsRouter.patch(
  "/questions/:questionId",
  jsonBodyParser,
  updateQuestionTextHandler
);

questionsRouter.get("/questions/search", searchQuestionsHandler);

questionsRouter.delete("/questions/:questionId", deleteQuestionHandler);

const gameCodesRouter = Router();

gameCodesRouter.post("/gameCodes", jsonBodyParser, createGameCodeHandler);

gameCodesRouter.get("/gameCodes", jsonBodyParser, retrieveGameCodeHandler);

// const questionsRouter = Router();

module.exports = {
  usersRouter,
  questionsRouter,
  gameCodesRouter,
  questionsRouter,
};
