// ================== Imports ================== //

// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};
import { useEffect } from "react";

const handleFormSubmit = () => {};

function Teacher7ClassClosed({ handleScreenChangeT7 }) {
  useEffect(() => {
    setTimeout(() => handleScreenChangeT7("Teacher1StartClass"), 7000);
  }, []);
  const onHomeClick = () => {
    handleScreenChangeT7("Teacher1StartClass");
  };
  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <p className="info--bold class-closed">
          Class closed.<br></br>
          <br></br>
          Thanks for playing!
        </p>
        <div className="grouped-elements">
          <button
            className="material-symbols-outlined home-icon"
            onClick={onHomeClick}
          >
            home
          </button>
          <p>Home</p>
        </div>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Teacher7ClassClosed;
