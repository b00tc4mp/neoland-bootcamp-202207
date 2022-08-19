import Loggito from "../utils/Loggito";
import authenticateUser from "../logic/authenticateUser";
import withContext from "../utils/withContext";

function LoginPage({
  coche: { handleNavigationToRegister, handleFeedback, handleNavigationToHome },
}) {
  const logger = new Loggito(LoginPage.name);

  logger.info("constructor");

  logger.info("render");

  const handleLinkClick = (event) => {
    event.preventDefault();

    handleNavigationToRegister();
    // onLinkClick();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const emailInput = form.email;
    const passwordInput = form.password;

    const email = emailInput.value;
    const password = passwordInput.value;

    form.reset();

    try {
      authenticateUser(email, password, (error, token) => {
        if (error) {
          debugger;
          handleFeedback({ message: error.message, level: "error" });

          logger.warn(error.message);

          return;
        }

        logger.debug("user logged in");

        sessionStorage.token = token;

        handleNavigationToHome();
        // onLogIn();
      });
    } catch (error) {
      handleFeedback({ message: error.message, level: "error" });

      logger.warn(error.message);
    }
  };

  return (
    <main className="login-page page background flex-container">
      <div className="login-elements flex-container">
        <form
          action=""
          className=" login-form flex-container login-form"
          onSubmit={handleFormSubmit}
        >
          <div className="input-fields">
            <div className="form__field">
              <label htmlFor="email">email</label>
              <input
                type="email"
                placeholder="email"
                name="email"
                id="email"
                className="input-item"
              />
            </div>

            <div className="form_field">
              <label htmlFor="password">password</label>
              <input
                type="password"
                placeholder="password"
                name="password"
                id="password"
                className="input-item"
              />
            </div>
          </div>
          <button href="home.html" type="submit" className="button--primary">
            Login
          </button>
        </form>
        <a href="forgot.password.html">Forgot password</a>
        <a href="register.html" className="anchor" onClick={handleLinkClick}>
          Register
        </a>
      </div>
    </main>
  );
}

export default withContext(LoginPage);
