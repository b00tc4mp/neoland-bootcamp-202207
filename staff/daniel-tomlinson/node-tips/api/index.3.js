const express = require("express");

const api = express();

const { writeFile, readdir, readFile } = require("fs");

const jsonBodyParser = express.json(); // ... const body = JSON.parse(json) -> req.body = body

// let sessionToken = "";

api.post("/api/users", jsonBodyParser, (req, res) => {
  //const body = req.body
  //const { name, email, password } = body
  try {
    // Fully desctructured version
    const {
      body: { name, email, password },
    } = req;

    // TODO check if user (email) already exists

    readdir("./data/users", (error, files) => {
      try {
        if (error) {
          res.status(500).json({ error: error.message });

          return;
        }
        if (files.length) {
          let index = 0;
          let file = files[index];

          (function iterate() {
            readFile(`./data/users/${file}`, "utf8", (error, json) => {
              if (error) {
                res.status(500).json({ error: error.message });

                return;
              }

              const user = JSON.parse(json);

              if (user.email === email) {
                res
                  .status(409)
                  .json({ error: `user with email ${email} already exists` });

                return;
              }

              index++;

              if (index < files.length) {
                file = files[index];

                iterate();

                return;
              }

              const newUser = {
                id: `user-${Math.round(Math.random() * Date.now())}`,
                name,
                email,
                password,
              };

              const newJson = JSON.stringify(newUser);

              writeFile(
                `./data/users/${newUser.id}.json`,
                newJson,
                "utf8",
                (error) => {
                  if (error) {
                    res.status(500).json({ error: error.message });

                    return;
                  }

                  res.status(201).send();
                }
              );
            });
          })(); // iife
          return;
        }
        const newUser = {
          id: `user-${Math.round(Math.random() * Date.now())}`,
          name,
          email,
          password,
        };

        const newJson = JSON.stringify(newUser);

        writeFile(
          `./data/users/${newUser.id}.json`,
          newJson,
          "utf8",
          (error) => {
            if (error) {
              res.status(500).json({ error: error.message });

              return;
            }

            res.status(201).send();
          }
        );
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

api.post("/api/users/auth", jsonBodyParser, (req, res) => {
  const {
    body: { email, password },
  } = req;

  // TODO check if user (email) already exists

  readdir("./data/users", (error, files) => {
    if (error) {
      res.status(500).json({ error: error.message });

      return;
    }

    if (files.length) {
      let index = 0;
      let file = files[index];

      (function iterate() {
        readFile(`./data/users/${file}`, "utf8", (error, json) => {
          if (error) {
            res.status(500).json({ error: error.message });

            return;
          }

          const user = JSON.parse(json);

          if (user.email === email)
            if (user.password === password) {
              res.status(200).json({ userId: user.id });

              return;
            } else {
              res.status(401).json({ error: "wrong credentials" });

              return;
            }

          index++;

          if (index < files.length) {
            file = files[index];

            iterate();

            return;
          }
        });
      })(); // iife

      return;
    }
    res.status(401).json({ error: "wrong credentials" });
  });
});

api.listen(8080, () => console.log("api started"));
