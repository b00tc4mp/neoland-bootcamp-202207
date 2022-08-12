class ProfileMenu extends Component {
    constructor(props) {
        super(props)
    }

    handleUpdatePassSubmit = (event) => {
        event.preventDefault()
        const oldPass = event.target.oldPassword.value
        const newPass = event.target.newPassword.value
        const confirmNewPass = event.target.confirmNewPassword.value
        let result = confirm('Are you sure to change password?')
        if (result) {
            try {
                updateUserPassword(sessionStorage.UserToken, oldPass, newPass, confirmNewPass, (error) => {
                    if (error) {
                        alert(error.message)
                        this.logger.warn(error.message)
                    } else {
                        alert('Password updated succesfully')
                        event.target.reset()
                    }
                })
            } catch (error) {
                alert(error.message)
                this.logger.warn(error.message)
            }
        }
    }

    handleUpdateEmailSubmit = (event) => {
        event.preventDefault()
        const newEmail = event.target.newEmail.value
        let result = confirm('Are you sure to update Email?')
        if (result) {
            try {
                updateUserEmail(sessionStorage.UserToken, newEmail, function (error) {
                    if (error) {
                        alert(error.message)
                        this.logger.warn(error.message)
                    } else {
                        alert('Email updated succesfully')
                        event.target.reset()
                    }
                })
            } catch (error) {
                alert(error.message)
                this.logger.warn(error.message)
            }
        }
    }
    render() {
        return (
            <section className="homeMainContainer home__profileContainer">
                <div className="profileMenuContainer">
                    <form id="updatePasswordForm" action="#" onSubmit={this.handleUpdatePassSubmit}>
                        <label htmlFor="oldPassword" className="labelForm">Old Password</label>
                        <input type="password" name="oldPassword" className="profileInput" />
                        <label htmlFor="newPassword" className="labelForm">New Password</label>
                        <input type="password" name="newPassword" className="profileInput" />
                        <label htmlFor="confirmNewPassword" className="labelForm">Confirm New Password</label>
                        <input type="password" name="confirmNewPassword" className="profileInput" />
                        <button type="submit" className="profileFormButton" id="updatePasswordSubmit">Confirm</button>
                    </form>
                    <form id="updateEmailForm" action="#" onSubmit={this.handleUpdateEmailSubmit}>
                        <label htmlFor="newEmail" className="labelForm">New Email</label>
                        <input type="email" name="newEmail" className="profileInput" />
                        <button type="submit" className="profileFormButton" id="updateEmailSubmit">Confirm</button>
                    </form>
                </div>
            </section>
        )
    }

}