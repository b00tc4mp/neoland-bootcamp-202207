const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')
const homePage = document.querySelector('.home-page')
const passwordPage = document.querySelector('.password-page')

let _user

// loginPage.classList.add('off')
// homePage.classList.remove('off')
// registerPage.classList.remove('off')


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
        authenticateUser(email, password, function (error, userId) {
            if (error) {
                alert(error.message)

                return
            }
            
            try {
                retrieveUser(userId, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }

                    _user = user

                    loginPage.classList.add('off')

                    const title = homePage.querySelector('.greeting')

                    title.innerText = 'Hey, ' + user.name + '!'
                    const list = homePage.querySelector('.list')
                    list.innerHTML = ''

                    refreshList()

                    homePage.classList.remove('off')
                })
            } catch (error) {
                alert(error.message)
            }
        })

    } catch (error) {
        alert(error.message)
    }

    loginForm.reset()
}

const addNote = homePage.querySelector('.addnote')
addNote.onclick = function () {

    try {
        createNote(_user.id, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            refreshList()

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
    const questionselector = document.getElementById("question")
    const question = questionselector.options[questionselector.selectedIndex].text
    const answer = registerForm.answer.value

    try {
        registerUser(name, email, password, question, answer, function (error) {
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

const resetLink = loginPage.querySelector('.forgetpass')
resetLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    passwordPage.classList.remove('off')
}


const loginPassLink = passwordPage.querySelector('.anchor')
loginPassLink.onclick = function (event) {
    event.preventDefault()

    passwordPage.classList.add('off')
    loginPage.classList.remove('off')
}

const passwordForm = passwordPage.querySelector('.form')
passwordForm.onsubmit = function (event) {
    event.preventDefault()

    const email = passwordForm.email.value
    const questionselector = document.getElementById("passquestion")
    const question = questionselector.options[questionselector.selectedIndex].text
    const answer = passwordForm.passanswer.value

    try {
        resetPassword(email, question, answer, function (error, user) {
            if (error) {
                alert(error.message)
                return
            }


            alert('your password is ' + user.password)

            passwordForm.reset()

            passwordPage.classList.add('off')
            loginPage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
    
    passwordForm.reset()
}

const logoutLink = homePage.querySelector('.anchor')
logoutLink.onclick = function (event) {
    event.preventDefault()

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

function refreshList() {
    try {
        retrieveNotes(_user.id, function (error, notes) {
            if (error) {
                alert(error.message)

                return
            }

            const list = homePage.querySelector('.list')
            list.innerHTML = ''

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('delete')
                deleteButton.innerHTML = '✖️'

                deleteButton.onclick = function () {
                    try {
                        deleteNote(_user.id, note.id, error => {
                            if (error) {
                                alert(error.message)

                                return
                            }

                            refreshList()
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }

                const text = document.createElement('div')
                text.classList.add('list__item-text')
                text.contentEditable = true

                text.onkeyup = function () {
                    try {
                        updateNote(_user.id, note.id, text.textContent, error => {
                            if (error) {
                                alert(error.message)

                                return
                            }
                        })

                    } catch (error) {
                        alert(error.message)
                    }
                }

                text.innerHTML = note.text

                item.append(deleteButton)

                item.append(text)

                list.append(item)

            })

        })
    } catch (error) {
        alert(error.message)
    }
}
