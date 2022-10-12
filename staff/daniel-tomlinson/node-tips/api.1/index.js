const express = require("express");

const api = express();

const { readdir, readFile } = require("fs");
const { registerUser, authenticateUser } = require("./logic");
const { DuplicityError, AuthError, FormatError } = require("./errors");

const jsonBodyParser = express.json(); // ... const body = JSON.parse(json) -> req.body = body

api.post("/api/users", jsonBodyParser, (req, res) => {
  //const body = req.body
  //const { name, email, password } = body
  try {
    // Fully desctructured version
    const {
      body: { name, email, password },
    } = req;

    // TODO check if user (email) already exists

    registerUser(name, email, password, (error) => {
      if (error) {
        if (error instanceof DuplicityError)
          res.status(409).json({ error: error.message });
        else res.status(500).json({ error: error.message });

        return;
      }

      res.status(201).send();
    });
  } catch (error) {
    if (error instanceof TypeError || error instanceof FormatError)
      res.status(400).json({ error: error.message });
    else res.status(500).json({ error: error.message });
  }
});

api.post("/api/users/auth", jsonBodyParser, (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    authenticateUser(email, password, (error, userId) => {
      if (error) {
        if (error instanceof AuthError)
          res.status(401).json({ error: error.message });
        else res.status(500).json({ error: error.message });

        return;
      }
      res.status(200).json({ userId: user.id });
    });
  } catch (error) {
    if (error instanceof Typeerror || error instanceof FormatError)
      res.status(400).json({ error: error.message });
    else res.status(500).json({ error: error.message });
  }
});

api.listen(8080, () => console.log("api started"));
