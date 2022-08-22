class Login {
    constructor() {
        const temp = document.createElement('temp')

        temp.innerHTML = `<main class="login-page container container--spaced ">

        <div class="img">
          <img class="iconLogin"
            src=" https://us.123rf.com/450wm/123vector/123vector1803/123vector180300209/97210458-ilustraci%C3%B3n-del-icono-de-persona-sobre-fondo-blanco.jpg?ver=6"
            alt="icon.login">
        </div>
    
        <form class="form">
          <div class="form__field">
            <label for="email">email</label>
            <input class="input" type="email" name="email" placeholder="email" id="email">
          </div>
    
          <div class="form__field">
            <label for="password">password</label>
            <input class="input" type="password" name="password" placeholder="password" id="password">
          </div>
    
    
          <button class="button" type="submit">login</button>
    
    
        </form>
        <a class="anchor" href="#">Register</a>
      </main>`

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

        form.onsubmit = function(event) {
            event.preventDefault()

            const email = form.email.value
            const password = form.password.value

            callback(email, password)
        }
    }

    reset() {
        this.container.querySelector('form').reset()
    }
}