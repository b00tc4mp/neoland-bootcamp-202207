import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loggito from "../utils/Loggito";

import Search from "./Search";

function CommunityList({
  questionsPublic,
  onDeleteQuestion,
  onUpdateQuestion,
  onEditQuestion,
  onReturn,
  onSearchPublic,
}) {
  const logger = new Loggito("List");

  const questionText = {}; // dictionary

  const location = useLocation();

  useEffect(() => {
    logger.info("useEffect communitylist");

    if (questionsPublic) {
      questionsPublic.map((question) => textAreaAdjust(question.id));
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

  const handleEditQuestion = (questionId) => {
    onEditQuestion(questionId, location);
  };

  return (
    <div className="grouped-elements questions-list-panel">
      <span
        className="material-symbols-outlined button-icon"
        onClick={onReturn}
      >
        arrow_back_ios_new
      </span>

      <div className="grouped-elements questions-list-panel">
        <Search onQuery={onSearchPublic} />
        <ul className="list-panel list questions-list">
          {questionsPublic &&
            questionsPublic.map((question) => (
              <li className="list__item" key={question.id}>
                <div className="question-options-grouped">
                  <button
                    className="material-symbols-outlined question-option-button"
                    onClick={() => handleEditQuestion(question.id)}
                  >
                    edit
                  </button>
                  <button
                    className="material-symbols-outlined question-option-button"
                    onClick={() => onDeleteQuestion(question.id)}
                  >
                    close
                  </button>
                </div>
                {/* <textarea
                  ref={(ref) => (questionText[question.id] = ref)}
                  className="list__item-text"
                  onKeyUp={(event) => {
                    textAreaAdjust(question.id);
                    if (window.updateQuestionTimeoutId)
                      clearTimeout(window.updateQuestionTimeoutId);
                    window.updateQuestionTimeoutId = setTimeout(() => {
                      const question = event.target.value;
                      onUpdateQuestion(question.id, question);
                    }, 500);
                  }}
                  defaultValue={question.question}
                ></textarea> */}
                <p
                  ref={(ref) => (questionText[question.id] = ref)}
                  className="list__item-text list__item-text-readonly"
                >
                  {question.question}
                </p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CommunityList;
