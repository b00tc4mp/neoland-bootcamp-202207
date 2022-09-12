// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

import { useEffect } from "react";

const handleFormSubmit = () => {};

function Student7Incorrect({ handleScreenChangeS7 }) {
  useEffect(() => {
    setTimeout(() => handleScreenChangeS7("Student8WaitingForQuestion"), 15000);
  }, []);
  return (
    <div className="game-screen incorrect">
      <main className="game-screen-main flex--space-around incorrect">
        <span class="material-symbols-outlined feedback-icon">
          sentiment_dissatisfied
        </span>
        <p className="info">Better luck next time!</p>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student7Incorrect;
