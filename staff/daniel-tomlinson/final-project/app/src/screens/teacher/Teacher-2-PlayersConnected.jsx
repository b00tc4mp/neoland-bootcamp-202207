// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
// import CountdownTimer from "./CountdownTimer";

const handleLeaveClick = () => {};

const handleFormSubmit = () => {};

function Teacher2PlayersConnected({
  pin,
  nameOfClass,
  nickname,
  handleScreenChangeT2,
  socket,
}) {
  // const nicknameString = nickname.nickname;

  const onButtonClick = () => {
    // socket.emit("T2", {
    // gameScreen: "Student3GetReady",
    // });
    handleScreenChangeT2("Teacher3CreateQuestion");
  };

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
            {/* <ul>{nicknameString}</ul> */}
            {nickname.map((ncknme) => {
              return (
                <li className="" key="ncknme">
                  {/* {ncknme.nickname} */}
                  {ncknme}
                </li>
              );
            })}
          </div>
        </div>
        <button className="footer-button" onClick={onButtonClick}>
          start game
        </button>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default Teacher2PlayersConnected;
