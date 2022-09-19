// ================== Imports ================== //

// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};
import { useEffect } from "react";

const handleFormSubmit = () => {};

function Student9ClassClosed({ handleScreenChangeS9 }) {
  useEffect(() => {
    setTimeout(() => handleScreenChangeS9("Student1EnterClass"), 7000);
  }, []);

  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <p className="info--bold class-closed">
          Class closed.<br></br>
          <br></br>
          Thanks for playing!
        </p>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student9ClassClosed;
