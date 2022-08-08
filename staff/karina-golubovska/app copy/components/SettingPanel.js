class SettingsPanel extends Component{
    constructor(){
        super(`<div class="setting-panel container">
        Settings

            <button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button>

            <form class="update-password-form form">
                <div class="form__field">
                    <label for="oldPassword">Current password</label>
                    <input class="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword">
                </div>

                <div class="form__field">
                    <label for="newPassword">New password</label>
                    <input class="input" type="password" name="newPassword" placeholder="new password" id="newPassword">
                </div>

                <div class="form__field">
                    <label for="newPasswordRepeat">Repeat new password</label>
                    <input class="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat">
                </div>

                <button class="button" type="submit">Update</button>
            </form>
        </div>`)

        const updatePasswordForm = this.container.querySelector('.update-password-form')

        updatePasswordForm.onsubmit = event => {
            event.preventDefault()

            const oldPassword = updatePasswordForm.oldPassword.value
            const newPassword = updatePasswordForm.newPassword.value
            const newPasswordRepeat = updatePasswordForm.newPasswordRepeat.value

            this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
        }

        this.container.querySelector('.close-settings-button').onclick = () => {
            this.onClose()
        }
    }

    onUpdatePassword = null

    onClose = null
}




    