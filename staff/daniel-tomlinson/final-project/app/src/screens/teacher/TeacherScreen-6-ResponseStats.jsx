// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function TeacherScreen6ResponseStats({ pin, nameOfClass, stats }) {
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
        </div>
        Stats
        <button className="footer-button">New round</button>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default TeacherScreen6ResponseStats;
