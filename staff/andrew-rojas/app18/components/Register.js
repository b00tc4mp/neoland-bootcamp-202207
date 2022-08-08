class Register extends NavigableForm {
  constructor() {
    super(`<main class="register-page container container--spaced">
      <form class="form">
        <div class="form__field">
          <label for="name">Name</label>
          <input class="input" type="text" name="name" placeholder="name" id="name">
        </div>

        <div class="form__field">
          <label for="email">Email</label>
          <input class="input" type="email" name="email" placeholder="email" id="email">
        </div>

        <div class="form__field">
          <label for="password">Password</label>
          <input class="input" type="password" name="password" placeholder="password" id="password">
        </div>

        <button class="button" type="submit">Register</button>
      
      </form>
    
      <a class="anchor" href="login.html">Login</a>

    </main>`)

    this.container = temp.firstChild
  }

  onLinkClick(callback) {
    this.container.querySelector('.anchor').onclick = event => {
      event.preventDefault()

      callback()
    }
  }

  onFormSubmit(callback) {
    const form = this.container.querySelector('form')

    form.onsubmit = function (event) {
      event.preventDefault()

      const name = form.name.value
      const email = form.email.value
      const password = form.password.value

      callback(name, email, password)
    }
  }
}