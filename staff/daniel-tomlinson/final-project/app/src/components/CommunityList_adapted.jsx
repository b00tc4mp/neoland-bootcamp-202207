// ================== Imports ================== //

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Loggito from "../utils/Loggito";

import Search from "./Search";

import {
  retrieveQuestionsPublic,
  searchQuestionsPublic,
  updateFavorites,
} from "../logic";

import withContext from "../utils/withContext";

function CommunityList({
  // questionsPublic,
  handleEditQuestion,
  // handleFavoritesClick,
  onReturn,
  // onSearchPublic,
  gameBeingPlayed,
  handleSelectQuestionForGame,
  handleReturnInGame,
  context: { handleFeedback },
}) {
  const logger = new Loggito("List");

  const questionText = {}; // dictionary

  const location = useLocation();

  const [questionsPublic, setQuestionsPublic] = useState();
  const [query, setQuery] = useState();

  const handleSearch = (query) => setQuery(query);

  useEffect(() => {
    loadQuestionsPublic();
  }, []);

  useEffect(() => {
    loadQuestionsPublic();
  }, [query]);

  const loadQuestionsPublic = () => {
    try {
      if (!query)
        return retrieveQuestionsPublic(
          sessionStorage.token,
          (error, questions) => {
            if (error) {
              handleFeedback({ message: error.message, level: "error" });

              logger.warn(error.message);

              return;
            }

            setQuestionsPublic(questions);

            logger.debug("setQuestions", questions);
          }
        );
      else
        searchQuestionsPublic(
          sessionStorage.token,
          query,
          (error, questions) => {
            if (error) {
              handleFeedback({ message: error.message, level: "error" });

              logger.warn(error.message);

              return;
            }

            setQuestionsPublic(questions);

            logger.debug("setQuestions", questions);
          }
        );
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

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

  const onEditQuestion = (questionId) => {
    handleEditQuestion(questionId, location);
  };

  const handleUpdateFavorites = (questionId, action, location) => {
    try {
      updateFavorites(sessionStorage.token, questionId, action, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        loadQuestionsPublic();
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleFavoritesClick = (questionId, action, location) => {
    handleUpdateFavorites(questionId, action, location);
  };

  const onFavoritesClick = (questionId, questionIsFav) => {
    let action = null;
    if (questionIsFav === true) action = "remove";
    else if (questionIsFav === false) action = "add";
    handleFavoritesClick(questionId, action, location);

    loadQuestionsPublic();
  };

  /* const checkFavorites = (questionId) => {
    favorites.find(questionId);
  }; */

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
            {questionsPublic &&
              questionsPublic.map((question) => (
                <li className="list__item" key={question.id}>
                  <div className="question-options-grouped">
                    <button
                      className="material-symbols-outlined question-option-button"
                      onClick={() => onEditQuestion(question.id)}
                    >
                      edit
                    </button>
                    {question.isFav && (
                      <span
                        className="material-symbols-rounded question-option-button question-option-button-stars--true"
                        onClick={
                          () => onFavoritesClick(question.id, question.isFav)
                          /* handleUpdateFavorites(
                            question.id,
                            question.isFav,
                            location.pathname
                          ) */
                        }
                      >
                        stars
                      </span>
                    )}
                    {!question.isFav && (
                      <span
                        className="material-symbols-rounded question-option-button question-option-button-stars--false"
                        onClick={
                          () => onFavoritesClick(question.id, question.isFav)
                          /* handleUpdateFavorites(
                            question.id,
                            question.isFav,
                            location.pathname
                          ) */
                        }
                      >
                        stars
                      </span>
                    )}

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

                    {/* <button
                    className="material-symbols-outlined question-option-button"
                    onClick={() => onDeleteQuestion(question.id)}
                  >
                    close
                  </button> */}
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
        )}
        {gameBeingPlayed === true && (
          <ul className="list-panel list questions-list">
            {questionsPublic &&
              questionsPublic.map((question) => (
                <li className="list__item" key={question.id}>
                  <div className="question-options-grouped">
                    <div className="grouped-elements flex-row">
                      <span className="material-symbols-rounded question-option-button">
                        thumb_up
                      </span>
                      <p className="question-option-button">2</p>
                    </div>
                    {question.isFav && (
                      <span
                        className="material-symbols-rounded question-option-button question-option-button-stars--true"
                        /* onClick={() =>
                          onFavoritesClick(question.id, question.isFav, )
                        } */
                      >
                        stars
                      </span>
                    )}
                    {!question.isFav && (
                      <span
                        className="material-symbols-rounded question-option-button question-option-button-stars--false"
                        /* onClick={() =>
                          onFavoritesClick(question.id, question.isFav)
                        } */
                      >
                        stars
                      </span>
                    )}
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

export default withContext(CommunityList);
