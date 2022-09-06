// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function TeacherStudent({ handleStartStudent, handleStartTeacher }) {
  const onStartStudent = () => {
    handleStartStudent("Student1EnterClass");
  };
  const onStartTeacher = () => {
    handleStartTeacher("Teacher1StartClass");
  };
  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <button className="footer-button" onClick={onStartStudent}>
          Student
        </button>
        <button className="footer-button" onClick={onStartTeacher}>
          Teacher
        </button>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default TeacherStudent;
