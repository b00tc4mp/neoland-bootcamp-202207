// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";
import "./timeSelect.scss";

// const handleLeaveClick = () => {};

function Teacher3CreateQuestion({
  pin,
  nameOfClass,
  handleScreenChangeT3,
  socket,
  host,
}) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const questionInput = form.question;
    const timeLimitInput = form.timeLimit;

    const question = questionInput.value;
    const timeLimit = timeLimitInput.value;

    form.reset();

    // socket.to("1").emit("T3", {
    socket.emit("T3", {
      gameScreen: "Student3GetReady",
      timeLimit: { timeLimit },
      question: { question },
      host: { host },
    });

    handleScreenChangeT3("Teacher3BGetReady", question, timeLimit);
  };

  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
        </div>
        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          <select id="timeLimit">
            <option value="30000">Time limit...</option>
            <option value="10000">10 seconds</option>
            <option value="20000">20 seconds</option>
            <option value="30000">30 seconds</option>
            <option value="45000">45 seconds</option>
            <option value="50000">1 minute</option>
            <option value="60000">1 min 30 sec</option>
            <option value="70000">2 mins</option>
            <option value="80000">no limit</option>
          </select>
          <div className="form-field">
            <label htmlFor="question" className="input-label">
              Question:
            </label>
            <input
              type="text"
              placeholder="Write your question..."
              name="question"
              id="question"
              className="input-field"
            />
          </div>

          <button href="" type="submit" className="footer-button">
            Send
          </button>
        </form>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Teacher3CreateQuestion;
