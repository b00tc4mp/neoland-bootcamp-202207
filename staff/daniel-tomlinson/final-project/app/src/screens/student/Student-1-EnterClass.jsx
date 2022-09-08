// import { SOCKET } from "../SOCKET";
// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

function Student1EnterClass({
  pin,
  nameOfClass,
  handleScreenChangeS1,
  socket,
}) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const pinInput = form.pin;
    const nameOfClassInput = form.nameOfClass;
    const nicknameInput = form.nickname;

    const pinValue = pinInput.value;
    const nameOfClassValue = nameOfClassInput.value;
    const nickname = nicknameInput.value;

    const pinString = String(pin.pin);
    const nameOfClassString = nameOfClass.nameOfClass;

    if (pinString === pinValue && nameOfClassString === nameOfClassValue) {
      socket.emit("S1", {
        nickname: { nickname },
      });
      handleScreenChangeS1("Student2Connected", nickname);
      form.reset();
    } else {
      alert(
        `Could not find game with pin ${pinValue} and name ${nameOfClassValue}`
      );
    }
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
