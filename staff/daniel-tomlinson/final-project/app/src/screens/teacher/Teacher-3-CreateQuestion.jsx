import Teacher3CreateQuestionPanel from "./Teacher-3-CreateQuestionPanel";
import Teacher3EditQuestionPanel from "./Teacher-3-EditQuestionPanel";
import Teacher3SelectFolderPanel from "./Teacher-3-SelectFolderPanel";
import Teacher3MyQuestionsPanel from "./Teacher-3-MyQuestionsPanel";
import Teacher3CommunityPanel from "./Teacher-3-CommunityPanel";
import Teacher3FavoritesPanel from "./Teacher-3-FavoritesPanel";
import QuestionsList from "../../components/QuestionsList";

// delete?
import "./timeSelect.scss";

import Loggito from "../../utils/Loggito";
import createQuestion from "../../logic/createQuestion";

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
        {/* {quizQuestionPage === "editQuestion" && ( */}
        {selectQuestionForGame !== undefined && (
          <Teacher3EditQuestionPanel
            selectQuestionForGame={selectQuestionForGame}
            handleScreenChangeT3={handleScreenChangeT3}
            socket={socket}
            pin={pin}
            nameOfClass={nameOfClass}
            host={host}
            handleSelectFolderClick={handleSelectFolderClick}
          />
        )}
        {quizQuestionPage === "selectFolder" && (
          <Teacher3SelectFolderPanel
            handleCollectionsClick={handleCollectionsClick}
            handleCommunityClick={handleCommunityClick}
            handleFavoritesClick={handleFavoritesClick}
            handleMyQuestionsClick={handleMyQuestionsClick}
          />
        )}
        {/* {quizQuestionPage === "myQuestions" && <Teacher3MyQuestionsPanel />} */}
        {quizQuestionPage === "myQuestions" && (
          <QuestionsList
            gameBeingPlayed={true}
            handleSelectQuestionForGame={handleSelectQuestionForGame}
          />
        )}
        {quizQuestionPage === "community" && <Teacher3CommunityPanel />}
        {quizQuestionPage === "favorites" && <Teacher3FavoritesPanel />}
      </main>
      <footer className="game-screen-footer">
        {/* <button className="footer-button">Start Game</button> */}
      </footer>
    </div>
  );
}

export default withContext(Teacher3CreateQuestion);
