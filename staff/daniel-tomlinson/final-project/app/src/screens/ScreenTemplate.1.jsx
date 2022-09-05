// import "./ScreenTemplate.1.css";
import "./ScreenTemplate.1.scss";
import Spinner from "./Spinner";
import CountdownTimer from "./CountdownTimer";

const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function ScreenTemplate1({ gameHeader, gameMain, gameFooter }) {
  return (
    <div className="game-screen">
      <header className="game-screen-header">
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
        <h1 className="app-title">App Name</h1>
        <button
          type="menu"
          className="material-symbols-outlined"
          onClick={handleLeaveClick}
        >
          exit_to_app
        </button>
      </header>
      <main className="game-screen-main">
        {/* <p className="info">
          Click ‘start’ to open the class and generate the code!
        </p>
        <p className="info--bold">
          Click ‘start’ to open the class and generate the code!
        </p> */}
        {/* <form action="" className="form" onSubmit={handleFormSubmit}>
          <div className="form-field">
            <label htmlFor="input-1" className="input-label">
              input 1
            </label>
            <input
              type="text"
              placeholder="input 1..."
              name="input-1"
              id="input-1"
              className="input-field"
            />
          </div>

          <div className="form-field">
            <label htmlFor="input-2" className="input-label">
              input 2
            </label>
            <input
              type="text"
              placeholder="input 2..."
              name="input-2"
              id="input-2"
              className="input-field"
            />
          </div>
          <button
            href="home.html"
            type="submit"
            className="footer-button form-button"
          >
            Login
          </button>
        </form> */}
        {/* <button className="material-symbols-outlined home-icon">home</button> */}
        {/* <span class="material-symbols-outlined feedback-icon">
          sentiment_satisfied
        </span> */}
        {/* <span class="material-symbols-outlined feedback-icon">
          sentiment_dissatisfied
        </span> */}
        {/* <span class="material-symbols-outlined tick-icon">check_circle</span> */}
        {/* <div class="demo">
          <div class="demo__colored-blocks">
            <div class="demo__colored-blocks-rotater">
              <div class="demo__colored-block"></div>
              <div class="demo__colored-block"></div>
              <div class="demo__colored-block"></div>
            </div>
            <div class="demo__colored-blocks-inner"></div>
            <div class="demo__text">Go!</div>
          </div>
          <div class="demo__inner">
            <svg class="demo__numbers" viewBox="0 0 100 100">
              <defs>
                <path class="demo__num-path-1" d="M40,28 55,22 55,78" />
                <path
                  class="demo__num-join-1-2"
                  d="M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10"
                />
                <path
                  class="demo__num-path-2"
                  d="M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7"
                />
                <path class="demo__num-join-2-3" d="M28,69 Q25,44 34.4,27.4" />
                <path
                  class="demo__num-path-3"
                  d="M30,20 60,20 40,50 a18,15 0 1,1 -12,19"
                />
              </defs>
              <path
                class="demo__numbers-path"
                d="M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 
               Q25,44 34.4,27.4
               l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 
               a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 
               l0,-61 L40,28"
              />
            </svg>
          </div>
        </div> */}
        {/* <Spinner /> */}
        {/* <CountdownTimer /> */}
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default ScreenTemplate1;
