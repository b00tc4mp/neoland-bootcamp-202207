import { useState } from "react";

import ScreenStudent1EnterClass from "../screens/student/ScreenStudent-1-EnterClass";
import ScreenStudent2Connected from "../screens/student/ScreenStudent-2-Connected";
import ScreenStudent3GetReady from "../screens/student/ScreenStudent-3-GetReady";
import ScreenStudent4ResponseInput from "../screens/student/ScreenStudent-4-ResponseInput";
import ScreenStudent5WaitingForFeedback from "../screens/student/ScreenStudent-5-WaitingForFeedback";
import ScreenStudent6Correct from "../screens/student/ScreenStudent-6-Correct";
import ScreenStudent7Incorrect from "../screens/student/ScreenStudent-7-Incorrect";
import ScreenStudent8WaitingForQuestion from "../screens/student/ScreenStudent-8-WaitingForQuestion";

import TeacherScreen1StartClass from "../screens/teacher/TeacherScreen-1-StartClass";
import TeacherScreen2PlayersConnected from "../screens/teacher/TeacherScreen-2-PlayersConnected";
import TeacherScreen3CreateQuestion from "../screens/teacher/TeacherScreen-3-CreateQuestion";
import TeacherScreen4Incomingresponses from "../screens/teacher/TeacherScreen-4-IncomingResponses";
import TeacherScreen5MarkResponses from "../screens/teacher/TeacherScreen-5-MarkResponses";
import TeacherScreen6ResponseStats from "../screens/teacher/TeacherScreen-6-ResponseStats";
import TeacherScreen7ClassClosed from "../screens/teacher/TeacherScreen-7-ClassClosed";

import ScreenTeacherStudent from "../screens/app/ScreenTeacherStudent";
import { SOCKET } from "../screens/SOCKET";

function QuizTemplate() {
  const [gameScreen, setGameScreen] = useState("default");

  // setGameScreen("Teacher1StartClass");

  const handleLeaveClick = () => {};

  SOCKET.on("1.5", (data) => {
    console.log("data received by client:");
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
        {/* <ScreenStudent1EnterClass /> */}
        {/* <ScreenStudent2Connected /> */}
        {/* <ScreenStudent3GetReady /> */}
        {/* <ScreenStudent4ResponseInput /> */}
        {/* <ScreenStudent5WaitingForFeedback /> */}
        {/* <ScreenStudent6Correct /> */}
        {/* <ScreenStudent7Incorrect /> */}
        <ScreenStudent8WaitingForQuestion />

        {/* <TeacherScreen1StartClass /> */}
        {/* {gameScreen === "Teacher1StartClass" && <TeacherScreen1StartClass />} */}
        {/* {gameScreen === "Student1StartClass" && <ScreenStudent1EnterClass />} */}
        {/* <TeacherScreen2PlayersConnected /> */}
        {/* <TeacherScreen3CreateQuestion /> */}
        {/* <TeacherScreen4Incomingresponses /> */}
        {/* <TeacherScreen5MarkResponses /> */}
        {/* <TeacherScreen6ResponseStats /> */}
        {/* <TeacherScreen7ClassClosed /> */}

        {/* {gameScreen === "default" && <ScreenTeacherStudent />} */}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default QuizTemplate;
