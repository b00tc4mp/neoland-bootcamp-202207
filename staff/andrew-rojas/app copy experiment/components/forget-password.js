class ForgetPassword {
  constructor() {
    const temp = document.createElement('temp')

    temp.innerHTML = `<main class="forgetPassword-page container container--spaced">
    <form class="form">
      <div class="form__field">
        <label for="email">Email</label>
        <input class="input" type="password" name="old password" placeholder="password" id="old_pasword">
      </div>

      <div class="form__field">
        <label for="new-password">New Password</label>
        <input class="input" type="password" name="new password" placeholder="password" id="new_password">
      </div>

      <div class="form__field">
      <label for="repeat-password">Repeat Password</label>
      <input class="input" type="password" name="repeat password" placeholder="password" id="repeat_password">
      </div>

      <button class="button" type="submit">save</button>
    
    </form>

    <button class="back-login">Login</button>

  </main>`

  this.container = temp.firstChild
  }

  onFormSubmit(callback) {
  const form = this.container.querySelector('form')

    form.onsubmit = function (event) {
      event.preventDefault()

      const oldPassword = form.oldPassword.value
      const newPassword = form.newPassword.value
      const repeatPassword = form.repeatPassword.value

      callback(oldPassword, newPassword, repeatPassword)
    }
  }

  onloginClick(callback) {
    this.container.querySelector('.back-login').onclick = event => {
      event.preventDefault()

      callback()
    }
  }

  reset() {
    this.container.querySelector('form').reset()
  }
}
