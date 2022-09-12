// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

import { useEffect } from "react";

const handleFormSubmit = () => {};

function Student6Correct({ handleScreenChangeS6 }) {
  const header = document.querySelector("header");
  useEffect(() => {
    // const body = document.querySelector("body");
    // body.classList.add("correct-screen");
    // const main = document.querySelector("main");
    // main.classList.add("correct-screen");
    header.classList.add("correct-screen");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      header.classList.remove("correct-screen");
      handleScreenChangeS6("Student8WaitingForQuestion");
    }, 15000);
  }, []);
  return (
    <div className="game-screen correct-screen">
      <main className="game-screen-main flex--space-around correct-screen">
        <span class="material-symbols-outlined feedback-icon">
          sentiment_satisfied
        </span>
        <p className="info correct">Well done!</p>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student6Correct;
