/* require("dotenv").config();

const { connect, disconnect } = require("mongoose");
const { createLogger } = require("./utils");
const logger = createLogger(module);
const cors = require("cors");
const { name, version } = require("./package.json");

const {
  env: { MONGO_URL, PORT },
} = process;

connect(MONGO_URL)
  .then(() => {
    logger.info("db connected");

    const express = require("express");

    const api = express();

    const { usersRouter, notesRouter } = require("./routes");

    api.use(cors());

    api.get("/", (req, res) => res.send(`${name} v${version} ;)`));

    api.use("/api", usersRouter, notesRouter);

    api.listen(PORT, () =>
      logger.info(`${name} v${version} started and listening in port ${PORT}`)
    );

    process.on("SIGINT", () => {
      if (!process.stopped) {
        process.stopped = true;

        logger.info("\napi stopped");

        disconnect().then(() => {
          logger.info("db disconnected");

          process.exit(0);
        });
      }
    });
  })
  .catch((error) => {
    logger.error(error);
  }); */

require("dotenv").config();
const express = require("express");
const { createServer } = require("http");

const { connect, disconnect } = require("mongoose");
const createLogger = require("./utils/createLogger");
const logger = createLogger(module);
const cors = require("cors");
const { name, version } = require("./package.json");

const {
  env: { MONGO_URL, PORT },
} = process;

const api = express();
const server = createServer(api);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

connect(MONGO_URL)
  .then(() => {
    console.log(`DB connected on ${MONGO_URL}`);
  })
  .then(() => {
    io.on("connection", (socket) => {
      console.log(`User connected: ${socket.id}`);

      /* socket.on("join_room", (data) => {
        socket.join(data);
      }); */

      socket.on("T1", (data) => {
        console.log("T1 server");
        console.log(data);
        socket.broadcast.emit("T1.5", data);
      });

      socket.on("T2", (data) => {
        console.log("T2 server");
        console.log(data);
        socket.broadcast.emit("T2.5", data);
      });

      socket.on("T3", (data) => {
        console.log("T3 server");
        console.log(data);
        // socket.broadcast.emit("T3.5", data);

        socket.to("1").emit("T3.5", data);
      });

      socket.on("T4", (data) => {
        console.log("T4 server");
        console.log(data);
        socket.to("1").emit("T4.5", data);
      });

      socket.on("T5", (data) => {
        console.log("T5 server");
        console.log(data);
        socket.to("1").emit("T5.5", data);
      });

      socket.on("T6", (data) => {
        console.log("T6 server");
        console.log(data);
        socket.to("1").emit("T6.5", data);
      });

      socket.on("S1", (data) => {
        console.log("S1 server");
        console.log(data);
        socket.join("1");
        console.log("joined room");
        socket.broadcast.emit("S1.5", data);
      });

      socket.on("S4", (data) => {
        console.log("S4 server");
        console.log(data);
        socket.broadcast.emit("S4.5", data);
      });
    });
  })
  .then(() => {
    logger.info("db connected");

    const { usersRouter, notesRouter, gameCodesRouter } = require("./routes");

    api.use(cors());

    /*api.use((_, res, next) => {
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.setHeader("Access-Control-Allow-Methods", "*");
      res.setHeader("Access-Control-Allow-Origin", "*");

      next();
    })*/ api.get("/", (req, res) => res.send(`${name} v${version} ;)`));

    api.use("/api", usersRouter, notesRouter, gameCodesRouter);

    server.listen(PORT, () => console.log(`API running on port ${PORT}`));

    // server.listen(3001, () => {
    //   console.log("server is running");
    // });

    process.on("SIGINT", () => {
      if (!process.stopped) {
        process.stopped = true;

        logger.info("\napi stopped");

        disconnect().then(() => {
          logger.info("db disconnected");

          process.exit(0);
        });
      }
    });
  })
  .catch((error) => {
    logger.error(error);
  });
