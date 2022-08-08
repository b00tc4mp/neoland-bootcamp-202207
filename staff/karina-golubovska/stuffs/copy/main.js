 const login = new Login
 const register = new  Register
 const home = new Home


 login.onLinkClick(function () {
    document.body.removeChild(login.container)
    document.body.append(register.container)
})
    
 login.onFormsubmit = (function (email , password) {
     

    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)
                return
            }
            loginForm.reset()

            sessionStorage.token = token

            document.body.removeChild(login.container)
            renderHome()
            })
            } ctc
    try {
      retrieveUser(sessionStorage.token, function (error, user) {
          if (error) {
              alert(error.message)
              return
             }
             home.setName(user.name)
             try {
                retrieveNotes(sessionStorage.token, function (error, notes) {
                    if (error) {
                        alert(error.message)
        
                        return
                    }

                    home.renderList(notes)

                    document.body.append(home.container)
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
})
home.onDeleteNoteClick = function(noteId) { // method overriding
    try {
        deleteNote(sessionStorage.token, noteId, error => {
            if (error) {
                alert(error.message)

                return
            }

            try {
                retrieveNotes(sessionStorage.token, function (error, notes) {
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
home.onUpdateNote = function(noteId, text) {
try {
         updateNote(_user.id, note.id, text.value, error => {
             if (error) {
                 alert(error.message)
                 return
             }
                 })
             } catch (error) {
                 alert(error.message)
             }
         }
         register.onLinkClick(function() {
            document.body.removeChild(register.container)
            document.body.append(login.container)
        })
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

document.body.append(login.container)


















            