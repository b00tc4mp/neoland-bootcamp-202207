// const { error } = require("console")

const { useState, useEffect } = React;

function HomePage({ onLogoutClick, onFeedback }) {
  const logger = new Loggito("HomePage");

  const [name, setName] = useState(null);
  const [notes, setNotes] = useState(null);
  const [view, setView] = useState("list");

  useEffect(() => {
    logger.info('"componentDidMount"');

    try {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) {
          onFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          // onLogoutClick()

          return;
        }

        setName(user.name);

        logger.debug("setName", user.name);
      });
    } catch (error) {
      onFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }

    loadNotes();
  }, []);

  const loadNotes = () => {
    try {
      retrieveNotes(sessionStorage.token, (error, notes) => {
        if (error) {
          onFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }
        setNotes(notes);

        logger.debug("setNotes", notes);
      });
    } catch (error) {
      onFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };
  //Bug fix?? Does this create the infinite loop? Or is that somewhere else?
  //loadNotes();

  const handleAddClick = () => {
    try {
      createNote(sessionStorage.token, (error) => {
        if (error) {
          onFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        loadNotes();
      });
    } catch (error) {
      onFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleUpdateNote = (noteId, text) => {
    try {
      updateNote(sessionStorage.token, noteId, text, (error) => {
        if (error) {
          onFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }
        // this.loadNotes();
      });
    } catch (error) {
      onFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  const handleDeleteNote = (noteId) => {
    try {
      deleteNote(sessionStorage.token, noteId, (error) => {
        if (error) {
          onFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        loadNotes();
      });
    } catch (error) {
      onFeedback({ message: error.message, level: "error" });

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
    onLogoutClick();
  };
  /* function (
    oldPassword,
    newPassword,
    retypeNewPassword
  ) {
    try {
      resetPassword(
        sessionStorage.token,
        oldPassword,
        newPassword,
        retypeNewPassword,
        function (error) {
          if (error) {
            onFeedback({ message: error.message, level: "error" });

            // + loggito

            return;
          }

          onFeedback({
            message: "Password updated successfully",
            level: "success",
          });

          //In Manu's code the changes in view are addressed somewhere else:
          // I would move this to homePage
          // this.resetPasswordReset();
          // I would leave this here as it manages the main pages

          // delete sessionStorage.token;
          onLogoutClick();
        }
      );
    } catch (error) {
      onFeedback({ message: error.message, level: "error" });

      // + loggito
    }
  }; */

  // handleSettingsClick =

  logger.info("render");

  return name ? (
    <div className="home-page page background flex-container--homepage">
      <Header
        name={name}
        onLogoutClick={onLogoutClick}
        onSettingsClick={handleSettingsClick}
        onNotesClick={handleNotesClick}
        view={view}
        onFeedback={onFeedback}
      />
      <main className="main flex-container main-page-content">
        {view === "list" && (
          <NoteList
            notes={notes}
            onUpdateNote={handleUpdateNote}
            onDeleteNote={handleDeleteNote}
            onFeedback={onFeedback}
          />
        )}
        {view === "settings" && (
          <Settings
            onResetPassword={handleResetPassword}
            onFeedback={onFeedback}
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
