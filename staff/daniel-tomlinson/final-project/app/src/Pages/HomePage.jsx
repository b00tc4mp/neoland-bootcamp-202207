import { useState, useEffect } from "react";
import Loggito from "../utils/Loggito";
// import retrieveUser from "../logic/retrieveUser";
// import retrieveQuestions from "../logic/retrieveQuestions";
// import createQuestion from "../logic/createQuestion";
// import createGameCode from "../logic/createGameCode";
// import updateQuestionText from "../logic/updateQuestionText";
// import deleteQuestion from "../logic/deleteQuestion";
import Settings from "../components/Settings";
import QuestionList from "../components/QuestionList";
import Header from "../components/Header";
import QuickPlayPage from "./QuickPlayPage";
import CreateQuestionPanel from "../components/CreateQuestionPanel";
import withContext from "../utils/withContext";

import {
  searchQuestions,
  retrieveUser,
  retrieveQuestions,
  createQuestion,
  createGameCode,
  updateQuestionText,
  deleteQuestion,
} from "../logic";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function HomePage({
  context: {
    handleLogoutClick,
    handleFeedback,
    // handleQuickPlayClick
  },
}) {
  const logger = new Loggito("HomePage");

  const [name, setName] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [query, setQuery] = useState(null);
  // const [view, setView] = useState("list");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    logger.info('"componentDidMount"');

    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          // onLogoutClick()

          return;
        }

        setName(user.name);

        logger.debug("setName", user.name);
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }

    loadQuestions();
  }, []);

  const onQuickPlayClick = () => {
    // debugger;
    // delete sessionStorage.token;
    // handleQuickPlayClick();
    navigate("quickPlayInHome");
  };

  /* const loadQuestions = () => {
    try {
      retrieveQuestions(sessionStorage.token, (error, questions) => {
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
  }; */

  useEffect(() => {
    logger.info("on query changed");

    loadQuestions();
  }, [query]);

  const loadQuestions = () => {
    try {
      if (!query)
        retrieveQuestions(sessionStorage.token, (error, questions) => {
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

  /*   const handleAddClick = () => {
    try {
      createQuestion(sessionStorage.token, (error) => {
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
  }; */

  const handleAddClick = () => {
    navigate("createQuestion");
  };

  const handleReturn = () => {
    navigate("./");
    loadQuestions();
  };

  const handleUpdateQuestion = (questionId, text) => {
    try {
      updateQuestionText(sessionStorage.token, questionId, text, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleDeleteQuestion = (questionId) => {
    try {
      deleteQuestion(sessionStorage.token, questionId, (error) => {
        debugger;
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

  const handleSettingsClick = () => {
    navigate("settings");

    logger.debug("navigate to settings");
  };

  const handleQuestionsClick = () => {
    navigate("/");

    logger.debug("navigate to list");
  };

  const handleResetPassword = () => {
    handleLogoutClick();
  };

  const handleLeaveClass = () => {
    navigate("/");
    // navigate("settings");
  };

  const handleSearch = (query) => setQuery(query);

  logger.info("render");

  return name ? (
    <div className="home-page page background flex-container--homepage">
      {location.pathname !== "/quickPlayInHome" && (
        <Header
          name={name}
          onLogoutClick={handleLogoutClick}
          onSettingsClick={handleSettingsClick}
          onQuestionsClick={handleQuestionsClick}
          // view={view}
          onFeedback={handleFeedback}
          onSearch={handleSearch}
        />
      )}
      <main className="main flex-container main-page-content">
        {location.pathname !== "/quickPlayInHome" && (
          <button className="button--primary" onClick={onQuickPlayClick}>
            Join or Start Quiz
          </button>
        )}
        <Routes>
          {/*  {view === "list" && (
            <QuestionList
              questions={questions}
              onUpdateQuestion={handleUpdateQuestion}
              onDeleteQuestion={handleDeleteQuestion}
              onFeedback={handleFeedback}
            />
          )}
          {view === "settings" && (
            <Settings
              onResetPassword={handleResetPassword}
              onFeedback={handleFeedback}
            />
          )} */}
          <Route
            path="quickPlayInHome"
            element={
              <QuickPlayPage
                handleFeedback={handleFeedback}
                handleLeaveClass={handleLeaveClass}
              />
            }
          />
          <Route
            path="createQuestion"
            element={
              <CreateQuestionPanel
                handleFeedback={handleFeedback}
                handleReturn={handleReturn}
              />
            }
          />
          <Route
            path="/"
            element={
              <QuestionList
                questions={questions}
                onUpdateQuestion={handleUpdateQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onFeedback={handleFeedback}
              />
            }
          />
          <Route
            path="settings"
            element={
              <Settings
                onResetPassword={handleResetPassword}
                onFeedback={handleFeedback}
              />
            }
          />
        </Routes>
      </main>
      <footer className="footer flex-container">
        {location.pathname === "/" && (
          <button className="transparent-button" onClick={handleAddClick}>
            +
          </button>
        )}
      </footer>
    </div>
  ) : null;
}

export default withContext(HomePage);
