import { useState, useEffect } from "react";
import QuizHome from "./QuizHome";
import QuizStudent from "./QuizStudent";
import QuizTeacher from "./QuizTeacher";

import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", { autoconnect: false });

function QuizTemplate({
  handleFeedback,
  handleLeaveClass,
  handleGameBeingPlayed,
  // selectQuestionForGame,
}) {
  const [userType, setUserType] = useState("Home");

  const handleLeaveClick = () => {};

  const onLeaveClass = () => {
    handleLeaveClass();
  };

  const handleStartStudent = (userType) => {
    setUserType(userType);
  };

  const handleStartTeacher = (userType) => {
    setUserType(userType);
  };

  useEffect(() => {
    socket.connect();
  }, []);

  return (
    <main className="game-screen" name="quickPlayPageMain">
      {userType === "Home" && (
        <QuizHome
          handleLeaveClick={handleLeaveClick}
          handleStartStudent={handleStartStudent}
          handleStartTeacher={handleStartTeacher}
          handleLeaveClass={onLeaveClass}
          // handlecloseClick={handleCloseClick}
        />
      )}
      {userType === "Student" && (
        <QuizStudent
          handleLeaveClick={handleLeaveClick}
          socket={socket}
          handleFeedback={handleFeedback}
          handleLeaveClass={onLeaveClass}
        />
      )}
      {userType === "Teacher" && (
        <QuizTeacher
          handleLeaveClick={handleLeaveClick}
          socket={socket}
          handleLeaveClass={onLeaveClass}
          handleGameBeingPlayed={handleGameBeingPlayed}
          // selectQuestionForGame={selectQuestionForGame}
        />
      )}
    </main>
  );
}

export default QuizTemplate;
