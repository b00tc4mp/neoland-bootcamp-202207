class SettingsPanel extends Component{
    constructor() {
        super(`<div class= "settings-panel container">
            <form class="update-password-form form">
            <img class="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Ne6f06tRXhNZQl2jp5YjNepB8j5_hojl4LcOcyO-1s7TLzUHGuSIwblFSZ_ihI0BAlU&usqp=CAU">
        
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

        const closeButton = new IconButton('house')
        this.closeButton = closeButton
        closeButton.onClick = () => {
            this.onClose()
        }
        this.container.append(closeButton.container)
    }

    onUpdatePassword = null

    onClose = null

    close(){
        this.closeButton.click()
    }
}