import { SOCKET } from "../SOCKET";
// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
import Spinner from "../Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

function Student2Connected({ nickname }) {
  // let className =

  // const handleFormSubmit = (event) => {};

  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <p className="info">Connected as: {nickname}</p>
        <span className="material-symbols-outlined tick-icon">
          check_circle
        </span>
        <p className="info">Waiting for question to be sent...</p>
        <Spinner />
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student2Connected;
