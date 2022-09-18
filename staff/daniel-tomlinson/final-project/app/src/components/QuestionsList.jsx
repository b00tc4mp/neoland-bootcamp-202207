import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loggito from "../utils/Loggito";

import Search from "./Search";

import { retrieveQuestions, searchQuestions, deleteQuestion } from "../logic";

function QuestionsList({
  onDeleteQuestion,
  onUpdateQuestion,
  handleEditQuestion,
  onReturn,
  handleFeedback,
  gameBeingPlayed,
  handleSelectQuestionForGame,
}) {
  const logger = new Loggito("List");

  const questionText = {}; // dictionary

  const location = useLocation();

  const [questions, setQuestions] = useState();
  const [query, setQuery] = useState();

  const handleSearch = (query) => setQuery(query);

  useEffect(() => {
    loadQuestions();
  }, []);

  useEffect(() => {
    loadQuestions();
  }, [query]);

  const loadQuestions = () => {
    try {
      if (!query)
        return retrieveQuestions(sessionStorage.token, (error, questions) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          setQuestions(questions);

          logger.debug("setQuestions", questions);
        });
      else
        searchQuestions(sessionStorage.token, query, (error, questions) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          setQuestions(questions);

          logger.debug("setQuestions", questions);
        });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleDeleteQuestion = (questionId) => {
    try {
      deleteQuestion(sessionStorage.token, questionId, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        loadQuestions();
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  // This is to play with text area
  useEffect(() => {
    logger.info("useEffect questionlist");

    if (questions) {
      questions.map((question) => textAreaAdjust(question.id));
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

  // =========================== //

  const onEditQuestion = (questionId) => {
    handleEditQuestion(questionId, location);
  };

  const onSelectQuestionForGame = (questionId) => {
    handleSelectQuestionForGame(questionId);
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
        <Search onQuery={handleSearch} />
        {gameBeingPlayed === false && (
          <ul className="list-panel list questions-list">
            {questions &&
              questions.map((question) => (
                <li className="list__item" key={question.id}>
                  <div className="question-options-grouped">
                    <button
                      className="material-symbols-outlined question-option-button"
                      onClick={() => onEditQuestion(question.id)}
                    >
                      edit
                    </button>

                    <div className="grouped-elements flex-row">
                      <span className="material-symbols-rounded question-option-button">
                        thumb_up
                      </span>
                      <p className="question-option-button">2</p>
                    </div>
                    <div className="grouped-elements flex-row">
                      <span className="material-symbols-rounded question-option-button">
                        thumb_down
                      </span>
                      <p className="question-option-button">3</p>
                    </div>
                    <button
                      className="material-symbols-outlined question-option-button"
                      onClick={() => handleDeleteQuestion(question.id)}
                    >
                      close
                    </button>
                  </div>
                  <textarea
                    ref={(ref) => (questionText[question.id] = ref)}
                    className="list__item-text input-item"
                    onKeyUp={(event) => {
                      textAreaAdjust(question.id);
                      if (window.updateQuestionTimeoutId)
                        clearTimeout(window.updateQuestionTimeoutId);
                      window.updateQuestionTimeoutId = setTimeout(() => {
                        const questionUpdate = event.target.value;
                        onUpdateQuestion(question.id, questionUpdate);
                      }, 500);
                    }}
                    defaultValue={question.question}
                  ></textarea>
                </li>
              ))}
          </ul>
        )}
        {gameBeingPlayed === true && (
          <ul className="list-panel list questions-list">
            {questions &&
              questions.map((question) => (
                <li className="list__item" key={question.id}>
                  <div className="question-options-grouped">
                    <div className="grouped-elements flex-row">
                      <span className="material-symbols-rounded question-option-button">
                        thumb_up
                      </span>
                      <p className="question-option-button">2</p>
                    </div>
                    <button
                      type="button"
                      className="select-question-button"
                      onClick={() => onSelectQuestionForGame(question.id)}
                    >
                      Select
                    </button>
                    <div className="grouped-elements flex-row">
                      <span className="material-symbols-rounded question-option-button">
                        thumb_down
                      </span>
                      <p className="question-option-button">3</p>
                    </div>
                  </div>
                  <textarea
                    ref={(ref) => (questionText[question.id] = ref)}
                    className="list__item-text input-item"
                    defaultValue={question.question}
                  ></textarea>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default QuestionsList;
