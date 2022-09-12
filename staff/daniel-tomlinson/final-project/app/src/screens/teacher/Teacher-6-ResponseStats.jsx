// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function Teacher6ResponseStats({
  pin,
  nameOfClass,
  stats,
  handleScreenChangeT6,
  correct,
  incorrect,
}) {
  const onButtonClick = () => {
    handleScreenChangeT6("Teacher2PlayersConnected");
  };

  const correctPercent = (correct / (correct + incorrect)) * 100;
  const incorrectPercent = (incorrect / (correct + incorrect)) * 100;

  // const correctStats = document.getElementById("correct-stats");
  // correctStats.style = { height: "80%" };

  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
        </div>

        <div className="stats-panel game-screen-main flex-row">
          <div
            className="correct stats-bar"
            style={{ height: `${correctPercent}%` }}
          >
            {correct}
            <span class="material-symbols-outlined stats-icon">
              sentiment_satisfied
            </span>
          </div>
          <div
            className="incorrect stats-bar"
            style={{ height: `${incorrectPercent}%` }}
          >
            {incorrect}
            <span class="material-symbols-outlined stats-icon">
              sentiment_dissatisfied
            </span>
          </div>
        </div>

        <button className="footer-button" onClick={onButtonClick}>
          New round
        </button>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default Teacher6ResponseStats;
