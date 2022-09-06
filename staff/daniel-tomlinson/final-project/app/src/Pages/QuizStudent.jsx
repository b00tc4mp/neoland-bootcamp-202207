import { useState, useEffect } from "react";

import Student1EnterClass from "../screens/student/Student-1-EnterClass";
import Student2Connected from "../screens/student/Student-2-Connected";
import Student3GetReady from "../screens/student/Student-3-GetReady";
import Student4ResponseInput from "../screens/student/Student-4-ResponseInput";
import Student5WaitingForFeedback from "../screens/student/Student-5-WaitingForFeedback";
import Student6Correct from "../screens/student/Student-6-Correct";
import Student7Incorrect from "../screens/student/Student-7-Incorrect";
import Student8WaitingForQuestion from "../screens/student/Student-8-WaitingForQuestion";

function QuizStudent({ socket }) {
  const [gameScreen, setGameScreen] = useState("Student1EnterClass");
  const [nameOfClass, setNameOfClass] = useState("");
  const [nickname, setNickname] = useState("");
  const [pin, setPin] = useState("");
  const [timeLimit, setTimeLimit] = useState("30 seconds");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleLeaveClick = () => {};

  const handleScreenChangeS1 = (gameScreen, nickname) => {
    setGameScreen(gameScreen);
    setNickname(nickname);
  };

  useEffect(() => {
    socket.on("T1.5", (data) => {
      console.log("T1 data received by client:");
      console.log(data);
      setNameOfClass(data.nameOfClass);
      setPin(data.pin);
    });

    socket.on("T3.5", (data) => {
      console.log("T3 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });

    socket.on("T4.5", (data) => {
      console.log("T4 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });

    socket.on("T5.5", (data) => {
      console.log("T5 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });

    socket.on("T6.5", (data) => {
      console.log("T6 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });
  }, []);

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
        {/* <Student1EnterClass /> */}
        {gameScreen === "Student1EnterClass" && (
          <Student1EnterClass
            nameOfClass={nameOfClass}
            pin={pin}
            handleScreenChangeS1={handleScreenChangeS1}
            socket={socket}
          />
        )}
        {/* <Student2Connected /> */}
        {gameScreen === "Student2Connected" && (
          <Student2Connected nickname={nickname} />
        )}
        {/* <Student3GetReady /> */}
        {gameScreen === "Student3GetReady" && <Student3GetReady />}
        {/* <Student4ResponseInput /> */}
        {gameScreen === "Student4ResponseInput" && <Student4ResponseInput />}
        {/* <Student5WaitingForFeedback /> */}
        {gameScreen === "Student5WaitingForFeedback" && (
          <Student5WaitingForFeedback />
        )}
        {gameScreen === "Student6Correct" && <Student6Correct />}
        {/* <Student7Incorrect /> */}
        {gameScreen === "Student7Incorrect" && <Student7Incorrect />}
        {/* <Student8WaitingForQuestion /> */}
        {gameScreen === "Student8WaitingForQuestion" && (
          <Student8WaitingForQuestion />
        )}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default QuizStudent;
