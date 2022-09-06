// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
import CountdownTimer from "../CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function Teacher4IncomingResponses({
  pin,
  nameOfClass,
  timeLimit,
  responsesReceivedTotal,
  // responsesReceived: [responsesReceived],
  question,
}) {
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
          <CountdownTimer timeLimit={timeLimit} />
        </div>
        <div className="grouped-elements">
          <p className="paragraph--bold">Question:</p>
          <p className="info">
            TODO: read the original question here {question}
          </p>
        </div>
        <div className="grouped-elements">
          <p className="paragraph--bold">
            Responses received: {responsesReceivedTotal}
          </p>
          <p className="info">TODO: map responsesReceived</p>
        </div>
        <button href="" type="submit" className="footer-button">
          End round
        </button>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Teacher4IncomingResponses;
