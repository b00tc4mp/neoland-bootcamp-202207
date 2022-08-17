function SettingsPanel () {

  return <div class="settings-panel container">
  <form className="update-password-form form">
    <div className="form__field">
      <label for="oldPassword">Current password</label>
      <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
    </div>

    <div className="form__field">
      <label for="newPassword">New password</label>
      <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
    </div>

    <div className="form__field">
      <label for="newPasswordRepeat">Repeat new password</label>
      <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
    </div>

    <button className="button" type="submit">Update</button>
  </form>
</div>

}