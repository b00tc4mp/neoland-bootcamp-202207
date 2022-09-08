import { useEffect } from "react";
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
  response,
  question,
  handleScreenChangeT4,
  socket,
}) {
  const questionString = question.question;
  const responseString = response.response;

  // const timeLimitNumber = Math.floor(timeLimit.timeLimit);

  console.log(timeLimit);

  const onButtonClick = () => {
    handleScreenChangeT4("Teacher5MarkResponses");
    socket.emit("T4");
  };
  useEffect(() => {
    setTimeout(() => {
      handleScreenChangeT4("Teacher5MarkResponses");
    }, timeLimit);
  });

  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
          {/* <CountdownTimer timeLimit={timeLimit} /> */}
        </div>
        <div className="grouped-elements">
          <p className="paragraph--bold">Question:</p>
          <p className="info">{question}</p>
        </div>
        <div className="grouped-elements">
          <p className="paragraph--bold">
            Responses received: {responsesReceivedTotal}
          </p>
          <p className="info">{response}</p>
        </div>
        <button
          href=""
          type="submit"
          className="footer-button"
          onClick={onButtonClick}
        >
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
