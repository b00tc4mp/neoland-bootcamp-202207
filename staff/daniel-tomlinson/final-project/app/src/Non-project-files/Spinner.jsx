import "./Spinner.css";

function Spinner() {
  return (
    <div className="spinner-container">
      <div className="flexbox">
        <div className="dot-loader"></div>
        <div className="dot-loader dot-loader--2"></div>
        <div className="dot-loader dot-loader--3"></div>
      </div>
    </div>
  );
}

export default Spinner;
