// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

//TODO:
const pin = "TODO: generate";
const nameOfClass = "TODO: generate";

function Teacher2PlayersConnected({ pin, nameOfClass }) {
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <div className="grouped-elements">
          <p className="info--bold">PIN: {pin}</p>
          <p className="info--bold">Class: {nameOfClass}</p>
        </div>
        <div className="grouped-elements">
          <p className="paragraph--bold">Players connected:</p>
          <div className="info">
            <ul>TODO: generate list, map???</ul>
          </div>
        </div>
        <button className="footer-button">start game</button>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default Teacher2PlayersConnected;
