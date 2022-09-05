// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

const handleFormSubmit = () => {};

function ScreenStudent1EnterClass({ gameHeader, gameMain, gameFooter }) {
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

export default ScreenStudent1EnterClass;
