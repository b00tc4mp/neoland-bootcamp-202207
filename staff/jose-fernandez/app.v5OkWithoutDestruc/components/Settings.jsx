function Settings(props) {

    const logger = new Loggito('Settings')

    logger.info('render')

    const handleFormSubmitPassword = event => {
        event.preventDefault()
        const formPass = event.target
        const oldPassword = formPass.oldPassword.value
        const newPassword = formPass.newPassword.value
        const newPasswordRepeat = formPass.newPasswordRepeat.value

        try {
            updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('Password updated')
                props.onCloseClick()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleFormSubmitEmail = event => {
        event.preventDefault()
        const formEmail = event.target
        const newEmail = formEmail.newEmail.value
        const showemail = ''

        try {
            updateUserEmail(sessionStorage.token, newEmail, error => {
                if (error) {
                    alert(error.message)
                    return
                }

                alert('Email updated')

                props.onCloseClick()
            })
        } catch (error) {
            alert(error.message)
        }

    }

    const handleFormSubmitUsername = event => {
        event.preventDefault()
    }

    return <div className="settings-panel formSettings" >

        <IconButtonMainItemsMenuPanel text='close' onClick={props.onCloseClick} />
        <form className="formPassword contSettings" onSubmit={handleFormSubmitPassword}>
            <div className="nameSettings">UPDATE PASSWORD: </div>
            <div className="contButtonsSettings">
                <label className="label__movil">CURRENT PASSWORD</label>
                <input className="oldPassword updatePass" type="password" name="oldPassword" placeholder="current password" />
                <label className="label__movil">NEW PASSWORD</label>
                <input className="newPassword updatePass" type="password" name="newPassword" placeholder="new password" />
                <label className="label__movil">REPEAT NEW PASSWORD</label>
                <input className="newPasswordRepeat updatePass" type="password" name="newPasswordRepeat" placeholder="new password repeat" />
            </div>
            <button className="btn-update" type="submit">Update Password</button>
        </form>
        <form className="formEmail contSettings" onSubmit={handleFormSubmitEmail}>
            <div className="nameSettings">UPDATE EMAIL</div>
            <div className="contButtonsSettings">
                <div className="divEmail">
                    <h1 className="normalMessageEmail">Email : </h1><h1 className="messageEmail"> {props.email}</h1>
                </div>

                <input className="updateEmail" type="email" name="newEmail" placeholder="New Email" />
            </div>

            <button className="btn-update" type="submit">Update Email</button>
        </form>
        <form className="formUserName contSettings" onSubmit={handleFormSubmitUsername}>
            <div className="nameSettings">UPDATE USER NAME</div>
            <div className="contButtonsSettings">
                <input className="updateEmail" type="text" name="newUserName" placeholder="new user name" />
            </div>

            <button className="btn-update" type="submit">Update Username</button>
        </form>
    </div>
}