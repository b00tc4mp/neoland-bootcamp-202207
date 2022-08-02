// imperative

const template = document.createElement('main')
template.classList.add('login-page')

const form = document.createElement('form')
const email = document.createElement('input')
email.type = 'text'
email.placeholder = 'email'
const password = document.createElement('input')
password.type = 'text'
password.placeholder = 'password'
const button = document.createElement('button')
button.innerText = 'Login'

form.append(email, password, button)
template.append(form)

template.querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    alert('hola mundo')
}

document.body.append(template)

// declarative

const temp = document.createElement('temp')

temp.innerHTML = `<main class="login-page">
    <form>
        <input type="text" placeholder="email">
        <input type="password" placeholder="password">
        <button>Login</button>
    </form>
</main>`

const template = temp.firstChild

template.querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    alert('hola mundo')
}

document.body.append(template)
