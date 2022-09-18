// import "./ScreenTemplate.1.css";
// import "./ScreenTemplate.1.scss";
// import Spinner from "./Spinner";
import CountdownTimer from "../CountdownTimer";
import { useEffect, useState } from "react";

// const handleLeaveClick = () => {};

function Student4ResponseInput({
  question,
  timeLimit,
  socket,
  handleScreenChangeS4,
  host,
  questionType,
  answerA,
  answerB,
  answerC,
  answerD,
}) {
  const questionString = question;
  const timeLimitSeconds = Math.floor(timeLimit);
  const timeLimitNumber = timeLimit;

  const [MCQResponses, setMCQResponses] = useState({
    A: "incorrect",
    B: "incorrect",
    C: "incorrect",
    D: "incorrect",
  });

  // const [answersSelected, setAnswersSelected] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    clearTimeout(timeout);

    const responseDetails = {
      writtenResponse: "",
      responseA: "",
      responseB: "",
      responseC: "",
      responseD: "",
    };

    const form = event.target;

    const answersSelected = [];

    if (questionType === "written")
      responseDetails.writtenResponse = form.response.value;
    else if (questionType === "MCQ") {
      if (MCQResponses.A === "correct")
        answersSelected[answersSelected.length] = "A";
      if (MCQResponses.B === "correct")
        answersSelected[answersSelected.length] = "B";
      if (MCQResponses.C === "correct")
        answersSelected[answersSelected.length] = "C";
      if (MCQResponses.D === "correct")
        answersSelected[answersSelected.length] = "D";

      responseDetails.responseA = MCQResponses.A;
      responseDetails.responseB = MCQResponses.B;
      responseDetails.responseC = MCQResponses.C;
      responseDetails.responseD = MCQResponses.D;
      responseDetails.answersSelected = answersSelected;
    }

    // setAnswersSelected(answersSelectedArray);

    // const responseInput = form.response;

    // const response = responseInput.value;

    // const response = String(responseValue.rersponse);

    const socketId = socket.id;

    socket.emit("S4", {
      responseDetails,
      // response,
      socketId,
      host,
    });

    handleScreenChangeS4("Student5WaitingForFeedback");
  };

  const handleFormSubmit2 = () => {
    const button = document.getElementsByClassName("response-submit-button");

    button[0].click();
  };

  /* const handleFormSubmit2 = () => {

    const form = document.getElementsByClassName("form");

    const responseInput = form[0].response;

    const response = responseInput.value;

    const socketId = socket.id;

    socket.emit("S4", { response, socketId, host });

    handleScreenChangeS4("Student5WaitingForFeedback");
  }; */

  socket.on("T4", () => {
    console.log("T4 received by client");
    handleFormSubmit2();
  });

  // useEffect(() => {

  let timeout = setTimeout(handleFormSubmit2, timeLimitNumber);

  const handleCorrectClick = (response) => {
    if (response === "A" && MCQResponses.A === "incorrect")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ A: "correct" },
      }));
    else if (response === "A" && MCQResponses.A === "correct")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ A: "incorrect" },
      }));
    else if (response === "B" && MCQResponses.B === "incorrect")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ B: "correct" },
      }));
    else if (response === "B" && MCQResponses.B === "correct")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ B: "incorrect" },
      }));
    else if (response === "C" && MCQResponses.C === "incorrect")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ C: "correct" },
      }));
    else if (response === "C" && MCQResponses.C === "correct")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ C: "incorrect" },
      }));
    else if (response === "D" && MCQResponses.D === "incorrect")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ D: "correct" },
      }));
    else if (response === "D" && MCQResponses.D === "correct")
      setMCQResponses((MCQResponses) => ({
        ...MCQResponses,
        ...{ D: "incorrect" },
      }));
  };

  /*   setTimeout(() => {
    handleFormSubmit2();
  }, timeLimitNumber); */

  // }, [])

  useEffect(() => {
    let timeLimitSeconds = timeLimit / 1000;
    let contador = timeLimitSeconds;

    setTimeout(() => {
      document.querySelector(".num").innerHTML = contador;

      var interval = setInterval(() => {
        contador--;

        document.querySelector(".num").innerHTML = contador;

        if (contador <= 0) {
          clearInterval(interval);
        }
      }, 1000);
    }, 500);
  });

  return (
    <div className="game-screen">
      <main className="game-screen-main">
        <div className="grouped-elements">
          {/* <CountdownTimer timeLimit={timeLimitSeconds} /> */}

          <div className="grouped-elements flex-row">
            <div className="progress-bar">
              <div
                className="progress"
                style={{ animation: `fill ${timeLimit / 1000}s linear` }}
              ></div>
            </div>
            <div className="num"></div>
          </div>

          <p className="paragraph--bold">Question: </p>
          <p className="list__item-text list__item-text-readonly info">
            {questionString}
          </p>
        </div>

        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          {questionType === "written" && (
            <div className="form-field">
              <label htmlFor="answer" className="input-label input-label--bold">
                Write your answer:
              </label>
              {/* <input
                type="text"
                placeholder="Write your answer here..."
                name="response"
                id="response"
                className="input-field"
              /> */}
              <textarea
                className="list__item-text list-item__text--form input-field"
                type="text"
                placeholder="Write your answer here..."
                name="response"
                id="response"
              ></textarea>
            </div>
          )}

          {questionType === "MCQ" && (
            <div className="grouped-elements">
              <div className="grouped-elements flex-row">
                {MCQResponses.A === "correct" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse MCQResponse--correct"
                    onClick={() => {
                      handleCorrectClick("A");
                    }}
                  >
                    {answerA[0]}
                  </span>
                )}

                {MCQResponses.A === "incorrect" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse"
                    onClick={() => {
                      handleCorrectClick("A");
                    }}
                  >
                    {answerA[0]}
                  </span>
                )}

                {MCQResponses.B === "correct" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse MCQResponse--correct"
                    onClick={() => {
                      handleCorrectClick("B");
                    }}
                  >
                    {answerB[0]}
                  </span>
                )}

                {MCQResponses.B === "incorrect" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse"
                    onClick={() => {
                      handleCorrectClick("B");
                    }}
                  >
                    {answerB[0]}
                  </span>
                )}
              </div>

              <div className="grouped-elements flex-row">
                {MCQResponses.C === "correct" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse MCQResponse--correct"
                    onClick={() => {
                      handleCorrectClick("C");
                    }}
                  >
                    {answerC[0]}
                  </span>
                )}

                {MCQResponses.C === "incorrect" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse"
                    onClick={() => {
                      handleCorrectClick("C");
                    }}
                  >
                    {answerC[0]}
                  </span>
                )}

                {MCQResponses.D === "correct" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse MCQResponse--correct"
                    onClick={() => {
                      handleCorrectClick("D");
                    }}
                  >
                    {answerD[0]}
                  </span>
                )}

                {MCQResponses.D === "incorrect" && (
                  <span
                    className="list__item-text list__item-text-readonly MCQResponse"
                    onClick={() => {
                      handleCorrectClick("D");
                    }}
                  >
                    {answerD[0]}
                  </span>
                )}
              </div>
            </div>
          )}

          <button
            href=""
            type="submit"
            className="footer-button response-submit-button"
          >
            Submit
          </button>
        </form>
      </main>

      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default Student4ResponseInput;
