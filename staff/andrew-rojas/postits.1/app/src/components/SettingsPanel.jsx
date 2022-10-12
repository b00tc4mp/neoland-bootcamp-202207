import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import updateUserPassword from '../logic/updateUserPassword'
import withContext from '../utils/withContext'

function SettingsPanel ({ onCloseClick, context: { handleFeedback } }) {
  const logger = new Loggito('Settings')

  logger.info('return')

  const handleFormSubmit = event => {
    event.preventDefault()

    const { target:form } = event

    const {
        oldPassword: { value: oldPassword},
        newPassword: { value: newPassword},
        newPasswordRepeat: { value: newPasswordRepeat}
    } = form

    try {
      updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
        if(error) {
          handleFeedback({ message: error.message, level: 'warning' })
        
          logger.warn(error.message)

          return
        }

        handleFeedback ({ message: 'password updated', level: 'success' })

        form.reset()
      })
    } catch(error) {
      handleFeedback({ message: error.message, level: 'warning' })

      logger.warn(error.message)
    }
  }

  return <div className="settings-panel container">
    <IconButton text="close" onClick={onCloseClick} />

  <form className="update-password-form form" onSubmit={handleFormSubmit}>
    <div className="form__field">
      <label htmlfor="oldPassword">Current password</label>
      <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
    </div>

    <div className="form__field">
      <label htmlfor="newPassword">New password</label>
      <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
    </div>

    <div className="form__field">
      <label htmlfor="newPasswordRepeat">Repeat new password</label>
      <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
    </div>

    <button className="button" type="submit">Update</button>
  </form>
</div>
}

export default withContext(SettingsPanel)