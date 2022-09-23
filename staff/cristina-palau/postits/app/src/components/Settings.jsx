import './Settings.css'
import updateEmail from '../logic/updateEmail'
import updatePassword from '../logic/updatePassword'
import Loggito from '../utils/loggito'
import withContext from '../utils/withContext'

function Settings({context: { handleFeedback }}) {

    const logger = new Loggito('Settings')

    logger.info('render')

    const onUpdatePassword = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            oldpassword: { value: oldPassword },
            newpassword: { value: newPassword },
            newpassword2: { value: newPasswordRepeat }
        } = form

        try {
            updatePassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, function (error) {
                if (error) {
                
                    handleFeedback({ message: error.message, level: 'warning'})
                    
                    logger.warn(error.message)
                   
                    return
                }

                handleFeedback({ message: 'your password has been updated', level: 'success'})

                form.reset()

            })
        } catch (error) {
            
            handleFeedback({ message: error.message, level: 'warning'})
                    
            logger.warn(error.message)
        }
    }

    const onUpdateEmail = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            newemail: { value: newEmail},
        } = form

        try {
            updateEmail(sessionStorage.token, newEmail, function (error) {
                if (error) {
                   
                    handleFeedback({ message: error.message, level: 'error' })

                   logger.warn(error.message)
                    return
                }

                handleFeedback({ message: 'your email has been updated', level: 'success'})
                
                form.reset()
            })
        } catch (error) {

            handleFeedback({ message: error.message, level: 'warning'})
                    
           logger.warn(error.message)
        }
    }

    return <>
        <form className="form form__update form__update--password" onSubmit={onUpdatePassword}>Update password

            <label htmlFor="password">Old Password</label>
            <input className="input" type="password" name="oldpassword" placeholder="oldpassword" id="oldpassword" />

            <label htmlFor="password">New password</label>
            <input className="input" type="password" name="newpassword" placeholder="newpassword" id="newpassword" />

            <label htmlFor="password">Repeat new password</label>
            <input className="input" type="password" name="newpassword2" placeholder="repeat newpassword"
                id="newpassword2" />

            <button className="button" type="submit">Save</button>

        </form>

        <form className="form form__update form__update--email" onSubmit={onUpdateEmail}>Update e-mail

            <label htmlFor="email">Email</label>
            <input className="input" type="newemail" name="newemail" placeholder="e-mail" id="newemail" />

            <button className="button" type="submit">Save</button>
        </form>
    </>
}

export default withContext(Settings)