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

function QuizTeacher({
  socket,
  handleLeaveClass,
  context: { handleFeedback },
}) {
  const logger = new Loggito("QuizTeacher");

  const [gameScreen, setGameScreen] = useState("Teacher1StartClass");
  const [nameOfClass, setNameOfClass] = useState("");
  const [nickname, setNickname] = useState([]);
  const [pin, setPin] = useState("");
  const [host, setHost] = useState("");
  const [timeLimit, setTimeLimit] = useState("30 seconds");
  const [question, setQuestion] = useState("");
  const [responses, setResponses] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [socketsConnected, setSocketsConnected] = useState([]);

  const handleLeaveClick = () => {};

  const onLeaveClass = () => {
    handleLeaveClass();
  };

  const handleStartClass = (gameScreen, nameOfClass, pin, host) => {
    try {
      const pinString = `${pin}`;

      createGameCode(
        sessionStorage.token,
        nameOfClass,
        pinString,
        host,
        (error) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }
        }
      );
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
    handleScreenChangeT1(gameScreen, nameOfClass, pin, host);
  };

  const handleCloseGameTeacher = () => {
    const hostTemp = host;
    socket.emit("Tclose", { hostTemp });

    setGameScreen("Teacher7ClassClosed");
    setNameOfClass("");
    setNickname([]);
    setPin("");
    setHost("");
    setTimeLimit("30 seconds");
    setQuestion("");
    setResponses([]);
    setCorrect(0);
    setIncorrect(0);

    // handleCloseGame();
  };

  const handleScreenChangeT1 = (gameScreen, nameOfClass, pin, host) => {
    // handleStartClass(nameOfClass, pin, host);
    setGameScreen(gameScreen);
    setNameOfClass(nameOfClass);
    setPin(pin);
    setHost(host);
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

  const handleScreenChangeT5 = (gameScreen, correct, incorrect) => {
    setGameScreen(gameScreen);
    setCorrect(correct);
    setIncorrect(incorrect);
  };

  const handleScreenChangeT6 = (gameScreen) => {
    setGameScreen(gameScreen);
    setResponses([]);
  };

  const handleScreenChangeT7 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  /* const addNickname = async (data) => {
    const nicknameReceived = data.nickname.nickname;
    console.log(`nicknameReceived: ${nicknameReceived}`);
    const socketIdReceived = data.socketId;
    console.log(`socketIdReceived: ${socketIdReceived}`);

    await setSocketsConnected((socketsConnected) => [
      ...socketsConnected,
      data.socketId,
    ]);

    console.log(`socketsConnected: ${socketsConnected}`);

    if (!socketsConnected.includes(data.socketId)) {
      await setNickname((nickname) => [...nickname, data.nickname.nickname]);
      console.log(`nickname array: ${nickname}`);
    }
  }; */

  useEffect(() => {
    socket.on("S1.5", (data) => {
      console.log("S1 data received by client:");
      console.log(data);

      // addNickname(data);

      console.log("nickname:");
      console.log(nickname);
      debugger;
      setSocketsConnected((socketsConnected) => [
        ...socketsConnected,
        data.socketId,
      ]);
      console.log("Sockets connected:");
      console.log(socketsConnected);
      debugger;
      if (!socketsConnected.includes(data.socketId))
        setNickname((nickname) => [...nickname, data.nickname.nickname]);
      console.log("Nickname received:");
      console.log(data.nickname.nickname);
    });

    socket.on("S4.5", (data) => {
      console.log("S4 data received by client:");
      console.log(data);
      // const exists = responses.filter(
      // (dataSet) => dataSet.socketId === data.socketId
      // );
      // console.log(exists);
      // if (exists === 0) {
      setResponses((responses) => [...responses, data]);
      console.log("responses state in QuizTeacher");
      console.log(responses);
      // }
    });
  }, []);

  return (
    <div className="game-screen">
      <header className="game-screen-header">
        {gameScreen === "Teacher1StartClass" && (
          <span
            className="material-symbols-outlined button-icon"
            onClick={onLeaveClass}
          >
            arrow_back_ios_new
          </span>
        )}
        {gameScreen !== "Teacher1StartClass" && (
          <span className="menu-icon-spaceholder"></span>
        )}
        <h1 className="app-title">App Name</h1>
        <button
          type="menu"
          className="material-symbols-outlined  button-icon"
          onClick={handleCloseGameTeacher}
        >
          exit_to_app
        </button>
      </header>
      <main className="game-screen-main">
        {/* <Teacher1StartClass /> */}
        {gameScreen === "Teacher1StartClass" && (
          <Teacher1StartClass
            // handleScreenChangeT1={handleScreenChangeT1}
            handleStartClass={handleStartClass}
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
            // host={host}
          />
        )}
        {/* <Teacher3CreateQuestion /> */}
        {gameScreen === "Teacher3CreateQuestion" && (
          <Teacher3CreateQuestion
            pin={pin}
            nameOfClass={nameOfClass}
            socket={socket}
            handleScreenChangeT3={handleScreenChangeT3}
            host={host}
          />
        )}
        {/* <Teacher3BGetReady /> */}
        {gameScreen === "Teacher3BGetReady" && (
          <Teacher3BGetReady
            handleScreenChangeT3B={handleScreenChangeT3B}
            // host={host}
          />
        )}
        {/* <Teacher4Incomingresponses /> */}
        {gameScreen === "Teacher4IncomingResponses" && (
          <Teacher4IncomingResponses
            pin={pin}
            nameOfClass={nameOfClass}
            timeLimit={timeLimit}
            question={question}
            socket={socket}
            responses={responses}
            handleScreenChangeT4={handleScreenChangeT4}
            host={host}
          />
        )}
        {/* <Teacher5MarkResponses /> */}
        {gameScreen === "Teacher5MarkResponses" && (
          <Teacher5MarkResponses
            pin={pin}
            nameOfClass={nameOfClass}
            socket={socket}
            responses={responses}
            handleScreenChangeT5={handleScreenChangeT5}
            host={host}
          />
        )}
        {/* <Teacher6ResponseStats /> */}
        {gameScreen === "Teacher6ResponseStats" && (
          <Teacher6ResponseStats
            handleScreenChangeT6={handleScreenChangeT6}
            host={host}
            pin={pin}
            nameOfClass={nameOfClass}
            correct={correct}
            incorrect={incorrect}
          />
        )}
        {/* <Teacher7ClassClosed /> */}
        {gameScreen === "Teacher7ClassClosed" && (
          <Teacher7ClassClosed
            handleScreenChangeT7={handleScreenChangeT7}
            host={host}
          />
        )}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default withContext(QuizTeacher);
