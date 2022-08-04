class SettingsPanel extends Component {
  constructor() {
    super(`<div class="settings-panel">
        <!-- settings-page page background flex-container -->
        <h2>Settings</h2>
    
        <!--button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button-->
    
    <h3>Reset Password Form</h3>
        
                  <form action="" class="reset-password-form resetPassword-elements flex-container reset-password-form input-fields">
          
                      <div class="form__field">
                        <label for="oldPassword">old password</label>
                        <input type="password" placeholder="old password" name="oldPassword" id="oldPassword" class="input-item" />
                      </div>
          
                      <div class="form__field">
                        <label for="newPassword">new password</label>
                        <input type="password" placeholder="new password" name="newPassword" id="newPassword" class="input-item" />
                      </div>
          
                      <div class="form__field">
                        <label for="retypeNewPassword">retype new password</label>
                        <input type="password" placeholder="retype new password" name="retypeNewPassword" id="retypeNewPassword" class="input-item" />
                      </div>
                
                    <button type="submit" class="button--primary">Save</button>
                  </form>
                 
    </div>`);

    // I think this changes to a const
    // onResetPasswordFormSubmit(callback) {
    //Manu's code starts here
    const resetPasswordForm = this.container.querySelector(
      ".reset-password-form"
    );

    resetPasswordForm.onsubmit = (event) => {
      event.preventDefault();

      const oldPassword = resetPasswordForm.oldPassword.value;
      const newPassword = resetPasswordForm.newPassword.value;
      const retypeNewPassword = resetPasswordForm.retypeNewPassword.value;
      //The initial function is passed here instead of the callback
      this.onResetPasswordFormSubmit(
        oldPassword,
        newPassword,
        retypeNewPassword
      );
      //   callback(oldPassword, newPassword, retypeNewPassword);
    };
  }

  onResetPasswordFormSubmit = null;

  onClose = null;
}
// }
