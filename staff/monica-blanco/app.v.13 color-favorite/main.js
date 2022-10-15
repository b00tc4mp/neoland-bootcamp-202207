const loginPage = new LoginPage 
const registerPage = new RegisterPage
const homePage = new HomePage  

loginPage.onLinkClick(function(){
    document.body.removeChild (loginPage.container)
    document.body.append (RegisterPage.container)
})

loginPage.onFormSubmit(function(email, password) {
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)

                return
            }
            
            sessionStorage.token = token
            
            document.body.removeChild(loginPage.container)
            
            renderHome()           
        })
    } catch (error){
        alert (error.message)
    }
    loginPage.reset()
})

homePage.onDeleteNote = function(noteId) { // method overriding
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
//--Actualizar
homePage.onUpdateNote = function(noteId, text) {
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

homePage.onChangeNoteColor = function (notes, noteId, color) {
    try {
        changeNoteColor(sessionStorage.token, notes, noteId, color, function (error) {
            if (error)
                alert(error.message)
        })
    } catch (error) {
        alert(error.message)
    }
}

homePage.onLogoutButtonClick = function (){
    delete sessionStorage.token

    document.body.removeChild (homePage.container)
    document.body.append (loginPage.container)
}

homePage.onAddNote = function (){
    try {
        createNote (sessionStorage.token, error => {
            if (error){
                alert (error.message)

                return
            }

            renderList()
        })
    }catch (error){
        alert (error.message)
    }
}

homePage.onUpdatePassword = function(oldPassword, newPassword, newPasswordRepeat) {
    try {
        updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
            if (error) {
                alert(error.message)
                
                return
            }

            alert('Password updated')
        })
    } catch(error) {
        alert(error.message)
    }
}

registerPage.onLinkClick(function () {
    document.body.removeChild(registerPage.container)
    document.body.append(loginPage.container)
})

registerPage.onFormSubmit(function (name, email, password) {
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)

                return
            }
            
            document.body.removeChild(registerPage.container)
            document.body.append(loginPage.container)
        })
    } catch (error) {
        alert(error.message)
    }
    register.reset()
})

function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)

                return
            }

            homePage.setName(user.name)

            renderList(function() {
                document.body.append(homePage.container)
            })
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

            homePage.renderList(notes)

            if (callback)
                callback()
        })
    } catch (error) {
        alert(error.message)
    }
}

if (sessionStorage.token)
    renderHome()
else
    document.body.append(loginPage.container)
