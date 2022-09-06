// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";
import "./timeSelect.scss";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function Teacher3CreateQuestion({ pin, nameOfClass }) {
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">
            PIN: {pin} <br></br>
            Class: {nameOfClass}
          </p>
          <select>
            <option selected value="0">
              Time limit...
            </option>
            <option value="1">10 seconds</option>
            <option value="2">20 seconds</option>
            <option value="3">30 seconds</option>
            <option value="4">45 seconds</option>
            <option value="5">1 minute</option>
            <option value="6">1 min 30 sec</option>
            <option value="7">2 mins</option>
            <option value="7">no limit</option>
          </select>
        </div>
        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
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
