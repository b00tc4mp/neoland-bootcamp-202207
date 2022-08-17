import './ProfileMenu.css'
import updateUserPassword from '../logic/updateUserPassword'
import updateUserEmail from '../logic/updateUserEmail'

import Loggito from '../utils/loggito'

function ProfileMenu({onFeedback}) {

    const logger = new Loggito('Profile Menu')

    const handleUpdatePassSubmit = (event) => {
        event.preventDefault()

        const { target: form, target: {
            oldPassword: { value: oldPassword },
            newPassword: { value: newPassword },
            confirmNewPassword: { value: confirmNewPassword }
        } } = event

        let result = window.confirm('Are you sure to change password?')
        if (result) {
            try {
                updateUserPassword(sessionStorage.UserToken, oldPassword, newPassword, confirmNewPassword, (error) => {
                    if (error) {
                        onFeedback({level: "error", message: error.message})
                        logger.warn(error.message)
                    } else {
                        onFeedback({level: "success", message: 'Password updated successfully'})
                        form.reset()
                    }
                })
            } catch (error) {
                onFeedback({level: "error", message: error.message})
                logger.warn(error.message)
            }
        }
    }

    const handleUpdateEmailSubmit = (event) => {
        event.preventDefault()
        const { target: form, target: {
            newEmail: { value: newEmail }
        } } = event

        let result = window.confirm('Are you sure to update Email?')
        if (result) {
            try {
                updateUserEmail(sessionStorage.UserToken, newEmail, function (error) {
                    if (error) {
                        onFeedback({level: "error", message: error.message})
                        logger.warn(error.message)
                    } else {
                        onFeedback({level: "success", message: 'Email updated successfully'})
                        form.reset()
                    }
                })
            } catch (error) {
                onFeedback({level: "error", message: error.message})
                logger.warn(error.message)
            }
        }
    }

    return (
        <section className="homeMainContainer home__profileContainer">
            <div className="profileMenuContainer">
                <form id="updatePasswordForm" action="#" onSubmit={handleUpdatePassSubmit}>
                    <label htmlFor="oldPassword" className="labelForm">Old Password</label>
                    <input type="password" name="oldPassword" className="profileInput" />
                    <label htmlFor="newPassword" className="labelForm">New Password</label>
                    <input type="password" name="newPassword" className="profileInput" />
                    <label htmlFor="confirmNewPassword" className="labelForm">Confirm New Password</label>
                    <input type="password" name="confirmNewPassword" className="profileInput" />
                    <button type="submit" className="profileFormButton" id="updatePasswordSubmit">Confirm</button>
                </form>
                <form id="updateEmailForm" action="#" onSubmit={handleUpdateEmailSubmit}>
                    <label htmlFor="newEmail" className="labelForm">New Email</label>
                    <input type="email" name="newEmail" className="profileInput" />
                    <button type="submit" className="profileFormButton" id="updateEmailSubmit">Confirm</button>
                </form>
            </div>
        </section>
    )
}

export default ProfileMenu