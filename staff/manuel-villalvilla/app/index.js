const login = new Login 
const register = new Register 
const home = new Home


register.onLinkClick(function() {
    document.body.removeChild(register.container)
    document.body.append(login.container)
})



login.onLinkClick(function() {
    document.body.removeChild(login.container)
    document.body.append(register.container)
})


login.onFormSubmit(function(email, password) {
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)

                return
            }

            login.reset()

            sessionStorage.token = token

            document.body.removeChild(login.container)
            
            renderHome()
        })
    } catch (error) {
        alert(error.message)
    }
})



function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)

                return
            }

            home.setName(user.name)

            renderList(() => {
                document.body.append(home.container)
            })

            
        })
    } catch (error) {
        alert(error.message)
    }
}

home.onDeleteNoteClick = function(noteId) { // method overriding
    try {
        deleteNote(sessionStorage.token, noteId, error => {
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

home.onUpdateNote = function(noteId, text) {
    try {
        updateNote(sessionStorage.token, noteId, text, error => {
            if (error) {
                alert(error.message)

                return
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

register.onFormSubmit(function(name, email, password) {
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            register.reset()

            document.body.removeChild(register.container)
            document.body.append(login.container)
        })
    } catch (error) {
        alert(error.message)
    }
})

home.onAddNote = function () {
    try {
        createNote(sessionStorage.token, error => {
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

function renderList(callback) {
    try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
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

home.onLogout = function () {
    delete sessionStorage.token

    document.body.removeChild(home.container)
    document.body.append(login.container)
}

home.updatePassword(function (currentPass, newPass, repeatPass) {
    try {
        updateUserPassword(sessionStorage.token, currentPass, newPass, repeatPass, error => {
            if(error) {
                alert(error.message)
                return
            }
            home.resetPasswordForm() 
            alert('password changed successfully')

        })
    } catch(error) {
        alert(error.message)
    }
})

home.updateEmail(function (newEmail) {
    try {
        updateUserEmail(sessionStorage.token, newEmail, error => {
            if(error) {
                alert(error.message)
                return
            }
            home.resetEmailForm()
            alert('email changed successfully')

        })
    } catch(error) {
        alert(error.message)
    }
    
})

if (sessionStorage.token) {
    renderHome();
} else {
    document.body.append(login.container)
}

