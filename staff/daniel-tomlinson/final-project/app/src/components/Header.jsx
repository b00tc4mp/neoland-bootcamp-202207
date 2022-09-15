import { useState } from "react";
import "./Header.css";
import Menu from "./Menu";
// import IconButton from './IconButton'
import Loggito from "../utils/Loggito";

// import Search from "./Search";

function Header({
  name,
  onLogoutClick,
  onSettingsClick,
  onQuestionsClick,
  onSearch,
  view: viewHome,
}) {
  const logger = new Loggito("Header");

  const [view, setView] = useState(null); // [null, f () {}]
  const [menuView, setMenuView] = useState("questions");

  const handleMenuClick = () => {
    setView("menu");

    logger.debug("setView", "menu");
  };

  const handleCloseClick = () => {
    setView(null);

    logger.debug("setView", null);
  };

  const handleLogoutClick = () => {
    onLogoutClick();
    handleCloseClick();
  };

  const handleQuestionsClick = () => {
    setMenuView("questions");
    onQuestionsClick();
    handleCloseClick();
  };

  const handleSettingsClick = () => {
    setMenuView("settings");
    onSettingsClick();
    handleCloseClick();
  };

  logger.info("render");

  return (
    <header className=" header flex-container navigation-bar">
      <div className="navigation-bar flex-container">
        <div className="navigation-bar">
          <p className="welcome">Hello, {name}!</p>
          {view === null && (
            <button
              type="menu"
              className="menu-button menu-button__styles menu-panel-button"
              onClick={handleMenuClick}
            >
              <span className="material-symbols-outlined nav-icon logout-button-style">
                menu
              </span>
            </button>
          )}
          {view === "menu" && (
            <button
              type="menu"
              className="menu-button menu-button__styles menu-panel-button"
              // close-menu-button-style"
              onClick={handleCloseClick}
            >
              {/* <span className="material-symbols-outlined menu-button menu-button__styles menu-panel-button close-menu-button-style"> */}
              <span className="material-symbols-outlined nav-icon logout-button-style">
                close
              </span>
              {/* x */}
            </button>
          )}
        </div>
        {/* previous className was just "title" */}
        <h1 className="app-title">Final-project</h1>
        {view === "menu" && (
          <Menu
            onLogoutClick={handleLogoutClick}
            onSettingsClick={handleSettingsClick}
            onQuestionsClick={handleQuestionsClick}
            onCloseClick={handleCloseClick}
            view={viewHome}
            menuView={menuView}
          />
        )}
      </div>
      {/* {view !== "menu" && <Search onQuery={onSearch} />} */}
    </header>
  );
}

export default Header;
