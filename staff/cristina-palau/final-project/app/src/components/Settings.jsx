import Loggito from '../utils/loggito'
import updateEmail from '../logic/updateEmail'
import updatePassword from '../logic/updatePassword'
import withContext from '../utils/withContext'
import './Settings.sass'

function Settings({ onBackClick, context: { handleFeedback } }) {
    const logger = new Loggito('Settings')

    logger.info('render')

    const onUpdatePassword = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            oldPassword: { value: oldPassword },
            newPassword: { value: newPassword },
            newPasswordRepeat: { value: newPasswordRepeat }
        } = form
        try {
            updatePassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, function (error) {
                if (error) {

                    handleFeedback({ message: error.message, level: 'warning' })

                    logger.warn(error.message)

                    return
                }

                handleFeedback({ message: 'your password has been updated', level: 'success' })

                form.reset()

            })
        } catch (error) {

            handleFeedback({ message: error.message, level: 'warning' })

            logger.warn(error.message)
        }
    }

    const onUpdateEmail = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            newEmail: { value: newEmail },
        } = form

        try {
            updateEmail(sessionStorage.token, newEmail, function (error) {
                if (error) {

                    handleFeedback({ message: error.message, level: 'error' })

                    logger.warn(error.message)
                    return
                }

                handleFeedback({ message: 'your email has been updated', level: 'success' })

                form.reset()
            })
        } catch (error) {

            handleFeedback({ message: error.message, level: 'warning' })

            logger.warn(error.message)
        }
    }

    return <>
        <div className="buttonContainer"><button className='transparentButton homeButton' onClick={onBackClick}>
            <span className="material-symbols-outlined">keyboard_backspace</span></button></div>
        <form className="form settingsForm updatePasswordForm" onSubmit={onUpdatePassword}>
            <h3>Update password</h3>
            <label htmlFor="password">Old Password</label>
            <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldpassword" />

            <label htmlFor="password">New password</label>
            <input className="input" type="password" name="newPassword" placeholder="new password" id="new password" />

            <label htmlFor="password">Repeat new password</label>
            <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat newpassword"
                id="newpassword2" />

            <button className="button" type="submit">Guardar</button>

        </form>

        <form className="form settingsForm updateEmailForm" onSubmit={onUpdateEmail}>

            <h3>Update password</h3>
            <label htmlFor="email">Email</label>
            <input className="input" type="email" name="newEmail" placeholder="new email" id="newemail" />
            <button className="button" type="submit">Guardar</button>
        </form>

    </>

}
export default withContext(Settings)