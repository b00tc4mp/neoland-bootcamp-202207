const login = new Login
const register = new Register
const home = new Home

login.onLinkClick(function () {
    document.body.removeChild(login.container)
    document.body.append(register.container)
})

login.onFormSubmit(function (email, password) {
    try {
        debugger
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)

                return
            }

            login.reset()

            sessionStorage.token = token

            document.body.removeChild(login.container)
debugger
            try {
                retrieveUser(sessionStorage.token, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }
debugger
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
            
            register.reset()
            
            document.body.removeChild(reset.container)
            document.body.append(login.container)

        })
    } catch (error) {
        alert(error.message)
    }
})

document.body.append(login.container)

// profileButton.onclick = function () {

//     notesPage.classList.add('off')
//     homeFooter.classList.add('off')
//     profileButton.classList.add('off')
//     updatePage.classList.remove('off')
//     homeButton.classList.remove('off')
// }

// homeButton.onclick = function () {

//     updatePage.classList.add('off')
//     homeButton.classList.add('off')
//     notesPage.classList.remove('off')
//     homeFooter.classList.remove('off')
//     profileButton.classList.remove('off')
// }



// menuButton.onclick = function () {

//     menuOptions.classList.remove('off')
//     menuButton.classList.add('off')
// }

// closeButton.onclick = function () {

//     menuButton.classList.remove('off')
//     menuOptions.classList.add('off')

// }

// updateForm.onsubmit = function (event) {
//     event.preventDefault()

//     const oldPass = updateForm.oldpassword.value
//     const newPass = updateForm.newpassword.value
//     const newPass2 = updateForm.newpassword2.value

//     try {
//         updatePassword(sessionStorage.token, oldPass, newPass, newPass2, function (error) {
//             if (error) {
//                 alert(error.message)

//                 return
//             }

//             updatePage.classList.add('off')
//             notesPage.classList.remove('off')
//             renderList()
//         })
//     } catch (error) {
//         alert(error.message)
//     }

// }

// if (sessionStorage.token)
//     renderHome()


// logoutButton.onclick = function () {
//     delete sessionStorage.token

//     homePage.classList.add('off')
//     loginPage.classList.remove('off')
// }

