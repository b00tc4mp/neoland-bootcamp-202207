import { useState, useEffect } from "react";
import Loggito from "../utils/Loggito";
// import retrieveUser from "../logic/retrieveUser";
// import retrieveQuestions from "../logic/retrieveQuestions";
// import createQuestion from "../logic/createQuestion";
// import createGameCode from "../logic/createGameCode";
// import updateQuestionText from "../logic/updateQuestionText";
// import deleteQuestion from "../logic/deleteQuestion";
import Settings from "../components/Settings";
import QuestionsList from "../components/QuestionsList";
import CommunityList from "../components/CommunityList";
import FavouritesList from "../components/FavouritesList";
import CollectionsList from "../components/CollectionsList";
import Header from "../components/Header";
import LandingPanel from "../components/LandingPanel";
import EditQuestionPanel from "../components/EditQuestionPanel";
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
  const [questionBeingEditedId, setQuestionBeingEditedId] = useState(null);
  const [editedLocation, setEditedLocation] = useState(null);
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
    navigate("quickPlayInHome");
  };

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

  const handleMyQuestionsClick = () => {
    navigate("questionsList");
  };

  const handleFavouritesClick = () => {
    navigate("favouritesList");
  };

  const handleCollectionsClick = () => {
    navigate("collectionsList");
  };

  const handleEditQuestion = (questionId, location) => {
    setQuestionBeingEditedId(questionId);
    setEditedLocation(location);
    navigate("editQuestion");
  };

  const handleNavigateTo = (location) => {
    navigate(`/`);
    navigate(`${location.pathname}`);
  };

  /*   useEffect(() => {
    navigate("editQuestion");
  }, [questionBeingEditedId]); */

  logger.info("render");

  return name ? (
    <div className="home-page page background flex-container--homepage">
      {location.pathname !== "/quickPlayInHome" && (
        <Header
          name={name}
          onLogoutClick={handleLogoutClick}
          onSettingsClick={handleSettingsClick}
          onQuestionsClick={handleQuestionsClick}
          onFeedback={handleFeedback}
        />
      )}
      <main className="main flex-container main-page-content">
        {location.pathname === "/" && (
          <button
            className="button--primary home-page-start-button"
            onClick={onQuickPlayClick}
          >
            play
          </button>
        )}
        <Routes>
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
            path="/"
            element={
              <LandingPanel
                handleMyQuestionsClick={handleMyQuestionsClick}
                handleFavouritesClick={handleFavouritesClick}
                handleCollectionsClick={handleCollectionsClick}
              />
            }
          />
          <Route
            path="createQuestion"
            element={
              <CreateQuestionPanel
                handleFeedback={handleFeedback}
                handleReturn={handleReturn}
                handleNavigateTo={handleNavigateTo}
              />
            }
          />
          <Route
            path="questionsList"
            element={
              <QuestionsList
                questions={questions}
                onUpdateQuestion={handleUpdateQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onEditQuestion={handleEditQuestion}
                onFeedback={handleFeedback}
                onReturn={handleReturn}
                onSearch={handleSearch}
              />
            }
          />
          <Route path="communityList" element={<CommunityList />} />

          <Route
            path="editQuestion"
            element={
              <EditQuestionPanel
                questions={questions}
                onUpdateQuestion={handleUpdateQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onEditQuestion={handleEditQuestion}
                onFeedback={handleFeedback}
                onReturn={handleReturn}
                editedLocation={editedLocation}
                questionBeingEditedId={questionBeingEditedId}
                handleNavigateTo={handleNavigateTo}
              />
            }
          />
          <Route
            path="favouritesList"
            element={
              <FavouritesList
                questions={questions}
                onUpdateQuestion={handleUpdateQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onEditQuestion={handleEditQuestion}
                onFeedback={handleFeedback}
                onReturn={handleReturn}
              />
            }
          />
          <Route
            path="collectionsList"
            element={
              <CollectionsList
                questions={questions}
                onUpdateQuestion={handleUpdateQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onEditQuestion={handleEditQuestion}
                onFeedback={handleFeedback}
                onReturn={handleReturn}
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
        {location.pathname === "questionsList" && (
          <button className="transparent-button" onClick={handleAddClick}>
            +
          </button>
        )}
      </footer>
    </div>
  ) : null;
}

export default withContext(HomePage);
