// import io from "socket.io-client";
import { useEffect, useState } from "react";
// const socket = io.connect("http://127.0.0.1:3002");

import { SOCKET } from "./SOCKET";

function SocketTest() {
  const sendMessage = () => {
    SOCKET.emit("send_message", { message, room });
  };

  // Room States
  const [room, setRoom] = useState("");

  // Message States
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") SOCKET.emit("join_room", { room });
  };

  useEffect(() => {
    SOCKET.on("received_message", (data) => {
      console.log("Client received:");
      console.log(data);
      setMessageReceived(data.message);
    });
  }, [SOCKET]);

  return (
    <div>
      {/* room */}
      <input
        type="text"
        placeholder="Room number..."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>Join</button>

      {/* message  */}
      <input
        type="text"
        placeholder="Write your message..."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMessage}>Send</button>
      <h1>Message:</h1>
      <p>{messageReceived}-</p>
    </div>
  );
}

export default SocketTest;
