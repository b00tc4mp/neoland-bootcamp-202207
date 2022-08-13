class SettingsPanel extends Component {
    constructor() {
        super(`<div class="settings-panel formSettings">
        

        <form class="formPassword contSettings">
            <div class="nameSettings">UPDATE PASSWORD: </div>
            <div class="contButtonsSettings">
                <input class="oldPassword" type="password" name="oldPassword"    placeholder="current password">
                <input class="newPassword" type="password" name="newPassword"    placeholder="new password">
                <input class="newPasswordRepeat" type="password" name="newPasswordRepeat"  placeholder="new password repeat">
            </div>
            <button class="btn-updatePassword" type="submit">Update Password</button>
        </form>
        <form class="formEmail contSettings">
            <div class="nameSettings">UPDATE EMAIL</div>
            <div class="contButtonsSettings">
                <div class="divEmail">
                    <h1 class="normalMessageEmail">Email : </h1><h1 class="messageEmail"> jose@fer.com</h1>
                </div>
        
                <input class="updateEmail" type="email" name="newEmail"  placeholder="New Email">
            </div>
            
            <button class="btn-updatePassword" type="submit">Update Email</button>
        </form>

    </div>`)

        const updatePasswordForm = this.container.querySelector('.formPassword')
        

        updatePasswordForm.onsubmit = event => {
            event.preventDefault()

            const oldPassword = updatePasswordForm.oldPassword.value
            const newPassword = updatePasswordForm.newPassword.value
            const newPasswordRepeat = updatePasswordForm.newPasswordRepeat.value

            this.onUpdatePassword(oldPassword, newPassword, newPasswordRepeat)
        }

        const closeButton = new IconButtonMainItemsMenuPanel('close')
        this.closeButton = closeButton

        closeButton.onClick=()=>{
            this.onClose()
        }
        this.container.prepend(closeButton.container)
    }
    onUpdatePassword = null

    onClose= null

    close(){
        this.closeButton.click()
    }
}