const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')
const homePage = document.querySelector('.home-page')

const registerLink = loginPage.querySelector('.anchor')
registerLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.anchor')
loginLink.onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

const loginForm = loginPage.querySelector('.form')
loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (user) {
        loginPage.classList.add('off')

        const title = homePage.querySelector('.title')
        title.innerText = 'Hello, ' + user.name + '!'

        homePage.classList.remove('off')
    } else
        alert('credentials error')
}

const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    const user = users.find(function (user) {
        return user.email === email
    })

    if (user) 
        alert('user already exists')
    else {
        users.push({
            name: name,
            email: email,
            password: password
        })

        registerPage.classList.add('off')
        loginPage.classList.remove('off')
    }
}