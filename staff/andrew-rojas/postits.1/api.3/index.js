const { connect, disconnect } = require("mongoose")
const express = require("express")
const { DuplicityError, NotFoundError, AuthError, FormatError, SystemError } = require("./errors")
const { registerUser, authenticateUser } = require("./logic")

connect("mongodb://localhost:27017/postits")
  .then(() => {
    console.log("db connected")

    const api = express()

    const jsonBodyParser = express.json(); 

    api.post("/api/users", jsonBodyParser, (req, res) => {
      try {
        const { body: { name, email, password } } = req

        registerUser(name, email, password)
          .then(() => res.status(201).send())
          .catch((error) => {
            if (error instanceof DuplicityError)
              res.status(409).json({ error: error.message })
            else 
              res.status(500).json({ error: "system error" })

            return
          })
      } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError)
          res.status(400).json({ error: error.message })
        else 
          res.status(500).json({ error: "system error" })
      }
    })

    api.post('/api/users/auth', jsonBodyParser, (req, res) => {
      try {
        const { body: { email, password } } = req

        authenticateUser(email, password)
          .then(userId => {
            //TODO jwt 

            res.json({ userId })
          })
          .catch(error => {
            if (error instanceof NotFoundError || error instanceof AuthError)
              res.status(401).json({ error: "wrong credentials" })
            else 
              res.status(500).json({ error: "system error" })

            return
          })
      } catch (error) {
        if (error instanceof TypeError || error instanceof FormatError)
          res.status(400).json({ error: error.message})
        else
          res.status(500).json({ error: "system error" })
      }
    })

    api.listen(8080, () => console.log("api started"))

    process.on("SIGINT", () => {
      if (!process.stopped) {
        process.stopped = true;

        console.log("\napi stopped")

        disconnect()
          .then(() => {
            console.log("db disconnected")

            process.exit(0);
          })
      }
    })
  })
  .catch((error) => {
    console.error(error);
  });
