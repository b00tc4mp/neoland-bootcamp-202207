import { useState } from "react";
import "./Header.css";
import Menu from "./Menu";
// import IconButton from './IconButton'
import Loggito from "../utils/Loggito";

function Header({
  name,
  onLogoutClick,
  onSettingsClick,
  onNotesClick,
  view: viewHome,
}) {
  const logger = new Loggito("Header");

  const [view, setView] = useState(null); // [null, f () {}]
  const [menuView, setMenuView] = useState("notes");

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

  const handleNotesClick = () => {
    setMenuView("notes");
    onNotesClick();
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
      <div className="navigation-bar">
        <p className="welcome">Hello, {name}!</p>
        {view === null && (
          <button
            type="menu"
            className="menu-button menu-button__styles menu-panel-button"
            onClick={handleMenuClick}
          >
            {/* <i className="fa-solid fa-poo nav-icon logout-button-style"></i> */}
            {/* <span className="material-icons-outlined">menu</span> */}
            <span className="material-symbols-outlined nav-icon logout-button-style">
              menu
            </span>
          </button>
        )}
        {view === "menu" && (
          <button
            type="menu"
            className="menu-button menu-button__styles menu-panel-button close-menu-button-style"
            onClick={handleCloseClick}
          >
            <span className="material-symbols-outlined menu-button menu-button__styles menu-panel-button close-menu-button-style">
              close
            </span>
            {/* x */}
          </button>
        )}
      </div>
      <h1 className="title">Final-project</h1>
      {view === "menu" && (
        <Menu
          onLogoutClick={handleLogoutClick}
          onSettingsClick={handleSettingsClick}
          onNotesClick={handleNotesClick}
          onCloseClick={handleCloseClick}
          view={viewHome}
          menuView={menuView}
        />
      )}
    </header>
  );
}

export default Header;
