import { useState, useEffect } from "react";

import Teacher1StartClass from "../screens/teacher/Teacher-1-StartClass";
import Teacher2PlayersConnected from "../screens/teacher/Teacher-2-PlayersConnected";
import Teacher3CreateQuestion from "../screens/teacher/Teacher-3-CreateQuestion";
import Teacher4Incomingresponses from "../screens/teacher/Teacher-4-IncomingResponses";
import Teacher5MarkResponses from "../screens/teacher/Teacher-5-MarkResponses";
import Teacher6ResponseStats from "../screens/teacher/Teacher-6-ResponseStats";
import Teacher7ClassClosed from "../screens/teacher/Teacher-7-ClassClosed";

function QuizTeacher({ socket }) {
  const [gameScreen, setGameScreen] = useState("Teacher1StartClass");
  const [nameOfClass, setNameOfClass] = useState("");
  const [nickname, setNickname] = useState("");
  const [pin, setPin] = useState("");
  const [timeLimit, setTimeLimit] = useState("30 seconds");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleLeaveClick = () => {};

  const handleScreenChangeT1 = (gameScreen, nameOfClass, pin) => {
    setGameScreen(gameScreen);
    setNameOfClass(nameOfClass);
    setPin(pin);
  };

  useEffect(() => {
    socket.on("S1.5", (data) => {
      console.log("S1 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });

    socket.on("S4.5", (data) => {
      console.log("S4 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });
  });

  return (
    <div className="game-screen">
      <header className="game-screen-header">
        <span className="material-symbols-outlined button-icon">
          arrow_back_ios_new
        </span>
        <h1 className="app-title">App Name</h1>
        <button
          type="menu"
          className="material-symbols-outlined  button-icon"
          onClick={handleLeaveClick}
        >
          exit_to_app
        </button>
      </header>
      <main className="game-screen-main">
        {/* <Teacher1StartClass /> */}
        {gameScreen === "Teacher1StartClass" && (
          <Teacher1StartClass
            handleScreenChangeT1={handleScreenChangeT1}
            socket={socket}
          />
        )}
        {/* <Teacher2PlayersConnected /> */}
        {gameScreen === "Teacher2PlayersConnected" && (
          <Teacher2PlayersConnected nameOfClass={nameOfClass} pin={pin} />
        )}
        {/* <Teacher3CreateQuestion /> */}
        {gameScreen === "Teacher3CreateQuestion" && (
          <Teacher3CreateQuestion nickname={nickname} socket={socket} />
        )}
        {/* <Teacher4Incomingresponses /> */}
        {gameScreen === "Teacher4IncomingResponse" && (
          <Teacher4Incomingresponses />
        )}
        {/* <Teacher5MarkResponses /> */}
        {gameScreen === "Teacher5MarkResponses" && <Teacher5MarkResponses />}
        {/* <Teacher6ResponseStats /> */}
        {gameScreen === "Teacher6ResponseStats" && <Teacher6ResponseStats />}
        {/* <Teacher7ClassClosed /> */}
        {gameScreen === "Teacher7ClassClosed" && <Teacher7ClassClosed />}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default QuizTeacher;
