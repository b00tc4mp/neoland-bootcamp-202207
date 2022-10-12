const { connect, disconnect } = require("mongoose");
const express = require("express");
const { NotFoundError, FormatError } = require("./errors");
const { registerUser, authenticateUser, retrieveUser } = require("./logic");
const logger = require("./logger")(module);
const {
  verify,
  JsonWebTokenError,
  TokenExpiredError,
  NotBeforeError,
} = require("jsonwebtoken");

api.post("/api/notes", jsonBodyParser, (req, res) => {
  try {
    const {
      headers: { authorization },
    } = req;

    const token = authorization.substring(7);

    const payload = verify(token, "Dan: copié el código de Mónica!");

    const { sub: userId } = payload;

    const {
      body: { text },
    } = req;

    createNote(userId, text)
      .then(() => res.status(201).send())
      .catch((error) => {
        if (error instanceof NotFoundError)
          res.status(404).json({ error: error.message });
        else res.status(500).json({ error: "system error" });

        logger.error(error);

        return;
      });
  } catch (error) {
    if (error instanceof TypeError || error instanceof FormatError)
      res.status(400).json({ error: error.message });
    else if (
      error instanceof JsonWebTokenError ||
      error instanceof TokenExpiredError ||
      error instanceof NotBeforeError
    )
      res.status(401).json({ error: "token not valid" });
    else res.status(500).json({ error: "system error" });

    logger.error(error);
  }
});
