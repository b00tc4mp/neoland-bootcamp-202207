// import IconButton from './IconButton'
import Loggito from "../utils/Loggito";
import updatePassword from "../logic/updatePassword";

// onCloseClick isn't in my code
// But!! info needs to be passed to Home to change on submit
// On successful form submit should go to login
function Settings({ onCloseClick, onFeedback, onLinkClick, onUpdatePassword }) {
  const logger = new Loggito("Settings");

  logger.info("constructor");

  // I think this can be deleted, have no idea what it does
  // also, there in not¡ onLinkclick in the parent??
  const handleClick = (event) => {
    event.preventDefault();

    onLinkClick();
  };

  logger.info("render");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // const form = event.target;
    const { target: form } = event;

    const oldPasswordInput = form.oldPassword;
    const newPasswordInput = form.newPassword;
    const confirmPasswordInput = form.confirmPassword;

    const oldPassword = oldPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    try {
      updatePassword(
        sessionStorage.token,
        oldPassword,
        newPassword,
        confirmPassword,
        function (error) {
          if (error) {
            onFeedback({ message: error.message, level: "warning" });

            logger.warn(error.message);

            return;
          }

          form.reset();

          onUpdatePassword();
        }
      );
    } catch (error) {
      onFeedback({ message: error.message, level: "warning" });

      logger.warn(error.message);
    }
    //   props.onResetPassword()
  };

  return (
    <main className="register-page page background flex-container">
      <div className="login-elements flex-container">
        <form
          action=""
          className="form flex-container login-form"
          onSubmit={handleFormSubmit}
        >
          <div className="input-fields">
            <div className="form__field">
              <label htmlFor="name">old password</label>
              <input
                type="password"
                placeholder="old password"
                name="oldPassword"
                id="oldPassword"
                className="input-item"
              />
            </div>

            <div className="form__field">
              <label htmlFor="email">new password</label>
              <input
                type="password"
                placeholder="new password"
                name="newPassword"
                id="newPassword"
                className="input-item"
              />
            </div>

            <div className="form__field">
              <label htmlFor="password">confirm password</label>
              <input
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                id="confirmPassword"
                className="input-item"
              />
            </div>
          </div>
          <button type="submit" className="button--primary">
            Update
          </button>
        </form>
      </div>
    </main>
  );
}

export default Settings;
