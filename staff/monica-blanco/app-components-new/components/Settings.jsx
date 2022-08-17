function Settings(props) {
    const logger = new Loggito('Settings')

    logger.info('constructor')

    const handleFormSubmit = event => {
        event.preventDefault()

        const {target: {oldPassword:{value:oldPassword}, newPassword:{value:newPassword}, newPasswordRepeat:{value:newPasswordRepeat}}} = event

        try {
            updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    alert(error.message)
                    
                    logger.warn(error.message)

                    return
                }
    
                alert('Password updated')
                form.reset()
                props.onCloseClick()
                
            })
        } catch(error) {
            alert(error.message)
        }
    }

    logger.info('render')

        return <div className="settings-panel container">

            <form className="update-password-form form" onSubmit={handleFormSubmit}>
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU" />

                <div className="form__field">
                    <label htmlFor="oldPassword">Current password</label>
                    <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
                </div>

                <div className="form__field">
                    <label htmlFor="newPassword">New password</label>
                    <input class="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
                </div>

                <div className="form__field">
                    <label htmlFor="newPasswordRepeat">Repeat new password</label>
                    <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
                </div>

                <button className="button" type="submit">Update</button>
            </form>
            <IconButton text="home" onClick={props.onCloseClick} />
        </div>
    }

