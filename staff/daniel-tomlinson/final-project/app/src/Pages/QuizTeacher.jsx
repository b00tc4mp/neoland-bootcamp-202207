import { useState, useEffect } from "react";

import Teacher1StartClass from "../screens/teacher/Teacher-1-StartClass";
import Teacher2PlayersConnected from "../screens/teacher/Teacher-2-PlayersConnected";
import Teacher3CreateQuestion from "../screens/teacher/Teacher-3-CreateQuestion";
import Teacher3BGetReady from "../screens/teacher/Teacher-3B-GetReady";
import Teacher4IncomingResponses from "../screens/teacher/Teacher-4-IncomingResponses";
import Teacher5MarkResponses from "../screens/teacher/Teacher-5-MarkResponses";
import Teacher6ResponseStats from "../screens/teacher/Teacher-6-ResponseStats";
import Teacher7ClassClosed from "../screens/teacher/Teacher-7-ClassClosed";

import Loggito from "../utils/Loggito";
import createGameCode from "../logic/createGameCode";

import withContext from "../utils/withContext";

function QuizTeacher({ socket, context: { handleFeedback } }) {
  const logger = new Loggito("QuizTeacher");

  const [gameScreen, setGameScreen] = useState("Teacher1StartClass");
  const [nameOfClass, setNameOfClass] = useState("");
  const [nickname, setNickname] = useState("");
  const [pin, setPin] = useState("");
  const [timeLimit, setTimeLimit] = useState("30 seconds");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleLeaveClick = () => {};

  const handleStartClass = (nameOfClass, pin) => {
    try {
      debugger;
      const pinString = `${pin}`;

      createGameCode(sessionStorage.token, nameOfClass, pinString, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleScreenChangeT1 = (gameScreen, nameOfClass, pin) => {
    setGameScreen(gameScreen);
    setNameOfClass(nameOfClass);
    setPin(pin);
    handleStartClass(nameOfClass, pin);
  };

  const handleScreenChangeT2 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeT3 = (gameScreen, question, timeLimit) => {
    setQuestion(question);
    setTimeLimit(timeLimit);
    setGameScreen(gameScreen);
  };

  const handleScreenChangeT3B = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeT4 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeT5 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeT6 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  useEffect(() => {
    socket.on("S1.5", (data) => {
      console.log("S1 data received by client:");
      console.log(data);
      setNickname(data.nickname);
    });

    socket.on("S4.5", (data) => {
      console.log("S4 data received by client:");
      console.log(data);
      setResponse(data.response);
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
          <Teacher2PlayersConnected
            nameOfClass={nameOfClass}
            pin={pin}
            nickname={nickname}
            handleScreenChangeT2={handleScreenChangeT2}
            socket={socket}
          />
        )}
        {/* <Teacher3CreateQuestion /> */}
        {gameScreen === "Teacher3CreateQuestion" && (
          <Teacher3CreateQuestion
            pin={pin}
            nameOfClass={nameOfClass}
            socket={socket}
            handleScreenChangeT3={handleScreenChangeT3}
          />
        )}
        {/* <Teacher3BGetReady /> */}
        {gameScreen === "Teacher3BGetReady" && (
          <Teacher3BGetReady handleScreenChangeT3B={handleScreenChangeT3B} />
        )}
        {/* <Teacher4Incomingresponses /> */}
        {gameScreen === "Teacher4IncomingResponses" && (
          <Teacher4IncomingResponses
            pin={pin}
            nameOfClass={nameOfClass}
            timeLimit={timeLimit}
            question={question}
            socket={socket}
            response={response}
            handleScreenChangeT4={handleScreenChangeT4}
          />
        )}
        {/* <Teacher5MarkResponses /> */}
        {gameScreen === "Teacher5MarkResponses" && (
          <Teacher5MarkResponses
            pin={pin}
            nameOfClass={nameOfClass}
            socket={socket}
            response={response}
            handleScreenChangeT5={handleScreenChangeT5}
          />
        )}
        {/* <Teacher6ResponseStats /> */}
        {gameScreen === "Teacher6ResponseStats" && (
          <Teacher6ResponseStats handleScreenChangeT6={handleScreenChangeT6} />
        )}
        {/* <Teacher7ClassClosed /> */}
        {gameScreen === "Teacher7ClassClosed" && <Teacher7ClassClosed />}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default withContext(QuizTeacher);
