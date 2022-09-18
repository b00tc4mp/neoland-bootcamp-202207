import Loggito from "../utils/Loggito";
import retrieveQuestionForEdit from "../logic/retrieveQuestionForEdit";
import updateQuestionEdit from "../logic/updateQuestionEdit";
import { useEffect, useState } from "react";

import createQuestion from "../logic/createQuestion";

import withContext from "../utils/withContext";

function EditQuestionPanel({
  onReturn,
  questionBeingEditedId,
  editedLocation,
  handleNavigateTo,
  loadQuestions,
  loadQuestionsPublic,
  context: { handleFeedback },
}) {
  const logger = new Loggito("Edit Question");
  const [questionForEdit, setQuestionForEdit] = useState("");
  const [questionType, setQuestionType] = useState(null);

  const [MCQResponses, setMCQResponses] = useState({
    A: "incorrect",
    B: "incorrect",
    C: "incorrect",
    D: "incorrect",
  });

  const handleReturn = () => {
    onReturn();
  };

  const loadQuestionForEdit = () => {
    try {
      retrieveQuestionForEdit(
        sessionStorage.token,
        questionBeingEditedId,
        (error, question) => {
          debugger;
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          setQuestionForEdit(question);
          setQuestionType(question.questionType);
          setMCQResponses((MCQResponses) => ({
            ...MCQResponses,
            ...{ A: question.answerA[1] },
          }));
          setMCQResponses((MCQResponses) => ({
            ...MCQResponses,
            ...{ B: question.answerB[1] },
          }));
          setMCQResponses((MCQResponses) => ({
            ...MCQResponses,
            ...{ B: question.answerB[1] },
          }));
          setMCQResponses((MCQResponses) => ({
            ...MCQResponses,
            ...{ B: question.answerB[1] },
          }));

          logger.debug("setQuestionForEdit", question);

          return;
        }
      );
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  useEffect(() => {
    loadQuestionForEdit();
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const questionInput = form.question;
    const timeLimitInput = form.timeLimit;
    const visibilityInput = form.visibility;
    const suggestedAnswerInput = form.suggestedAnswer;

    const question = questionInput.value;
    const timeLimit = timeLimitInput.value;
    const visibility = visibilityInput.value;
    let suggestedAnswer = suggestedAnswerInput.value;

    if (!suggestedAnswer) suggestedAnswer = "";

    form.reset();
    if (editedLocation.pathname === "/questionsList") {
      try {
        updateQuestionEdit(
          sessionStorage.token,
          questionBeingEditedId,
          question,
          suggestedAnswer,
          timeLimit,
          visibility,
          (error) => {
            if (error) {
              handleFeedback({ message: error.message, level: "error" });

              logger.warn(error.message);

              return;
            }
            loadQuestions();
            handleNavigateTo(editedLocation);
          }
        );
      } catch (error) {
        handleFeedback({ message: error.message, level: "error" });

        logger.warn(error.message);
      }
    } else if (
      editedLocation.pathname === "/communityList" ||
      "/favouritesList"
    ) {
      try {
        createQuestion(
          sessionStorage.token,
          question,
          suggestedAnswer,
          timeLimit,
          visibility,
          (error) => {
            if (error) {
              handleFeedback({ message: error.message, level: "error" });

              logger.warn(error.message);

              return;
            }

            handleNavigateTo(editedLocation.pathname);
          }
        );
      } catch (error) {
        handleFeedback({ message: error.message, level: "error" });

        logger.warn(error.message);
      }
    } /* else if (editedLocation.pathname === "/favouritesList") {
      try {
        createQuestion(
          sessionStorage.token,
          question,
          suggestedAnswer,
          timeLimit,
          visibility,
          (error) => {
            if (error) {
              handleFeedback({ message: error.message, level: "error" });

              logger.warn(error.message);

              return;
            }

            handleNavigateTo(editedLocation.pathname);
          }
        );
      } catch (error) {
        handleFeedback({ message: error.message, level: "error" });

        logger.warn(error.message);
      }
    } */
  };

  useEffect(() => {
    const timeLimitElement = document.getElementById("timeLimit");
    const visibilityElement = document.getElementById("visibility");
    const questionElement = document.getElementById("question");

    const suggestedAnswerElement = document.getElementById("suggestedAnswer");

    const MCQAElement = document.getElementById("MCQA");
    const MCQBElement = document.getElementById("MCQB");
    const MCQCElement = document.getElementById("MCQC");
    const MCQDElement = document.getElementById("MCQD");

    console.log(`questionBeingEdited: ${questionForEdit}`);

    console.log(`timeLimitElement: ${timeLimitElement}`);
    console.log(`visibilityElement: ${visibilityElement}`);
    console.log(`questionElement: ${questionElement}`);
    console.log(`suggestedAnswerElement: ${suggestedAnswerElement}`);

    timeLimitElement.value = questionForEdit.timeLimit;
    visibilityElement.value = questionForEdit.visibility;
    questionElement.value = questionForEdit.question;

    if (questionForEdit.questionType === "written")
      suggestedAnswerElement.value = questionForEdit.suggestedAnswer;

    if (questionForEdit.questionType === "MCQ") {
      MCQAElement.value = questionForEdit.answerA[0];
      MCQBElement.value = questionForEdit.answerB[0];
      MCQCElement.value = questionForEdit.answerC[0];
      MCQDElement.value = questionForEdit.answerD[0];
    }
  }, [questionForEdit]);

  /* const questionText = {}; // dictionary */

  const textAreaAdjust = (questionForEdit) => {
    const questionText = document.getElementById("question");
    questionText.style.height = "inherit";
    questionText.style.height = `${25 + questionText.scrollHeight}px`;
  };

  useEffect(() => {
    logger.info("useEffect questionlist");

    textAreaAdjust(questionForEdit);
    logger.info("question text area adjusted");
  });

  const handleWrittenResponseClick = () => {
    setQuestionType("written");
  };

  const handleMCQClick = () => {
    setQuestionType("MCQ");
  };

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

  return (
    <div className="game-screen">
      <span
        className="material-symbols-outlined button-icon"
        onClick={handleReturn}
      >
        arrow_back_ios_new
      </span>
      <main className="game-screen-main flex--spaced">
        <form
          action=""
          className="form form--spread"
          onSubmit={handleFormSubmit}
        >
          <div className="grouped-elements flex-row">
            <select id="timeLimit">
              <option value="30000">Time limit...</option>
              <option value="10000">10 seconds</option>
              <option value="20000">20 seconds</option>
              <option value="30000">30 seconds</option>
              <option value="45000">45 seconds</option>
              <option value="50000">1 minute</option>
              <option value="60000">1 min 30 sec</option>
              <option value="70000">2 mins</option>
              <option value="80000">no limit</option>
            </select>
            <select id="visibility">
              <option value="public">Public</option>
              <option value="private">Private</option>
            </select>
          </div>

          {/* <div className="form-field">
            <label htmlFor="question" className="input-label">
              Question:
            </label>
            <input
              type="text"
              placeholder="Write your question..."
              name="question"
              id="question"
              className="input-field list__item-text"
            />
          </div> */}
          <div className="form-field">
            <label htmlFor="question" className="input-label">
              Question:
            </label>
            <textarea
              className="list__item-text list-item__text--form input-field"
              defaultValue={questionForEdit.question}
              type="text"
              placeholder="Write your question..."
              name="question"
              id="question"
            ></textarea>
          </div>
          {/* For the moment, the ability tp change questionType will be disabled */}
          {/* <div className="grouped-elements flex-row">
            <button
              href=""
              type="button"
              className="footer-button"
              onClick={handleWrittenResponseClick}
            >
              Written reponse
            </button>
            <button
              href=""
              type="button"
              className="footer-button"
              onClick={handleMCQClick}
            >
              Multiple choice
            </button>
          </div> */}

          {questionType === null ||
            // (questionForEdit.questionType === "written" && (
            (questionType === "written" && (
              <div className="form-field">
                <label htmlFor="suggestedAnswer" className="input-label">
                  Suggested answer:
                </label>
                {/* <input
    type="text"
    placeholder="Write a suggested answer..."
    name="suggestedAnswer"
    id="suggestedAnswer"
    className="input-field"
  /> */}
                <textarea
                  className="list__item-text list-item__text--form"
                  defaultValue={questionForEdit.question}
                  type="text"
                  placeholder="Write a suggested answer..."
                  name="suggestedAnswer"
                  id="suggestedAnswer"
                ></textarea>
              </div>
            ))}

          {/* {questionForEdit.questionType === "MCQ" && ( */}
          {questionType === null ||
            (questionType === "MCQ" && (
              <div className="grouped-elements">
                <p>Write the answers and select on or more as correct:</p>
                <div className="grouped-elements flex-row">
                  <div className="form-field">
                    <div className="grouped-elements flex-row">
                      <label htmlFor="MCQA" className="input-label">
                        Answer A:
                      </label>
                      {MCQResponses.A === "incorrect" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle"
                          onClick={() => {
                            handleCorrectClick("A");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                      {MCQResponses.A === "correct" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle check-circle--correct"
                          onClick={() => {
                            handleCorrectClick("A");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                    </div>
                    {/* <input
                    type="text"
                    placeholder="Write answer A..."
                    name="MCQA"
                    id="MCQA"
                    className="input-field"
                  /> */}
                    <textarea
                      className="list__item-text list-item__text--form input-field"
                      type="text"
                      placeholder="Write answer A..."
                      name="MCQA"
                      id="MCQA"
                    ></textarea>
                  </div>

                  <div className="form-field">
                    <div className="grouped-elements flex-row">
                      <label htmlFor="MCQB" className="input-label">
                        Answer B:
                      </label>
                      {MCQResponses.B === "incorrect" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle"
                          onClick={() => {
                            handleCorrectClick("B");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                      {MCQResponses.B === "correct" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle check-circle--correct"
                          onClick={() => {
                            handleCorrectClick("B");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                    </div>
                    {/* <input
                    type="text"
                    placeholder="Write answer B..."
                    name="MCQB"
                    id="MCQB"
                    className="input-field"
                  /> */}
                    <textarea
                      className="list__item-text list-item__text--form input-field"
                      type="text"
                      placeholder="Write answer B..."
                      name="MCQB"
                      id="MCQB"
                    ></textarea>
                  </div>
                </div>

                <div className="grouped-elements flex-row">
                  <div className="form-field">
                    <div className="grouped-elements flex-row">
                      <label htmlFor="MCQC" className="input-label">
                        Answer C:
                      </label>
                      {MCQResponses.C === "incorrect" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle"
                          onClick={() => {
                            handleCorrectClick("C");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                      {MCQResponses.C === "correct" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle check-circle--correct"
                          onClick={() => {
                            handleCorrectClick("C");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                    </div>
                    {/* <input
                    type="text"
                    placeholder="Write answer C..."
                    name="MCQC"
                    id="MCQC"
                    className="input-field"
                  /> */}
                    <textarea
                      className="list__item-text list-item__text--form input-field"
                      type="text"
                      placeholder="Write answer C..."
                      name="MCQC"
                      id="MCQC"
                    ></textarea>
                  </div>
                  <div className="form-field">
                    <div className="grouped-elements flex-row">
                      <label htmlFor="MCQD" className="input-label">
                        Answer D:
                      </label>
                      {MCQResponses.D === "incorrect" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle"
                          onClick={() => {
                            handleCorrectClick("D");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                      {MCQResponses.D === "correct" && (
                        <span
                          className="material-symbols-rounded question-option-button check-circle check-circle--correct"
                          onClick={() => {
                            handleCorrectClick("D");
                          }}
                        >
                          check_circle
                        </span>
                      )}
                    </div>
                    {/* <input
                    type="text"
                    placeholder="Write answer D..."
                    name="MCQD"
                    id="MCQD"
                    className="input-field"
                  /> */}
                    <textarea
                      className="list__item-text list-item__text--form input-field"
                      type="text"
                      placeholder="Write answer D..."
                      name="MCQD"
                      id="MCQD"
                    ></textarea>
                  </div>
                </div>
              </div>
            ))}

          {editedLocation.pathname === "/questionsList" && (
            <button href="" type="submit" className="footer-button">
              Save
            </button>
          )}
          {editedLocation.pathname === "/communityList" && (
            <button href="" type="submit" className="footer-button">
              Save copy
            </button>
          )}
          {editedLocation.pathname === "/favouritesList" && (
            <button href="" type="submit" className="footer-button">
              Save copy
            </button>
          )}
        </form>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default withContext(EditQuestionPanel);
