function Settings (props) {
    const logger = new Logger(Settings.name)

    logger.info('render')

    const onPasswordFormSubmit = event => {
        event.preventDefault()

        const { 
            target: form, 
            target: {
            currentPassword: { value: currentPass },
            newPassword: { value: newPass }, 
            repeatPassword: { value: repeatPass }
            }
        } = event

        try {
            updateUserPassword(sessionStorage.token, currentPass, newPass, repeatPass, error => {
                if(error) {
                    alert(error.message)
                    logger.error(error.message)
                    return
                }
                
                form.reset()
                logger.debug('user changed pass successfully')
                alert('password changed successfully')
    
            })

        } catch(error) {
            alert(error.message)
            logger.error(error.message)
        }
    }

    const onEmailFormSubmit = event => {
        event.preventDefault()

        const newEmail = event.target.newEmail.value

        try {
            updateUserEmail(sessionStorage.token, newEmail, error => {
                if(error) {
                    alert(error.message)
                    logger.error(error.message)
                    return
                }
                event.target.reset()
                logger.debug('user changed email successfully')
                alert('email changed successfully')
    
            })

        } catch(error) {
            alert(error.message)
            logger.error(error.message)
        }
    }
    
    return <div className="profile">
    <h2>Profile</h2>
    <div className="form-container">
        
        <form className="password-form" onSubmit={onPasswordFormSubmit}>
        <h3>Update password</h3>

        <label htmlFor="currentPassword">Current password</label>
        <input type="password" name="currentPassword" id="currentPassword" placeholder="current password" />
        
        <label htmlFor="newPassword">New password</label>
        <input type="password" name="newPassword" id="newPassword" placeholder="new password" />
        
        <label htmlFor="repeatPassword">Repeat password</label>
        <input type="password" name="repeatPassword" id="repeatPassword" placeholder="repeat password" />

        <button type="submit">Send</button>
        </form>
    </div>
    <div className="form-container">
        <form className="email-form" onSubmit={onEmailFormSubmit}>
        <h3>Update email</h3>

        <label htmlFor="newEmail">New email</label>
        <input type="email" id="newEmail" name="newEmail" placeholder="new email" />

        <button type="submit">Send</button>
        </form>
    </div>
    </div>
}