class Login extends NavigableForm {
  constructor() {
    super(`<main class="login-page page background flex-container">
    <div class="login-elements flex-container">
      <form action="" class=" login-form flex-container login-form">
        <div class="input-fields">

          <div class="form__field">
            <label for="email">email</label>
            <input type="email" placeholder="email" name="email" id="email" class="input-item" />
          </div>

          <div class="form_field">
            <label for="password">password</label>
            <input type="password" placeholder="password" name="password" id="password" class="input-item" />
          </div>

        </div>
        <button href="home.html" type="submit" class="button--primary">
          Login
        </button>
      </form>
      <a href="forgot.password.html">Forgot password</a>
      <a href="register.html" class="anchor">Register</a>
    </div>
</main>`);
  }

  onLinkClick(callback) {
    this.container.querySelector(".anchor").onclick = (event) => {
      event.preventDefault();

      callback();
    };
  }

  onFormSubmit(callback) {
    const form = this.container.querySelector(".login-form");

    form.onsubmit = function (event) {
      event.preventDefault();

      const email = form.email.value;
      const password = form.password.value;

      callback(email, password);
    };
  }

  reset() {
    this.container.querySelector(".login-form").reset();
  }
}
