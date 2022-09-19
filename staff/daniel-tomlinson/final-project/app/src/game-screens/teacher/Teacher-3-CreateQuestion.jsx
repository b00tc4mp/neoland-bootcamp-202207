// ================== Imports ================== //

import Teacher3CreateQuestionPanel from "./Teacher-3-CreateQuestionPanel";
import Teacher3EditQuestionPanel from "./Teacher-3-EditQuestionPanel";
import Teacher3SelectFolderPanel from "./Teacher-3-SelectFolderPanel";
import QuestionsList from "../../components/QuestionsList";
import CommunityList from "../../components/CommunityList_adapted";
import FavoritesList from "../../components/FavoritesList.jsx";
import CollectionsList from "../../components/CollectionsList";

// delete?
import "./timeSelect.scss";

import Loggito from "../../utils/Loggito";

import withContext from "../../utils/withContext";
import { useState } from "react";

function Teacher3CreateQuestion({
  pin,
  nameOfClass,
  handleScreenChangeT3,
  socket,
  host,
  // selectQuestionForGame,
  context: { handleFeedback },
}) {
  const [quizQuestionPage, setQuizQuestionPage] = useState("createQuestion");

  const [selectQuestionForGame, setSelectQuestionForGame] = useState(undefined);

  const handleSelectFolderClick = () => {
    setQuizQuestionPage("selectFolder");
  };

  const handleMyQuestionsClick = () => {
    setQuizQuestionPage("myQuestions");
  };

  const handleCommunityClick = () => {
    setQuizQuestionPage("community");
  };

  const handleFavoritesClick = () => {
    setQuizQuestionPage("favorites");
  };

  const handleCollectionsClick = () => {
    setQuizQuestionPage("collections");
  };

  const handleSelectQuestionForGame = (questionId) => {
    setSelectQuestionForGame(questionId);
    setQuizQuestionPage("editQuestion");
  };

  const handleReturnInGame = (page) => {
    setQuizQuestionPage(page);
  };

  return (
    <div className="game-screen">
      <main className="game-screen-main flex--spaced">
        {quizQuestionPage === "createQuestion" && (
          <Teacher3CreateQuestionPanel
            handleScreenChangeT3={handleScreenChangeT3}
            socket={socket}
            pin={pin}
            nameOfClass={nameOfClass}
            host={host}
            handleSelectFolderClick={handleSelectFolderClick}
          />
        )}
        {/* {selectQuestionForGame !== undefined && ( */}
        {quizQuestionPage === "editQuestion" && (
          <Teacher3EditQuestionPanel
            selectQuestionForGame={selectQuestionForGame}
            handleScreenChangeT3={handleScreenChangeT3}
            socket={socket}
            pin={pin}
            nameOfClass={nameOfClass}
            host={host}
            handleSelectFolderClick={handleSelectFolderClick}
            handleReturnInGame={handleReturnInGame}
          />
        )}
        {quizQuestionPage === "selectFolder" && (
          <Teacher3SelectFolderPanel
            handleCollectionsClick={handleCollectionsClick}
            handleCommunityClick={handleCommunityClick}
            handleFavoritesClick={handleFavoritesClick}
            handleMyQuestionsClick={handleMyQuestionsClick}
            handleReturnInGame={handleReturnInGame}
          />
        )}
        {/* {quizQuestionPage === "myQuestions" && <Teacher3MyQuestionsPanel />} */}
        {quizQuestionPage === "myQuestions" && (
          <QuestionsList
            gameBeingPlayed={true}
            handleSelectQuestionForGame={handleSelectQuestionForGame}
            handleReturnInGame={handleReturnInGame}
          />
        )}
        {quizQuestionPage === "community" && (
          <CommunityList
            gameBeingPlayed={true}
            handleSelectQuestionForGame={handleSelectQuestionForGame}
            handleReturnInGame={handleReturnInGame}
          />
        )}
        {quizQuestionPage === "favorites" && (
          <FavoritesList
            gameBeingPlayed={true}
            handleSelectQuestionForGame={handleSelectQuestionForGame}
            handleReturnInGame={handleReturnInGame}
          />
        )}
        {quizQuestionPage === "favorites" && <CollectionsList />}
      </main>
      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default withContext(Teacher3CreateQuestion);
