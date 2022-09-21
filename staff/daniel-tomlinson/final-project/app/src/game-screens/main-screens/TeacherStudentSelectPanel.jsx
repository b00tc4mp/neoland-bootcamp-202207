// ================== Imports ================== //

import { useEffect } from "react";

function TeacherStudentSelectPanel({
  handleStartStudent,
  handleStartTeacher,
  handleLeaveClick,
  handleLeaveClass,
}) {
  // ================== useEffects ================== //

  useEffect(() => {});

  // ================== Functions ================== //

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

  // ================== jsx ================== //

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
        <button className="footer-button" onClick={onStartStudent}>
          Student
        </button>
        {sessionStorage.token !== undefined && (
          <button className="footer-button" onClick={onStartTeacher}>
            Teacher
          </button>
        )}
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default TeacherStudentSelectPanel;
