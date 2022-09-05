// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
import CountdownTimer from "../CountdownTimer";

// const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function ScreenStudent4ResponseInput({ question, timeLimit }) {
  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <div className="grouped-elements">
          <CountdownTimer />
          <p className="paragraph--bold">Question:</p>
          <p className="info">An example of a question sent here?{question}</p>
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
              name="answer"
              id="answer"
              className="input-field"
            />
          </div>

          <button href="home.html" type="submit" className="footer-button">
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

export default ScreenStudent4ResponseInput;
