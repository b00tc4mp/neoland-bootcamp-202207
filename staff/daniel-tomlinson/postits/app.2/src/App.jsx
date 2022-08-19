// import logo from "./logo.svg";

import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Feedback from "./components/Feedback";
import Loggito from "./utils/Loggito.js";
import Context from "./utils/Context";

import "./App.css";

function App() {
  // this.state = { view: sessionStorage.token ? "home" : "login" };
  const logger = new Loggito("App");

  const [view, setView] = useState(sessionStorage.token ? "home" : "login");
  const [feedback, setFeedback] = useState({ message: null, level: null });

  const handleNavigationToRegister = () => {
    setView("register");

    logger.debug("setView", "register");
  };

  const handleNavigationToLogin = () => {
    setView("login");

    logger.debug("setView", "login");
  };

  const handleNavigationToHome = () => {
    setView("home");

    logger.debug("setView", "home");
  };

  const handleLogoutClick = () => {
    delete sessionStorage.token;

    handleNavigationToLogin();
  };

  const handleAcceptFeedback = () => {
    const feedback = { message: null, level: null };

    setFeedback(feedback);

    logger.debug("setFeedback", feedback);
  };

  const handleFeedback = (feedback) => {
    setFeedback(feedback);
    debugger;

    logger.debug("setFeedback", feedback);
  };

  logger.info("render");

  const toggleTheme = () => document.documentElement.classList.toggle("light");

  const level = feedback.level;
  const message = feedback.message;

  return (
    <Context.Provider
      value={{
        handleNavigationToRegister,
        handleNavigationToHome,
        handleNavigationToLogin,
        handleLogoutClick,
        handleFeedback,
        handleAcceptFeedback,
        toggleTheme,
        level,
        message,
      }}
    >
      {view === "login" && (
        <LoginPage
        // onLinkClick={handleNavigationToRegister}
        // onLogIn={handleNavigationToHome}
        // onFeedback={handleFeedback}
        />
      )}

      {view === "register" && (
        <RegisterPage
        // onLinkClick={handleNavigationToLogin}
        // onRegister={handleNavigationToLogin}
        // onFeedback={handleFeedback}
        />
      )}

      {view === "home" && (
        <HomePage
        // onLogoutClick={handleLogoutClick}
        // onSettingsClick={handleSettingsClick}
        // Instead this should be handleSettingsFormSubmit and then go to logout
        // onFeedback={handleFeedback}
        />
      )}

      {feedback.message && (
        <Feedback
        // level={feedback.level}
        // message={feedback.message}
        // onClick={handleAcceptFeedback}
        />
      )}
    </Context.Provider>
  );
}

export default App;
