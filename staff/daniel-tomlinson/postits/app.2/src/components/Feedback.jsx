import "./Feedback.css";
// import Loggito from "../utils/Loggito";

function Feedback({ level, message, onClick }) {
  return (
    <div
      className={`Feedback flex-container Feedback--${level ? level : "info"}`}
    >
      <div className="Feedback__box flex-container  container--spaced  container--padded">
        {message}
        <button className="toast-accept-button" onClick={onClick}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default Feedback;
