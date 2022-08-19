import { useState, useEffect } from "react";
import Loggito from "../utils/Loggito";
import retrieveUser from "../logic/retrieveUser";
import retrieveNotes from "../logic/retrieveNotes";
import createNote from "../logic/createNote";
import updateNote from "../logic/updateNote";
import deleteNote from "../logic/deleteNote";
import Settings from "../components/Settings";
import NoteList from "../components/NoteList";
import Header from "../components/Header";
import withContext from "../utils/withContext";

function HomePage({ context: { handleLogoutClick, handleFeedback } }) {
  // handleSettingsClick
  const logger = new Loggito("HomePage");

  const [name, setName] = useState(null);
  const [notes, setNotes] = useState(null);
  const [view, setView] = useState("list");

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

    loadNotes();
  }, []);

  const loadNotes = () => {
    try {
      retrieveNotes(sessionStorage.token, (error, notes) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }
        setNotes(notes);

        logger.debug("setNotes", notes);
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };
  //Bug fix?? Does this create the infinite loop? Or is that somewhere else?
  //loadNotes();

  const handleAddClick = () => {
    try {
      createNote(sessionStorage.token, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        loadNotes();
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleUpdateNote = (noteId, text) => {
    try {
      updateNote(sessionStorage.token, noteId, text, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }
        // this.loadNotes();
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleDeleteNote = (noteId) => {
    try {
      deleteNote(sessionStorage.token, noteId, (error) => {
        if (error) {
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        loadNotes();
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  // useEffect(() => {

  // }, [view, menuView]);

  const handleSettingsClick = () => {
    setView("settings");

    logger.debug("setView", "settings");

    // loadNotes()
  };

  const handleNotesClick = () => {
    setView("list");

    logger.debug("setView", "notes");
  };

  const handleResetPassword = () => {
    handleLogoutClick();
  };

  logger.info("render");

  return name ? (
    <div className="home-page page background flex-container--homepage">
      <Header
        name={name}
        onLogoutClick={handleLogoutClick}
        onSettingsClick={handleSettingsClick}
        onNotesClick={handleNotesClick}
        view={view}
        onFeedback={handleFeedback}
      />
      <main className="main flex-container main-page-content">
        {view === "list" && (
          <NoteList
            notes={notes}
            onUpdateNote={handleUpdateNote}
            onDeleteNote={handleDeleteNote}
            onFeedback={handleFeedback}
          />
        )}
        {view === "settings" && (
          <Settings
            onResetPassword={handleResetPassword}
            onFeedback={handleFeedback}
          />
        )}
      </main>
      <footer className="footer flex-container">
        {view === "list" && (
          <button
            className="transparent-button add-button"
            onClick={handleAddClick}
          >
            +
          </button>
        )}
      </footer>
    </div>
  ) : null;
}

export default withContext(HomePage);
