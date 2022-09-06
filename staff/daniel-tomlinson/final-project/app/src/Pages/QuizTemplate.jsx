import { useState } from "react";

import Student1EnterClass from "../screens/student/Student-1-EnterClass";
import Student2Connected from "../screens/student/Student-2-Connected";
import Student3GetReady from "../screens/student/Student-3-GetReady";
import Student4ResponseInput from "../screens/student/Student-4-ResponseInput";
import Student5WaitingForFeedback from "../screens/student/Student-5-WaitingForFeedback";
import Student6Correct from "../screens/student/Student-6-Correct";
import Student7Incorrect from "../screens/student/Student-7-Incorrect";
import Student8WaitingForQuestion from "../screens/student/Student-8-WaitingForQuestion";

import Teacher1StartClass from "../screens/teacher/Teacher-1-StartClass";
import Teacher2PlayersConnected from "../screens/teacher/Teacher-2-PlayersConnected";
import Teacher3CreateQuestion from "../screens/teacher/Teacher-3-CreateQuestion";
import Teacher4Incomingresponses from "../screens/teacher/Teacher-4-IncomingResponses";
import Teacher5MarkResponses from "../screens/teacher/Teacher-5-MarkResponses";
import Teacher6ResponseStats from "../screens/teacher/Teacher-6-ResponseStats";
import Teacher7ClassClosed from "../screens/teacher/Teacher-7-ClassClosed";

import TeacherStudent from "../screens/app/TeacherStudent";
import { SOCKET } from "../screens/SOCKET";

function QuizTemplate() {
  const [gameScreen, setGameScreen] = useState("TeacherStudent");
  const [nameOfClass, setNameOfClass] = useState("");
  const [nickname, setNickname] = useState("");
  const [pin, setPin] = useState("");
  const [timeLimit, setTimeLimit] = useState("30 seconds");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  // setGameScreen("Teacher1StartClass");

  const handleLeaveClick = () => {};

  const handleStartStudent = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleStartTeacher = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeT1 = (gameScreen, nameOfClass, pin) => {
    setGameScreen(gameScreen);
    setNameOfClass(nameOfClass);
    setPin(pin);
  };

  const handleScreenChangeS1 = (gameScreen, nickname) => {
    setGameScreen(gameScreen);
    setNickname(nickname);
  };

  SOCKET.on("T1.5", (data) => {
    console.log("T1 data received by client:");
    console.log(data);
    setNameOfClass(data.nameOfClass);
    setPin(data.pin);
    // setGameScreen(data.gameScreen);
  });

  SOCKET.on("T3.5", (data) => {
    console.log("T3 data received by client:");
    console.log(data);
    setGameScreen(data.gameScreen);
  });

  SOCKET.on("T4.5", (data) => {
    console.log("T4 data received by client:");
    console.log(data);
    setGameScreen(data.gameScreen);
  });

  SOCKET.on("T5.5", (data) => {
    console.log("T5 data received by client:");
    console.log(data);
    setGameScreen(data.gameScreen);
  });

  SOCKET.on("T6.5", (data) => {
    console.log("T6 data received by client:");
    console.log(data);
    setGameScreen(data.gameScreen);
  });

  SOCKET.on("S1.5", (data) => {
    console.log("S1 data received by client:");
    console.log(data);
    setGameScreen(data.gameScreen);
  });

  SOCKET.on("S4.5", (data) => {
    console.log("S4 data received by client:");
    console.log(data);
    setGameScreen(data.gameScreen);
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
        {/* <Student1EnterClass /> */}
        {gameScreen === "Student1EnterClass" && (
          <Student1EnterClass
            nameOfClass={nameOfClass}
            pin={pin}
            handleScreenChangeS1={handleScreenChangeS1}
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

        {/* <Teacher1StartClass /> */}
        {gameScreen === "Teacher1StartClass" && (
          <Teacher1StartClass handleScreenChangeT1={handleScreenChangeT1} />
        )}
        {/* <Teacher2PlayersConnected /> */}
        {gameScreen === "Teacher2PlayersConnected" && (
          <Teacher2PlayersConnected nameOfClass={nameOfClass} pin={pin} />
        )}
        {/* <Teacher3CreateQuestion /> */}
        {gameScreen === "Teacher3CreateQuestion" && (
          <Teacher3CreateQuestion nickname={nickname} />
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

        {/* {gameScreen === "default" && <ScreenTeacherStudent />} */}
        {gameScreen === "TeacherStudent" && (
          <TeacherStudent
            handleStartStudent={handleStartStudent}
            handleStartTeacher={handleStartTeacher}
          />
        )}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default QuizTemplate;
