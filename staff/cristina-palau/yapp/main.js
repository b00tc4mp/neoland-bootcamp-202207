// loginPage.classList.add('off')
// homePage.classList.remove('off')
// registerPage.classList.remove('off')

registerLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

loginLink.onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

profileButton.onclick = function () {
    
    notesPage.classList.add('off')
    homeFooter.classList.add('off')
    profileButton.classList.add('off')
    updatePage.classList.remove('off')
    homeButton.classList.remove('off')
}

homeButton.onclick = function () {

    updatePage.classList.add('off')
    homeButton.classList.add('off')
    notesPage.classList.remove('off')
    homeFooter.classList.remove('off')
    profileButton.classList.remove('off')

}

loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)

                return
            }

            sessionStorage.token = token

            renderHome()

        })

    } catch (error) {
        alert(error.message)
    }

    loginForm.reset()
}

addNote.onclick = function () {

    try {
        createNote(sessionStorage.token, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            renderList()

        })
    } catch (error) {
        alert(error.message)
    }
}

registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value
    // const questionselector = document.getElementById("question")
    // const question = questionselector.options[questionselector.selectedIndex].text
    // const answer = registerForm.answer.value

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

menuButton.onclick = function () {
    
    menuOptions.classList.remove('off')
    menuButton.classList.add('off')
}

closeButton.onclick = function () {

    menuButton.classList.remove('off')
    menuOptions.classList.add('off')

}

updateForm.onsubmit = function (event) {
    event.preventDefault()

    const oldPass = updateForm.oldpassword.value
    const newPass = updateForm.newpassword.value
    const newPass2 = updateForm.newpassword2.value
    
    try {
        updatePassword(sessionStorage.token, oldPass, newPass, newPass2, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            updatePage.classList.add('off')
            notesPage.classList.remove('off')
            renderList()
        })
    } catch (error) {
        alert(error.message)
    }

}

resetLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    passwordPage.classList.remove('off')
}

if (sessionStorage.token)
    renderHome()


logoutButton.onclick = function () {
    delete sessionStorage.token

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

