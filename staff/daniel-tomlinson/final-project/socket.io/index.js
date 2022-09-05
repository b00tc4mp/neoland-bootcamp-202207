const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
// const createLogger = require("./utils/createLogger");
// const logger = createLogger(module);

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("1", (data) => {
    console.log("game code generated");
    console.log(data);
    // socket.broadcast.emit("1.5", data);
    socket.emit("1.5", data);
  });

  socket.on("send_message", (data) => {
    console.log("server received:");
    console.log(data);
    console.log(data.room);
    socket.broadcast.emit("received_message", data);
    // socket.to(data.room).emit("received_message", data);
  });
  //   socket.on("send_message", (data) => {
  //     console.log(data);
  //     socket.broadcast.emit("received_message", data);
  //   });
});

server.listen(3001, () => {
  console.log("server is running");
});
