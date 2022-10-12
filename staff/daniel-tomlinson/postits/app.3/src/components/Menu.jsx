// import { useEffect } from "react";
import "./Menu.css";
// import IconButton from "./IconButton";
import Loggito from "../utils/Loggito";
import withContext from "../utils/withContext";
import Context from "../utils/Context";
import { useContext } from "react";

function Menu({
  view,
  menuView,
  onLogoutClick,
  onSettingsClick,
  onNotesClick,
  // context: { toggleTheme },
}) {
  const { toggleTheme } = useContext(Context);

  const logger = new Loggito("Menu");

  logger.info("render");

  // this.state = { view: "notes" };

  const handleLogoutClick = () => onLogoutClick();

  const handleSettingsClick = () => {
    // this.setState({ view: "settings" });
    onSettingsClick();
  };

  const handleNotesClick = () => {
    // this.setState({ view: "notes" });
    onNotesClick();
  };

  const elementsMenu =
    menuView === "notes"
      ? [
          { text: "Settings", action: handleSettingsClick, key: 1 },
          { text: "Theme", action: toggleTheme, key: 3 },
          { text: "Logout", action: handleLogoutClick, key: 4 },
        ]
      : [
          { text: "Notes", action: handleNotesClick, key: 2 },
          { text: "Theme", action: toggleTheme, key: 3 },
          { text: "Logout", action: handleLogoutClick, key: 4 },
        ];

  return (
    <div className="menu-panel">
      <ul className="dropdown-menu menu-panel__list">
        {elementsMenu.map((element) => {
          return (
            <li
              className="menu-panel__list-item dropdown-item settings-button"
              key={element.key}
              onClick={element.action}
            >
              <button className="dropdown__link ">
                <i className="fa-solid fa-poo nav-icon poo-list-style"></i>
                {element.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default withContext(Menu);
