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
  context: { handleFeedback },
}) {
  const logger = new Loggito("Edit Question");
  const [questionForEdit, setQuestionForEdit] = useState("");

  const handleReturn = () => {
    onReturn();
  };

  const loadQuestionForEdit = () => {
    try {
      retrieveQuestionForEdit(
        sessionStorage.token,
        questionBeingEditedId,
        (error, question) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          setQuestionForEdit(question);

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
    debugger;

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

            handleNavigateTo(editedLocation);
            // handleReturn();
          }
        );
      } catch (error) {
        handleFeedback({ message: error.message, level: "error" });

        logger.warn(error.message);
      }
    } else if (editedLocation.pathname === "/communityList") {
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
            // loadNotes();
          }
        );
      } catch (error) {
        handleFeedback({ message: error.message, level: "error" });

        logger.warn(error.message);
      }
    }
  };

  useEffect(() => {
    const timeLimitElement = document.getElementById("timeLimit");
    const visibilityElement = document.getElementById("visibility");
    const questionElement = document.getElementById("question");
    const suggestedAnswerElement = document.getElementById("suggestedAnswer");

    console.log(`questionBeingEdited: ${questionForEdit}`);

    console.log(`timeLimitElement: ${timeLimitElement}`);
    console.log(`visibilityElement: ${visibilityElement}`);
    console.log(`questionElement: ${questionElement}`);
    console.log(`suggestedAnswerElement: ${suggestedAnswerElement}`);

    timeLimitElement.value = questionForEdit.timeLimit;
    visibilityElement.value = questionForEdit.visibility;
    questionElement.value = questionForEdit.question;
    suggestedAnswerElement.value = questionForEdit.suggestedAnswer;
  }, [questionForEdit]);

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
          <div className="form-field">
            <label htmlFor="question" className="input-label">
              Question:
            </label>
            <input
              type="text"
              placeholder="Write your question..."
              name="question"
              id="question"
              className="input-field"
            />
          </div>
          <div className="form-field">
            <label htmlFor="suggestedAnswer" className="input-label">
              Suggested answer:
            </label>
            <input
              type="text"
              placeholder="Write a suggested answer..."
              name="suggestedAnswer"
              id="suggestedAnswer"
              className="input-field"
            />
          </div>

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
        </form>
      </main>

      <footer className="game-screen-footer"></footer>
    </div>
  );
}

export default withContext(EditQuestionPanel);
