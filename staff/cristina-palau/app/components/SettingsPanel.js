class SettingsPanel extends Component {
    constructor() {
        super(`<div class="update-container">
        <form class="update-password-form update-form">Update password
            
                <label for="password">Old Password</label>
                <input class="input" type="password" name="oldpassword" placeholder="oldpassword" id="oldpassword">
          
                <label for="password">New password</label>
                <input class="input" type="password" name="newpassword" placeholder="newpassword" id="newpassword">
           
                <label for="password">Repeat new password</label>
                <input class="input" type="password" name="newpassword2" placeholder="repeat newpassword"
                    id="newpassword2">
                  
                <button class="submitbutton" type="submit">save</button>
        
        </form>

        <form class="update-email-form update-form">Update e-mail
           
                <label for="email">email</label>
                <input class="input" type="newemail" name="newemail" placeholder="e-mail" id="newemail">
            
                <button class="submitbutton" type="submit">save</button>   
        </form>
        </div>`)

        const updatePasswordForm = this.container.querySelector('.update-password-form')
        updatePasswordForm.onsubmit = (event) => {
            event.preventDefault()

            const oldPass = updatePasswordForm.oldpassword.value
            const newPass = updatePasswordForm.newpassword.value
            const newPass2 = updatePasswordForm.newpassword2.value

            this.onUpdatePassword(oldPass, newPass, newPass2)
        }


        const updateEmailForm = this.container.querySelector('.update-email-form')
        updateEmailForm.onsubmit = (event) => {
            event.preventDefault()

            const newEmail = updateEmailForm.newemail.value

            this.onUpdateEmail(newEmail)
        }
    }

    onUpdatePassword = null
    
    onUpdateEmail = null
}
