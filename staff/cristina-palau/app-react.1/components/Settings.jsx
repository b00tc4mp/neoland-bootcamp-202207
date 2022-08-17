function Settings() {

    const logger = new Loggito('Settings')

    logger.info('render')

    const onUpdatePassword = event => {

        event.preventDefault()

        const oldPass = event.target.oldpassword.value
        const newPass = event.target.newpassword.value
        const newPass2 = event.target.newpassword2.value

        try {
            updatePassword(sessionStorage.token, oldPass, newPass, newPass2, function (error) {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)
                    return
                }

                alert('Success!!')

                event.target.reset()

                this.setState({ view: 'home' })
            })
        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }
    }

    const onUpdateEmail = event => {

        event.preventDefault()

        const newEmail = event.target.newemail.value


        try {
            updateEmail(sessionStorage.token, newEmail, function (error) {
                if (error) {
                    alert(error.message)
                    this.logger.warn(error.message)
                    return
                }

                alert('success!!')
                this.setState = ({ view: 'home' })
                event.target.reset()
            })
        } catch (error) {
            alert(error.message)
            this.logger.warn(error.message)
        }
    }

    return <div className="settings-page page">
        <form className="form" method="get" onSubmit={onUpdatePassword}>Update password

            <label htmlFor="password">Old Password</label>
            <input className="input" type="password" name="oldpassword" placeholder="oldpassword" id="oldpassword" />

            <label htmlFor="password">New password</label>
            <input className="input" type="password" name="newpassword" placeholder="newpassword" id="newpassword" />

            <label htmlFor="password">Repeat new password</label>
            <input className="input" type="password" name="newpassword2" placeholder="repeat newpassword"
                id="newpassword2" />

            <button className="submitbutton" type="submit">save</button>

        </form>

        <form className="form" method="get" onSubmit={onUpdateEmail}>Update e-mail

            <label htmlFor="email">email</label>
            <input className="input" type="newemail" name="newemail" placeholder="e-mail" id="newemail" />

            <button className="submitbutton" type="submit">save</button>
        </form>
    </div>

    // const updatePasswordForm = this.container.querySelector('.update-password-form')
    // updatePasswordForm.onsubmit = (event) => {
    //     event.preventDefault()

    //     const oldPass = updatePasswordForm.oldpassword.value
    //     const newPass = updatePasswordForm.newpassword.value
    //     const newPass2 = updatePasswordForm.newpassword2.value

    //     this.onUpdatePassword(oldPass, newPass, newPass2)
    // }


    // const updateEmailForm = this.container.querySelector('.update-email-form')
    // updateEmailForm.onsubmit = (event) => {
    //     event.preventDefault()

    //     const newEmail = updateEmailForm.newemail.value

    //     this.onUpdateEmail(newEmail)
    // }


    // onUpdatePassword = null

    // onUpdateEmail = null
}
