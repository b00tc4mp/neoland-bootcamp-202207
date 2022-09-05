import { SOCKET } from "../SOCKET";
// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

// const handleLeaveClick = () => {};

function TeacherScreen1StartClass({ gameHeader, gameMain, gameFooter }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const nameOfClassInput = form.nameOfClass;

    const nameOfClass = nameOfClassInput.value;

    form.reset();

    SOCKET.emit("1", {
      gameScreen: "Student1StartClass",
      nameOfClass: { nameOfClass },
    });
  };
  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <p className="info">
          Click ‘start’ to open the class and generate the code!
        </p>
        <form action="" className="form" onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="nameOfClass" className="input-label">
              Enter name of class:
            </label>
            <input
              type="text"
              placeholder="Enter a name for your class..."
              name="nameOfClass"
              id="nameOfClass"
              className="input-field"
            />
          </div>

          <button href="" type="submit" className="footer-button form-button">
            Login
          </button>
        </form>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default TeacherScreen1StartClass;
