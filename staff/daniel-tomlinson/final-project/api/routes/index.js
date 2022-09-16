const express = require("express");
const { Router, json } = express;
const jsonBodyParser = json();
const {
  registerUserHandler,
  authenticateUserHandler,
  retrieveUserHandler,
  updatePasswordHandler,
  updateFavoritesHandler,
} = require("./user");
const {
  createQuestionHandler,
  retrieveQuestionsHandler,
  retrieveQuestionsPublicHandler,
  retrieveQuestionForEditHandler,
  searchQuestionsHandler,
  searchQuestionsPublicHandler,
  updateQuestionTextHandler,
  updateQuestionEditHandler,
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

// usersRouter.patch("/users/password", jsonBodyParser, updatePasswordHandler);
usersRouter.patch("/users/details", jsonBodyParser, updatePasswordHandler);

usersRouter.patch("/users/favorites", jsonBodyParser, updateFavoritesHandler);

// TODO usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// TODO usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// TODO usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

const questionsRouter = Router();

questionsRouter.post("/questions", jsonBodyParser, createQuestionHandler);

questionsRouter.get("/questions", retrieveQuestionsHandler);

questionsRouter.get("/questions/public", retrieveQuestionsPublicHandler);

questionsRouter.patch(
  "/questions/:questionId/text",
  jsonBodyParser,
  updateQuestionTextHandler
);

questionsRouter.patch(
  "/questions/:questionId",
  jsonBodyParser,
  updateQuestionEditHandler
);

questionsRouter.get("/questions/search", searchQuestionsHandler);

questionsRouter.get("/questions/public/search", searchQuestionsPublicHandler);

questionsRouter.delete("/questions/:questionId", deleteQuestionHandler);

questionsRouter.get("/questions/:questionId", retrieveQuestionForEditHandler);

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
