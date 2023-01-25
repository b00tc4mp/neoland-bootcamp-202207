import updateUserPassword from '../logic/updateUserPassword'
import Loggito from '../utils/Loggito'
import IconButton from './IconButton'
import withContext from '../utils/withContext'

function Settings({ onCloseClick, context: { handleFeedback } }) {
  const logger = new Loggito('Settings')

  logger.info('render')

  const handleFormSubmit = event => {
    event.preventDefault()

    const { target: form } = event
    const { oldPassword: { value: oldPassword },
      newPassword: { value: newPassword },
      newPasswordRepeat: { value: newPasswordRepeat }
    } = form

    try {
      updateUserPassword(
        sessionStorage.token,
        oldPassword,
        newPassword,
        newPasswordRepeat,
        error => {
          if (error) {
            handleFeedback({ message: error.message, level: 'warning' })

            logger.warn(error.message)

            return;
          }

          handleFeedback({ message: 'Password Updated', level: 'success' })
          onCloseClick()
          form.reset() //para limpiar el formulario luego del cambio de contraseña.//
        });
    } catch (error) {
      handleFeedback({ message: error.message, level: 'warning' })

      logger.warn(error.message)
    }
  }

  return <div className="settings-panel container">
    <form className="update-password-form form" onSubmit={handleFormSubmit}>
      <IconButton text="close" onClick={onCloseClick} />
      <div className="form__field">
        <label htmlFor="oldPassword">Current password</label>
        <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
      </div>

      <div className="form__field">
        <label htmlFor="newPassword">New password</label>
        <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
      </div>

      <div className="form__field">
        <label htmlFor="newPasswordRepeat">Repeat new password</label>
        <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat password" id="newPasswordRepeat" />
      </div>

      <button className="button" type="submit">Update</button>
    </form>
  </div>
}

export default withContext(Settings)