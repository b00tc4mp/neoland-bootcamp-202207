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

  socket.on("T1", (data) => {
    console.log("T1 server");
    console.log(data);
    socket.broadcast.emit("T1.5", data);
  });

  /*   socket.on("T2", (data) => {
    console.log("T2 server");
    console.log(data);
    socket.broadcast.emit("T2.5", data);
  });
 */
  socket.on("T3", (data) => {
    console.log("T3 server");
    console.log(data);
    socket.broadcast.emit("T3.5", data);
  });

  socket.on("T4", (data) => {
    console.log("T4 server");
    console.log(data);
    socket.broadcast.emit("T4.5", data);
  });

  socket.on("T5", (data) => {
    console.log("T5 server");
    console.log(data);
    socket.broadcast.emit("T5.5", data);
  });

  socket.on("T6", (data) => {
    console.log("T6 server");
    console.log(data);
    socket.broadcast.emit("T6.5", data);
  });

  /*   socket.on("T7", (data) => {
    console.log("T7 server");
    console.log(data);
    socket.broadcast.emit("T7.5", data);
  }); */

  socket.on("S1", (data) => {
    console.log("S1 server");
    console.log(data);
    socket.broadcast.emit("S1.5", data);
  });

  /*   socket.on("S2", (data) => {
    console.log("S2 server");
    console.log(data);
    socket.broadcast.emit("S2.5", data);
  }); */

  /* socket.on("S3", (data) => {
    console.log("S3 server");
    console.log(data);
    socket.broadcast.emit("S3.5", data);
  }); */

  socket.on("S4", (data) => {
    console.log("S4 server");
    console.log(data);
    socket.broadcast.emit("S4.5", data);
  });

  /* socket.on("S5", (data) => {
    console.log("S5 server");
    console.log(data);
    socket.broadcast.emit("S5.5", data);
  }); */

  /* socket.on("S6", (data) => {
    console.log("S6 server");
    console.log(data);
    socket.broadcast.emit("S6.5", data);
  }); */

  /* socket.on("S7", (data) => {
    console.log("S7 server");
    console.log(data);
    socket.broadcast.emit("S7.5", data);
  }); */

  /* socket.on("S8", (data) => {
    console.log("S8 server");
    console.log(data);
    socket.broadcast.emit("S8.5", data);
  }); */

  /* socket.on("send_message", (data) => {
    console.log("server received:");
    console.log(data);
    console.log(data.room);
    socket.broadcast.emit("received_message", data); */
  // socket.to(data.room).emit("received_message", data);
  // });
  //   socket.on("send_message", (data) => {
  //     console.log(data);
  //     socket.broadcast.emit("received_message", data);
  //   });
});

server.listen(3001, () => {
  console.log("server is running");
});
