const login = new Login
const register = new Register
const home = new Home



/* if(sessionStorage.UserToken){
    renderHome()
} */


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

            try {
                retrieveUser(sessionStorage.UserToken, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }

                    // Guardo los datos del usuario
                    sessionStorage.setItem('UserStored', JSON.stringify(user))

                    home.setName(user.name)
                    try {
                        retrieveNotes(sessionStorage.UserToken, function (error, notes) {
                            if (error) {
                                alert(error.message)
                                return
                            }
                            home.renderList(notes)
                        })
                    } catch (error) {
                        alert(error.message)
                    }

                    setTimeout(() => {
                        document.body.removeChild(login.container)
                        document.body.append(home.container)
                    }, 300)

                })
            } catch (error) {
                alert(error.message)
            }

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

                try {
                    retrieveNotes(sessionStorage.UserToken, function (error, notes) {
                        if (error) {
                            alert(error.message)
                            return
                        }
                        home.renderList(notes)
                    })
                } catch (error) {
                    alert(error.message)
                }

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
document.body.append(login.container)

/* registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputName = registerForm.name.value
    const inputEmail = registerForm.email.value
    const inputPassword = registerForm.password.value


})
 */



/* createNoteButton.onclick = function (event) {
    event.preventDefault()
    const userToken = sessionStorage.UserToken

    let result = confirm('Are you sure to create a new note?')
    if (result) {
        const containerPopUp = document.querySelector('.containerPopUp')
        containerPopUp.classList.remove('off')

        const confirmNoteButton = document.querySelector('#confirmNewNoteButton')
        const newNoteTitle = document.querySelector('.newNoteInput__title')
        const newNoteText = document.querySelector('.newNoteInput__text')

        // Cancel creation
        const cancelButton = document.querySelector('#cancelNewNoteButton')
        cancelButton.onclick = function (event) {
            // Para prevenir que recargue la pagina
            event.preventDefault()
            const result = confirm('Are you sure to cancel?')

            if (result)
                containerPopUp.classList.add('off')
            else return
        }

        // Confirm creation
        confirmNoteButton.onclick = function (event) {
            event.preventDefault()
            try {
                createNote(userToken, newNoteTitle.textContent, newNoteText.textContent, function (error) {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    containerPopUp.classList.add('off')
                    newNoteText.textContent = ''
                    newNoteTitle.textContent = ''
                    refreshList()
                })
            } catch (error) {
                alert(error)
            }
        }
    }
} */


// Formulario y lógica actualizar password


/* updatePassForm.onsubmit = function (event) {
    let result = confirm('Are you sure to change password?')
    if (result) {
        event.preventDefault()
        const oldPassword = updatePassForm.oldPassword.value
        const newPassword = updatePassForm.newPassword.value
        const confirmNewPassword = updatePassForm.confirmNewPassword.value
        try {
            updateUserPassword(sessionStorage.UserToken, oldPassword, newPassword, confirmNewPassword, function (error) {
                if (error)
                    alert(error.message)
                else {
                    alert('Password updated succesfully')
                    updatePassForm.reset()
                }
            })
        } catch (error) {
            alert(error.message)
        }

    }
} */

// Formulario y lógica actualizar email

/* updateEmailForm.onsubmit = function (event) {
    let result = confirm('Are you sure to update Email?')
    if (result) {
        event.preventDefault()
        const newEmail = updateEmailForm.newEmail.value
        try {
            updateUserEmail(sessionStorage.UserToken, newEmail, function (error) {
                if (error)
                    alert(error.message)
                else {
                    alert('Email updated succesfully')
                    updateEmailForm.reset()
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }

} */
// CAPTURAMOS CON INPUT PARA ACTUALIZAR ESTADO DE LA CREACION DE PASSWORD
register.onPassInput(function(formPassword, div, pLowerCase, pUpperCase, pNumber, pSymbols, pLength) {
    
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

// Home

/* homeIcon.addEventListener('click', function () {

    home__profileContainer.classList.add('off')
    home__notesContainer.classList.remove('off')
    createNoteButton.classList.remove('off')
    notesList.scroll({ 'top': 0, 'behavior': "smooth" })
}) */
// Profile

/* profileLink.addEventListener('click', function () {
    home__notesContainer.classList.add('off')
    createNoteButton.classList.add('off')
    home__profileContainer.classList.remove('off')
}) */
// Logout

/* logoutLink.addEventListener('click', function () {
    let result = confirm('Are you sure you want to logout?')
    if (result) {
        notesList.scroll(0, 0)
        sessionStorage.removeItem('UserToken')
        loginPage.classList.remove('off')
        homePage.classList.add('off')
        home__notesContainer.classList.remove('off')
        createNoteButton.classList.remove('off')
        home__profileContainer.classList.add('off')

    }
}) */


// Funcion activar rotación DIVS menú y mostrar desplegable


/* menuContainer.addEventListener('click', function () {
    menuContainer.classList.toggle("change")
    dropdown.classList.toggle("off")
    dropdown.classList.toggle("displayBlock")
}) */

