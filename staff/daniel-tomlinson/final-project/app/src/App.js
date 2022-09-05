import "./App.css";
// import ScreenTemplate1 from "./screens/ScreenTemplate.1";
import QuizTemplate from "./Pages/QuizTemplate";
import SocketTest from "./screens/SocketTest";
// import io from "socket.io-client";
// const socket = io.connect("http://127.0.0.1:3002");

function App() {
  return (
    <div className="App">
      {/* <ScreenTemplate1 /> */}
      {/* <SocketTest /> */}
      <QuizTemplate />
    </div>
  );
}

export default App;
