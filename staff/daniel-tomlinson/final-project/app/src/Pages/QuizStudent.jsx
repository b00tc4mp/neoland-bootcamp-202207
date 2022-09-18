import { useState, useEffect } from "react";

import Student1EnterClass from "../screens/student/Student-1-EnterClass";
import Student2Connected from "../screens/student/Student-2-Connected";
import Student3GetReady from "../screens/student/Student-3-GetReady";
import Student4ResponseInput from "../screens/student/Student-4-ResponseInput";
import Student5WaitingForFeedback from "../screens/student/Student-5-WaitingForFeedback";
import Student6Correct from "../screens/student/Student-6-Correct";
import Student7Incorrect from "../screens/student/Student-7-Incorrect";
import Student8WaitingForQuestion from "../screens/student/Student-8-WaitingForQuestion";
import Student9ClassClosed from "../screens/student/Student-9-ClassClosed";

function QuizStudent({ socket, handleFeedback, handleLeaveClass }) {
  const [gameScreen, setGameScreen] = useState("Student1EnterClass");
  const [nameOfClass, setNameOfClass] = useState("");
  const [nickname, setNickname] = useState("");
  const [pin, setPin] = useState("");
  const [host, setHost] = useState("");
  const [timeLimit, setTimeLimit] = useState("30 seconds");
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState("");

  const [questionType, setQuestionType] = useState("MCQ");
  //After cleaning the object sent, this "incorrect" value is no longer necessary
  const [answerA, setAnswerA] = useState(["", "incorrect"]);
  const [answerB, setAnswerB] = useState(["", "incorrect"]);
  const [answerC, setAnswerC] = useState(["", "incorrect"]);
  const [answerD, setAnswerD] = useState(["", "incorrect"]);

  const handleLeaveClick = () => {};

  const onLeaveClass = () => {
    handleLeaveClass();
  };

  const handleScreenChangeS1 = (gameScreen, nickname, host) => {
    setGameScreen(gameScreen);
    setNickname(nickname);
    setHost(host);
  };

  const handleScreenChangeS3 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeS4 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeS6 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeS7 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  const handleScreenChangeS9 = (gameScreen) => {
    setGameScreen(gameScreen);
  };

  useEffect(() => {
    /* socket.on("T1.5", (data) => {
      console.log("T1 data received by client:");
      console.log(data);
      console.log(socket);
      setNameOfClass(data.nameOfClass);
      setPin(data.pin);
    }); */

    socket.on("T2.5", (data) => {
      console.log("T2 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });

    socket.on("T3.5", (data) => {
      console.log("T3 data received by client:");
      console.log(data);
      setTimeLimit(data.timeLimit);
      setQuestion(data.question);
      setQuestionType(data.questionType);
      setAnswerA(data.answerA);
      setAnswerB(data.answerB);
      setAnswerC(data.answerC);
      setAnswerD(data.answerD);
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
      setFeedback(feedback);
    });

    socket.on("T6.5", (data) => {
      console.log("T6 data received by client:");
      console.log(data);
      setGameScreen(data.gameScreen);
    });

    socket.on("Tclose.5", (data) => {
      console.log("Tclose data received by client:");
      console.log(data);
      setGameScreen("Student9ClassClosed");

      setNameOfClass("");
      setNickname("");
      setPin("");
      setHost("");
      setTimeLimit("30 seconds");
      setQuestion("");
      setResponse("");
      setFeedback("");
    });
  }, []);

  return (
    <div className="game-screen">
      <header className="game-screen-header">
        {gameScreen === "Student1EnterClass" && (
          <span
            className="material-symbols-outlined button-icon"
            onClick={onLeaveClass}
          >
            arrow_back_ios_new
          </span>
        )}
        {gameScreen !== "Student1EnterClass" && (
          <span className="menu-icon-spaceholder"></span>
        )}
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
            handleFeedback={handleFeedback}
          />
        )}
        {/* <Student2Connected /> */}
        {gameScreen === "Student2Connected" && (
          <Student2Connected nickname={nickname} host={host} />
        )}
        {/* <Student3GetReady /> */}
        {gameScreen === "Student3GetReady" && (
          <Student3GetReady
            handleScreenChangeS3={handleScreenChangeS3}
            host={host}
          />
        )}
        {/* <Student4ResponseInput /> */}
        {gameScreen === "Student4ResponseInput" && (
          <Student4ResponseInput
            question={question}
            timeLimit={timeLimit}
            handleScreenChangeS4={handleScreenChangeS4}
            socket={socket}
            host={host}
            questionType={questionType}
            answerA={answerA}
            answerB={answerB}
            answerC={answerC}
            answerD={answerD}
          />
        )}
        {/* <Student5WaitingForFeedback /> */}
        {gameScreen === "Student5WaitingForFeedback" && (
          <Student5WaitingForFeedback
          // host={host}
          />
        )}
        {gameScreen === "Student6Correct" && (
          <Student6Correct
            handleScreenChangeS6={handleScreenChangeS6}
            // host={host}
          />
        )}
        {/* <Student7Incorrect /> */}
        {gameScreen === "Student7Incorrect" && (
          <Student7Incorrect
            handleScreenChangeS7={handleScreenChangeS7}
            // host={host}
          />
        )}
        {/* <Student8WaitingForQuestion /> */}
        {gameScreen === "Student8WaitingForQuestion" && (
          <Student8WaitingForQuestion
          // host={host}
          />
        )}
        {/* <Student9ClassClosed /> */}
        {gameScreen === "Student9ClassClosed" && (
          <Student9ClassClosed
            handleScreenChangeS9={handleScreenChangeS9}
            // host={host}
          />
        )}
      </main>
      {/* {gamePhase === "gamePhaseKey" && <ScreenTemplate1 />} */}

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default QuizStudent;
