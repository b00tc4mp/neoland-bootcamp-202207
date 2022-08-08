class RegisterPage extends NavigableForm {
  constructor() {
    super(`<main class="register-page page background flex-container">
    <div class="login-elements flex-container">
      <form action="" class="form flex-container login-form">
        <div class="input-fields">

          <div class="form__field">
            <label for="name">name</label>
            <input type="text" placeholder="name" name="name" id="name" class="input-item" />
          </div>

          <div class="form__field">
            <label for="email">email</label>
            <input type="email" placeholder="email" name="email" id="email" class="input-item" />
          </div>

          <div class="form__field">
            <label for="password">password</label>
            <input type="password" placeholder="password" name="password" id="password" class="input-item" />
          </div>
  

        </div>
        <button type="submit" class="button--primary">Register</button>
      </form></div>
      <a class="anchor">Already have an account?</a>
    </div>
</main>`);

    // this.container = temp.firstChild;
  }

  /*   onLinkClick(callback) {
    this.container.querySelector(".anchor").onclick = (event) => {
      event.preventDefault();

      callback();
    };
  } */

  onFormSubmit(callback) {
    const form = this.container.querySelector("form");

    form.onsubmit = function (event) {
      event.preventDefault();

      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      callback(name, email, password);
    };
  }

  reset() {
    this.container.querySelector("form").reset();
  }
}

/* temp.innerHTML = `<main class="register-page page background flex-container">
    <div class="login-elements flex-container">
      <form action="" class="form flex-container login-form">
        <div class="input-fields">

          <div class="form__field">
            <label for="name">name</label>
            <input type="text" placeholder="name" name="name" id="name" class="input-item" />
          </div>

          <div class="form__field">
            <label for="email">email</label>
            <input type="email" placeholder="email" name="email" id="email" class="input-item" />
          </div>

          <div class="form__field">
            <label for="password">password</label>
            <input type="password" placeholder="password" name="password" id="password" class="input-item" />
          </div>
  

        </div></div>
        <button type="submit" class="button--primary">Register</button>
      </form>
      <a class="anchor">Already have an account?</a>
    </div>
</main>`; */
