// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
import CountdownTimer from "../CountdownTimer";
import { useEffect } from "react";

// const handleLeaveClick = () => {};

function Student4ResponseInput({
  question,
  timeLimit,
  socket,
  handleScreenChangeS4,
}) {
  const questionString = question.question;
  const timeLimitSeconds = Math.floor(timeLimit.timeLimit);
  const timeLimitNumber = timeLimit.timeLimit;

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const responseInput = form.response;

    const response = responseInput.value;

    // const response = String(responseValue.rersponse);

    debugger;

    socket.emit("S4", { response });

    handleScreenChangeS4("Student5WaitingForFeedback");
  };

  const handleFormSubmit2 = (event) => {
    // event.preventDefault();

    const form = document.getElementsByClassName("form");

    const responseInput = form[0].response;

    // const responseValue = responseInput.value;
    const response = responseInput.value;

    // const response = String(responseValue.rersponse);

    socket.emit("S4", { response });

    handleScreenChangeS4("Student5WaitingForFeedback");
  };

  socket.on("T4", () => {
    console.log("T4 received by client");
    handleFormSubmit2();
  });

  // useEffect(() => {
  setTimeout(() => {
    // const form = document.getElementsByClassName("form");
    // form[0].submit();
    handleFormSubmit2();
  }, timeLimitNumber);
  // }, [])
  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <div className="grouped-elements">
          {/* <CountdownTimer timeLimit={timeLimitSeconds} /> */}
          <p className="paragraph--bold">Question: </p>
          <p className="info">{questionString}</p>
        </div>

        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          <div className="form-field">
            <label htmlFor="answer" className="input-label input-label--bold">
              Write your answer:
            </label>
            <input
              type="text"
              placeholder="Write your answer here..."
              name="response"
              id="response"
              className="input-field"
            />
          </div>

          <button href="" type="submit" className="footer-button">
            Submit
          </button>
        </form>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student4ResponseInput;
