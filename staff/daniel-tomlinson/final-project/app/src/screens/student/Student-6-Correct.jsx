// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

import { useEffect } from "react";

const handleFormSubmit = () => {};

function Student6Correct({ handleScreenChangeS6 }) {
  useEffect(() => {
    setTimeout(() => handleScreenChangeS6("Student8WaitingForQuestion"), 15000);
  }, []);
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--space-around">
        <span class="material-symbols-outlined feedback-icon">
          sentiment_satisfied
        </span>
        <p className="info">Well done!</p>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student6Correct;
