class SettingsPanel extends Component {
    constructor() {
        super(`<div class="profile">
        <h2>Profile</h2>
        <div class="form-container">
            
            <form class="password-form">
            <h3>Update password</h3>
    
            <label for="currentPassword">Current password</label>
            <input type="password" name="currentPassword" id="currentPassword" placeholder="current password">
            
            <label for="newPassword">New password</label>
            <input type="password" name="newPassword" id="newPassword" placeholder="new password">
            
            <label for="repeatPassword">Repeat password</label>
            <input type="password" name="repeatPassword" id="repeatPassword" placeholder="repeat password">
    
            <button type="submit">Send</button>
            </form>
        </div>
        <div class="form-container">
            <form class="email-form">
            <h3>Update email</h3>
    
            <label for="newEmail">New email</label>
            <input type="email" id="newEmail" name="newEmail" placeholder="new email">
    
            <button type="submit">Send</button>
            </form>
        </div>
        </div>`)

        const passwordForm = this.container.querySelector('.password-form')
        passwordForm.onsubmit = (event) => {
            event.preventDefault()
            const currentPass = passwordForm.currentPassword.value
            const newPass = passwordForm.newPassword.value
            const repeatPass = passwordForm.repeatPassword.value
            this.updatePassword(currentPass, newPass, repeatPass)
        }

        const emailForm = this.container.querySelector('.email-form')
        emailForm.onsubmit = (event) => {
            event.preventDefault()
            const newEmail = emailForm.newEmail.value
            this.updateEmail(newEmail)
        }
    }

    resetPasswordForm() {
        this.container.querySelector('.password-form').reset()
    }

    resetEmailForm() {
        this.container.querySelector('.email-form').reset()
    }

    updatePassword = null

    updateEmail = null
    
}