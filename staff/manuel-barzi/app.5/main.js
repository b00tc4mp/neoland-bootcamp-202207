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

    authenticateUser(email, password, function (error) {
        if (!error) {
            retrieveUser(email, function (error, user) {
                if (!error) {
                    loginPage.classList.add('off')

                    const title = homePage.querySelector('.title')

                    title.innerText = 'Hello, ' + user.name + '!'

                    homePage.classList.remove('off')
                } else
                    alert(error.message)
            })
        } else
            alert(error.message)
    })

}

const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    registerUser(name, email, password, function (error) {
        if (!error) {
            registerPage.classList.add('off')
            loginPage.classList.remove('off')
        } else
            alert(error.message)
    })
}