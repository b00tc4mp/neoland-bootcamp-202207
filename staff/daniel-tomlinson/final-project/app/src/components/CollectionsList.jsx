import { useEffect } from "react";
import Loggito from "../utils/Loggito";

function CollectionsList({
  questions,
  onDeleteQuestion,
  onUpdateQuestion,
  onReturn,
  gameBeingPlayed,
}) {
  const logger = new Loggito("List");

  const questionText = {}; // dictionary

  useEffect(() => {
    logger.info("useEffect questionlist");

    if (questions) {
      questions.map((question) => textAreaAdjust(question._id));
      logger.info("question text area adjusted");
    }
  });

  //changed to arrow function
  const textAreaAdjust = (questionId) => {
    questionText[questionId].style.height = "inherit";
    questionText[questionId].style.height = `${
      25 + questionText[questionId].scrollHeight
    }px`;
  };

  return (
    <div className="grouped-elements">
      <span
        className="material-symbols-outlined button-icon"
        onClick={onReturn}
      >
        arrow_back_ios_new
      </span>
      <ul className="list-panel list">
        {questions &&
          questions.map((question) => (
            <li className="list__item" key={question._id}>
              <button
                className="list__item-delete-button"
                onClick={() => onDeleteQuestion(question._id)}
              >
                x
              </button>
              <textarea
                ref={(ref) => (questionText[question._id] = ref)}
                className="list__item-text"
                onKeyUp={(event) => {
                  textAreaAdjust(question._id);
                  if (window.updateQuestionTimeoutId)
                    clearTimeout(window.updateQuestionTimeoutId);
                  window.updateQuestionTimeoutId = setTimeout(() => {
                    const text = event.target.value;
                    onUpdateQuestion(question._id, text);
                  }, 500);
                }}
                defaultValue={question.question}
              ></textarea>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default CollectionsList;
