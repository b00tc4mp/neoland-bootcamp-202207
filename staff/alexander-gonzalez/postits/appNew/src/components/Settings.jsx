import IconButton from './IconButton'
import Loggito from '../utils/Loggito'
import updateUserPassword from '../logic/updateUserPassword'
import withContext from '../utils/withContext'



function Settings({ onCloseClick, context: {handleFeedback} }) {
    const logger = new Loggito('Settings')

    logger.info('render')

    const handleFormSubmit = event => {
        event.preventDefault()

        const { target: form } = event

        const {
            currentPassword: { value: currentPassword },
            newPassword: { value: newPassword },
            newPasswordRepeat: { value: newPasswordRepeat }
        } = form
        //const {target:{currentPassword:{value:currentPassword}, newPassword:{value:newPassword}, newPasswordRepeat:{value:newPasswordRepeat}}}=event
     try {
        updateUserPassword(sessionStorage.token, currentPassword, newPassword, newPasswordRepeat, error => {
            if (error) {
                handleFeedback({ message: error.message, level: 'warning' })

                logger.warn(error.message)
                
                return
            }
                //form.reset()

            handleFeedback({message: 'Success Password', level: 'success'})
                
            onCloseClick()
            //logger.warn(message)
          // logger.debug('settings reset')

            
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
                <label htmlFor="currentPassword">Current password</label>
                <input className="input" type="password" name="currentPassword" placeholder="currentPassword" id="currentPassword" />
            </div>

            <div className="form__field">
                <label htmlFor="newPassword">New password</label>
                <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
            </div>

            <div className="form__field">
                <label htmlFor="newPasswordRepeat">Repeat new password</label>
                <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
            </div>

            <button className="button" type="submit">Update</button>
        </form>
    </div>
}
   
export default withContext (Settings)





