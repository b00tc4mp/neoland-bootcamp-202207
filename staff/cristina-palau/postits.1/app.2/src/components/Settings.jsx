import './Settings.css'
import updateEmail from '../logic/updateEmail'
import updatePassword from '../logic/updatePassword'
import Loggito from '../utils/loggito'

function Settings({ onFeedback }) {

    const logger = new Loggito('Settings')

    logger.info('render')

    const onUpdatePassword = event => {

        event.preventDefault()

        const { target: form } = event

        const {
            oldpassword: { value: oldPass },
            newpassword: { value: newPass },
            newpassword2: { value: newPass2 }
        } = form

        try {
            updatePassword(sessionStorage.token, oldPass, newPass, newPass2, function (error) {
                if (error) {
                
                    onFeedback({ message: error.message, level: 'warning'})
                    
                    logger.warn(error.message)
                   
                    return
                }

                onFeedback({ message: 'your password has been updated', level: 'success'})

                form.reset()

            })
        } catch (error) {
            
            onFeedback({ message: error.message, level: 'warning'})
                    
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
                   
                    onFeedback({ message: error.message, level: 'error' })

                   logger.warn(error.message)
                    return
                }

                onFeedback({ message: 'your email has been updated', level: 'success'})
                
                form.reset()
            })
        } catch (error) {

            onFeedback({ message: error.message, level: 'warning'})
                    
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

            <button className="button" type="submit">save</button>

        </form>

        <form className="form form__update form__update--email" onSubmit={onUpdateEmail}>Update e-mail

            <label htmlFor="email">email</label>
            <input className="input" type="newemail" name="newemail" placeholder="e-mail" id="newemail" />

            <button className="button" type="submit">save</button>
        </form>
    </>
}

export default Settings