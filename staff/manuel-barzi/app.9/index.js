const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')
const homePage = document.querySelector('.home-page')

// temp (for ui design purposes)
loginPage.classList.add('off')
homePage.classList.remove('off')

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

    try {
        authenticateUser(email, password, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            try {
                retrieveUser(email, function (error, user) {
                    if (error) {
                        alert(error.message)

                        return
                    }

                    try {
                        retrieveNotes(user.id, function (error, notes) {
                            if (error) {
                                alert(error.message)

                                return
                            }

                            loginPage.classList.add('off')

                            const title = homePage.querySelector('.title')

                            title.innerText = 'Hello, ' + user.name + '!'

                            const list = homePage.querySelector('.list')
                            list.innerHTML = ''

                            notes.forEach(note => {
                                const item = document.createElement('li')
                                item.classList.add('list__item')

                                item.innerText = note.text

                                list.append(item)
                            })

                            homePage.classList.remove('off')
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }

}

const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            registerPage.classList.add('off')
            loginPage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}