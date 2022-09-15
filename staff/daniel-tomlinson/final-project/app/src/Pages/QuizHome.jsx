import { useEffect } from "react";
import TeacherStudent from "../screens/quiz-home/TeacherStudent";

function QuizHome({
  handleStartStudent,
  handleStartTeacher,
  handleLeaveClick,
  handleLeaveClass,
}) {
  const onLeaveClick = () => {
    handleLeaveClick();
  };

  const onStartStudent = () => {
    handleStartStudent("Student");
  };

  const onStartTeacher = () => {
    handleStartTeacher("Teacher");
  };

  const onLeaveClass = () => {
    handleLeaveClass();
  };

  useEffect(() => {});
  return (
    <div className="game-screen">
      <header className="game-screen-header">
        <span
          className="material-symbols-outlined button-icon"
          onClick={onLeaveClass}
        >
          arrow_back_ios_new
        </span>
        <h1 className="app-title">App Name</h1>
        <button
          type="menu"
          className="material-symbols-outlined  button-icon"
          onClick={onLeaveClick}
        >
          exit_to_app
        </button>
      </header>
      <main className="game-screen-main">
        <TeacherStudent
          handleStartStudent={onStartStudent}
          handleStartTeacher={onStartTeacher}
        />
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default QuizHome;
