class ProfileMenu extends Component{
    constructor(){
        super(`<section class="homeMainContainer home__profileContainer">
        <div class="profileMenuContainer">
            <form id="updatePasswordForm" action="#">
                <label for="oldPassword" class="labelForm">Old Password</label>
                <input type="password" name="oldPassword" class="profileInput">
                <label for="newPassword" class="labelForm">New Password</label>
                <input type="password" name="newPassword" class="profileInput">
                <label for="confirmNewPassword" class="labelForm">Confirm New Password</label>
                <input type="password" name="confirmNewPassword" class="profileInput">
                <button type="submit" class="profileFormButton" id="updatePasswordSubmit">Confirm</button>
            </form>
            <form id="updateEmailForm" action="#">
                <label for="newEmail" class="labelForm">New Email</label>
                <input type="email" name="newEmail" class="profileInput">
                <button type="submit" class="profileFormButton" id="updateEmailSubmit">Confirm</button>
            </form>
        </div>
        </section>`)

        const updatePassForm = this.container.querySelector('#updatePasswordForm')

        updatePassForm.onsubmit = event => {
            event.preventDefault()

            const oldPass = updatePassForm.oldPassword.value
            const newPass = updatePassForm.newPassword.value
            const confirmNewPass = updatePassForm.confirmNewPassword.value

            this.onUpdateUserPass(oldPass, newPass, confirmNewPass)
            updatePassForm.reset()
        }

        const updateEmailForm = this.container.querySelector('#updateEmailForm')

        updateEmailForm.onsubmit = event => {
            event.preventDefault()
            const newEmail = updateEmailForm.newEmail.value

            this.onUpdateUserEmail(newEmail)
            updateEmailForm.reset()
            
        }

    }

    onUpdateUserPass = null

    onUpdateUserEmail = null
}