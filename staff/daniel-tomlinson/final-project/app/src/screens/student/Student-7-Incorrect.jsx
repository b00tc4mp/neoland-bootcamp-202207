// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function Student7Incorrect({ gameHeader, gameMain, gameFooter }) {
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--space-around">
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
