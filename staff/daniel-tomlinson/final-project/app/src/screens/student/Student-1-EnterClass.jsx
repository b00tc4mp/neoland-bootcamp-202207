// import { SOCKET } from "../SOCKET";
// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

import retrieveGameCode from "../../logic/retrieveGameCode";

function Student1EnterClass({
  pin,
  nameOfClass,
  handleScreenChangeS1,
  socket,
  handleFeedback,
}) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const pinInput = form.pin;
    const nameOfClassInput = form.nameOfClass;
    const nicknameInput = form.nickname;

    const pin = pinInput.value;
    const nameOfClass = nameOfClassInput.value;
    const nickname = nicknameInput.value;

    // const pinString = String(pin.pin);
    // const nameOfClassString = nameOfClass.nameOfClass;

    // const loadNotes = () => {
    if (pin.trim() === "") {
      alert("Input fields cannot be left blank.");
      throw new Error("Input fields cannot be left blank");
    }
    if (nameOfClass.trim() === "") {
      alert("Input fields cannot be left blank.");
      throw new Error("Input fields cannot be left blank");
    }
    if (nickname.trim() === "") {
      alert("Input fields cannot be left blank.");
      throw new Error("Input fields cannot be left blank");
    }

    try {
      retrieveGameCode(pin, (error, gameCodes) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          // logger.warn(error.message);

          return;
        }
        // setNotes(notes);
        let gameCodeFiltered = gameCodes.filter(
          (gameCode) =>
            gameCode.nameOfClass === nameOfClass && gameCode.pin === pin
        );

        if (
          (gameCodeFiltered.length = 1)
          // pinString === gameCode.pin &&
          // nameOfClassString === gameCode.nameOfClass
        ) {
          const host = gameCodeFiltered[0].host;
          socket.emit("S1", {
            nickname: { nickname },
            host: { host },
            socketId: socket.id,
          });
          handleScreenChangeS1("Student2Connected", nickname, host);
          form.reset();
        } else {
          alert(`Could not find game with pin ${pin} and name ${nameOfClass}`);
        }

        // logger.debug("setNotes", notes);
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      // logger.warn(error.message);
    }
    // };
  };
  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          <div className="grouped-elements">
            <div className="form-field">
              <label htmlFor="pin" className="input-label">
                Enter class PIN:
              </label>
              <input
                type="text"
                placeholder="Enter class PIN..."
                name="pin"
                id="pin"
                className="input-field"
              />
            </div>

            <div className="form-field">
              <label htmlFor="nameOfCLass" className="input-label">
                Enter the class name:
              </label>
              <input
                type="text"
                placeholder="Enter the class name..."
                name="nameOfClass"
                id="nameOfClass"
                className="input-field"
              />
            </div>

            <div className="form-field">
              <label htmlFor="nickname" className="input-label">
                Choose a nickname:
              </label>
              <input
                type="text"
                placeholder="Enter your nickname..."
                name="nickname"
                id="nickname"
                className="input-field"
              />
            </div>
          </div>
          <button href="" type="submit" className="footer-button">
            Join
          </button>
        </form>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default Student1EnterClass;
