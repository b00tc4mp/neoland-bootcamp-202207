const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')
const homePage = document.querySelector('.home-page')

const registerLink = loginPage.querySelector('.anchor')
registerLink.onclick = function(event) {
    event.preventDefault()
    
    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.anchor')
loginLink.onclick = function(event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

const loginForm = loginPage.querySelector('.form')
loginForm.onsubmit = function(event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    const user = users.find(function(user) {
        return user.email === email && user.password === password
    })

    if (user) {
        loginPage.classList.add('off')
        homePage.classList.remove('off')
    } else
        alert('credentials error')
}
