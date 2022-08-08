const login = new Login
const register = new Register
const home = new Home



if (sessionStorage.UserToken) {
    renderHome()
}
else
    document.body.append(login.container)


login.onLinkClick(function () {
    document.body.append(register.container)
    document.body.removeChild(login.container)
})

login.onFormSubmit(function (email, password) {
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)
                return
            }
            // Guardo el token del usuario
            sessionStorage.setItem('UserToken', token)

            login.reset()

            document.body.removeChild(login.container)

            renderHome()

        })
    } catch (error) {
        alert(error.message)
    }
    login.reset()
})



home.onDeleteNoteClick = function (noteId) {

    let result = confirm('Are you sure to delete that note?')
    if (result) {
        try {
            deleteNote(sessionStorage.UserToken, noteId, error => {
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
}

home.onUpdateNote = function (noteId, noteTitle, noteText) {
    try {
        updateNote(sessionStorage.UserToken, noteId, noteTitle, noteText, error => {
            if (error) {
                alert(error.message)
                return
            }
        })

    } catch (error) {
        alert(error.message)
    }
}

home.onChangeNoteColor = function (notes, noteId, color) {
    try {
        changeNoteColor(sessionStorage.UserToken, notes, noteId, color, function (error) {
            if (error)
                alert(error.message)
        })
    } catch (error) {
        alert(error.message)
    }
}

register.onLinkClick(function () {
    document.body.removeChild(register.container)
    document.body.append(login.container)
})

register.onFormSubmit(function (name, email, password) {
    try {
        registerUser(name, email, password, function (error) {

            if (error) {
                alert(error.message)
                return
            }
            document.body.append(login.container)
            document.body.removeChild(register.container)
        })
    } catch (error) {
        alert(error)

    }
    register.reset()
})

//HOME
home.onNewNoteButton = function () {
    home.onNewNoteSubmit = function (newNoteTitle, newNoteText) {
        try {
            createNote(sessionStorage.UserToken, newNoteTitle, newNoteText, function (error) {
                if (error) {
                    alert(error.message)
                    return
                }

                home.section.removeChild(home.newNotePopUp.container)

                renderList()

            })
        } catch (error) {
            alert(error)
        }
    }
}

function renderHome() {
    try {
        retrieveUser(sessionStorage.UserToken, function (error, user) {
            if (error) {
                alert(error.message)

                return
            }

            home.setName(user.name)

            renderList(function () {
                document.body.append(home.container)
            })
        })
    } catch (error) {
        alert(error.message)
    }
}

function renderList(callback) {

    try {
        retrieveNotes(sessionStorage.UserToken, function (error, notes) {
            if (error) {
                alert(error.message)
                return
            }

            home.renderList(notes)

            if (callback)
                callback()
        })
    } catch (error) {
        alert(error.message)
    }
}


// Formulario y lógica actualizar password
home.onUpdateUserPass = function (oldPass, newPass, confirmNewPass) {

    let result = confirm('Are you sure to change password?')
    if (result) {
        try {
            updateUserPassword(sessionStorage.UserToken, oldPass, newPass, confirmNewPass, function (error) {
                if (error)
                    alert(error.message)
                else {
                    alert('Password updated succesfully')
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

}


// Formulario y lógica actualizar email
home.onUpdateUserEmail = function (newEmail) {
    let result = confirm('Are you sure to update Email?')
    if (result) {
        try {
            updateUserEmail(sessionStorage.UserToken, newEmail, function (error) {
                if (error)
                    alert(error.message)
                else {
                    alert('Email updated succesfully')
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

// CAPTURAMOS CON INPUT PARA ACTUALIZAR ESTADO DE LA CREACION DE PASSWORD
register.onPassInput(function (formPassword, div, pLowerCase, pUpperCase, pNumber, pSymbols, pLength) {

    if (formPassword.value.match(requiredPass)) {
        div.classList.add('off')
    } else {
        div.classList.remove('off')
    }
    // Comprobar minusculas
    if (formPassword.value.match(lowerCaseLettersRegex)) {
        pLowerCase.classList.add('off')
    } else {
        pLowerCase.classList.remove('off')
    }
    // Comprobar mayusculas
    if (formPassword.value.match(upperCaseLettersRegex)) {
        pUpperCase.classList.add('off')
    } else {
        pUpperCase.classList.remove('off')
    }
    // Comprobar numeros
    if (formPassword.value.match(numbersRegex)) {
        pNumber.classList.add('off')
    } else {
        pNumber.classList.remove('off')
    }
    // Compruebo la longitud
    if (formPassword.value.length >= 8 && formPassword.value.length <= 15) {
        pLength.classList.add('off')
    } else {
        pLength.classList.remove('off')
    }
    // Comprobar simbolos
    if (formPassword.value.match(symbolsRegex)) {
        pSymbols.classList.add('off')
    } else {
        pSymbols.classList.remove('off')
    }
})

// Logout
home.onLogout = function () {
    let result = confirm('Are you sure you want to logout?')
    if (result) {

        /* home.notesList.scroll(0, 0) */
        sessionStorage.removeItem('UserToken')
        document.body.append(login.container)
        document.body.removeChild(home.container)
    }
}