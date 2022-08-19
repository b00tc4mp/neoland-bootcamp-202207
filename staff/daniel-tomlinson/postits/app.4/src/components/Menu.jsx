// import { useEffect } from "react";
import "./Menu.css";
// import IconButton from "./IconButton";
import Loggito from "../utils/Loggito";
import withContext from "../utils/withContext";
import { useState } from "react";

function Menu({
  menuView,
  onLogoutClick,
  onSettingsClick,
  onNotesClick,
  onCloseClick,
  context: { handleThemeChange },
}) {
  const [themeMenu, setThemeMenu] = useState(null);

  const logger = new Loggito("Menu");

  logger.info("render");

  const handleLogoutClick = () => onLogoutClick();

  const handleSettingsClick = () => {
    // this.setState({ view: "settings" });
    onSettingsClick();
  };

  const handleNotesClick = () => {
    // this.setState({ view: "notes" });
    onNotesClick();
  };

  const onThemeMenuClick = () => {
    if (!themeMenu) setThemeMenu("showThemeMenu");
    else setThemeMenu(null);
  };

  const onThemeClick1 = (theme) => {
    handleThemeChange(theme);
    onCloseClick();
  };
  const onThemeClick2 = () => {
    handleThemeChange("green");
    onCloseClick();
  };
  const onThemeClick3 = () => {
    handleThemeChange("earth");
    onCloseClick();
  };
  const onThemeClick4 = () => {
    handleThemeChange("contrast");
    onCloseClick();
  };
  const onThemeClick5 = () => {
    handleThemeChange("pink");
    onCloseClick();
  };

  const elementsMenu =
    menuView === "notes"
      ? [
          { text: "Settings", action: handleSettingsClick, key: 1 },
          { text: "Theme", action: onThemeMenuClick, key: 3 },
          { text: "Logout", action: handleLogoutClick, key: 4 },
        ]
      : [
          { text: "Notes", action: handleNotesClick, key: 2 },
          { text: "Theme", action: onThemeMenuClick, key: 3 },
          { text: "Logout", action: handleLogoutClick, key: 4 },
        ];

  return (
    <>
      <div className="menu-panel">
        <ul className="dropdown-menu menu-panel__list">
          {elementsMenu.map((element) => {
            return (
              <li
                className="menu-panel__list-item dropdown-item settings-button"
                key={element.key}
                onClick={element.action}
              >
                <button className="dropdown__link">
                  <i className="fa-solid fa-poo nav-icon poo-list-style"></i>
                  {element.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {themeMenu === "showThemeMenu" && (
        <ul className=" menu-panel dropdown-menu menu-panel__list themeMenu">
          <li
            className="menu-panel__list-item dropdown-item settings-button"
            onClick={onThemeClick1}
          >
            <button className="dropdown__link">
              <i className="fa-solid fa-poo nav-icon poo-list-style"></i>Classic
            </button>
          </li>
          <li
            className="menu-panel__list-item dropdown-item settings-button"
            onClick={onThemeClick2}
          >
            <button className="dropdown__link">
              <i className="fa-solid fa-poo nav-icon poo-list-style"></i>Green
            </button>
          </li>
          <li
            className="menu-panel__list-item dropdown-item settings-button"
            onClick={onThemeClick3}
          >
            <button className="dropdown__link">
              <i className="fa-solid fa-poo nav-icon poo-list-style"></i>Earth
            </button>
          </li>
          <li
            className="menu-panel__list-item dropdown-item settings-button"
            onClick={onThemeClick4}
          >
            <button className="dropdown__link">
              <i className="fa-solid fa-poo nav-icon poo-list-style"></i>
              Contrast
            </button>
          </li>
          <li
            className="menu-panel__list-item dropdown-item settings-button"
            onClick={onThemeClick5}
          >
            <button className="dropdown__link">
              <i className="fa-solid fa-poo nav-icon poo-list-style"></i>
              Pink
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default withContext(Menu);
