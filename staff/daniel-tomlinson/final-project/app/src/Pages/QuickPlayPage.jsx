import { useState, useEffect } from "react";
import QuizHome from "./QuizHome";
import QuizStudent from "./QuizStudent";
import QuizTeacher from "./QuizTeacher";

import io from "socket.io-client";
const socket = io.connect("http://localhost:8080", { autoconnect: false });

function QuizTemplate() {
  // const [gameScreen, setGameScreen] = useState("TeacherStudent");
  const [userType, setUserType] = useState("Home");

  const handleLeaveClick = () => {};

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
    <main className="game-screen">
      {userType === "Home" && (
        <QuizHome
          handleLeaveClick={handleLeaveClick}
          handleStartStudent={handleStartStudent}
          handleStartTeacher={handleStartTeacher}
        />
      )}
      {userType === "Student" && (
        <QuizStudent handleLeaveClick={handleLeaveClick} socket={socket} />
      )}
      {userType === "Teacher" && (
        <QuizTeacher handleLeaveClick={handleLeaveClick} socket={socket} />
      )}
    </main>
  );
}

export default QuizTemplate;
