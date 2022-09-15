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
  searchQuestionsPublic,
  retrieveUser,
  retrieveQuestions,
  retrieveQuestionsPublic,
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
  const [questionsPublic, setQuestionsPublic] = useState(null);
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

    //Maybe better to move this to happen when each page is loaded, instead of loading all on initial load.
    loadQuestions();
    loadQuestionsPublic();
  }, []);

  const onQuickPlayClick = () => {
    navigate("quickPlayInHome");
  };

  useEffect(() => {
    logger.info("on query changed");
    if (location.pathname === "/questionsList") loadQuestions();
    else if (location.pathname === "/communityList") loadQuestionsPublic();
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

  const loadQuestionsPublic = () => {
    try {
      if (!query)
        retrieveQuestionsPublic((error, questions) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }

          setQuestionsPublic(questions);

          logger.debug("setQuestionsPublic", questions);
        });
      else
        searchQuestionsPublic(query, (error, questions) => {
          if (error) {
            handleFeedback({ message: error.message, level: "error" });

            logger.warn(error.message);

            return;
          }
          setQuestionsPublic(questions);

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

  const handleHomeClick = () => {
    navigate("/");

    logger.debug("navigate to home");
  };

  const handleUpdatePassword = () => {
    handleLogoutClick();
  };

  const handleLeaveClass = () => {
    navigate("/");
    // navigate("settings");
  };

  const handleSearch = (query) => setQuery(query);

  const handleSearchPublic = (query) => setQuery(query);

  const handleMyQuestionsClick = () => {
    // loadQuestions();
    navigate("questionsList");
  };

  const handleCommunityClick = () => {
    // loadQuestionsPublic();
    navigate("communityList");
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
          onHomeClick={handleHomeClick}
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
                handleCommunityClick={handleCommunityClick}
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
          <Route
            path="communityList"
            element={
              <CommunityList
                questionsPublic={questionsPublic}
                onUpdateQuestion={handleUpdateQuestion}
                onDeleteQuestion={handleDeleteQuestion}
                onEditQuestion={handleEditQuestion}
                onFeedback={handleFeedback}
                onReturn={handleReturn}
                onSearchPublic={handleSearchPublic}
              />
            }
          />

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
                onUpdatePassword={handleUpdatePassword}
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
