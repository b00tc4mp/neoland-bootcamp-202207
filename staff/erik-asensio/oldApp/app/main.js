// -------------------------------------------------- PAGE DECLARATIONS --------------------------------------------------
const loginPage = document.querySelector(".page-login")
const registerPage = document.querySelector(".page-register")
const homePage = document.querySelector(".page-home1")
const hamburgerPage = document.querySelector(".page-hamburgerMenu")
const createNotePage = document.querySelector(".page-newNote")
const editPage = document.querySelector(".page-editNote")

let _token

// -------------------------------------------------- FUNCTIONS --------------------------------------------------

// -------------------------------------------------- REFRESH LIST --------------------------------------------------
function refreshList() {
    try {
        retrieveNotes(_token, function (error, notes) {
            if (error) {
                alert(error.message)
                return
            }
            homePage.classList.remove("off")
            // loginPage.classList.add("off")

            // const title = homePage.querySelector(".homeTitle")
            // title.innerText = "Hello " + user.name + "!"

            const list = homePage.querySelector('.list')
            list.innerHTML = ''

            notes.forEach(note => {

                const item = document.createElement('li')
                const editIcon = document.createElement('img')
                const deleteButton = document.createElement("button")

                editIcon.onclick = event => {
                    event.preventDefault()

                    homePage.classList.add("off")
                    editPage.classList.remove("off")
                }


                editIcon.src = "./img/editNoteButton.png"
                editIcon.width = "20px"
                editIcon.classList.add("editButtonIcon")
                deleteButton.classList.add("DeleteButtonIcon")
                deleteButton.innerText = "X"
                item.classList.add('list__item')

                item.innerText = note.text


                list.append(item)
                item.prepend(editIcon)
                item.prepend(deleteButton)

                // -------------------------------------------------- DELETE BUTTON --------------------------------------------------

                deleteButton.onclick = function () {
                    try {
                        deleteNote(_token, note.id, error => {
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

                // -------------------------------------------------- EDIT PAGE ------------------------------------------------------

                const editButton = document.getElementsByClassName("editButtonIcon")
                editButton.onclick = function (event) {
                    event.preventDefault()

                    homePage.classList.add("off")
                    editPage.classList.remove("off")

                    editNote(note.id, _token, function (error, editedNote) {
                        if (error) {
                            alert(error.message)
                        }
                        const editNoteText = document.querySelector(".editNoteText")
                        editNoteText.value = note.text
                        editPage.classList.remove("off")
                        homePage.classList.add("off")

                        const editedNoteForm = editPage.querySelector(".editedNoteForm")
                        editedNoteForm.onsubmit = function (event) {
                            event.preventDefault()

                            editPage.classList.add("off")
                            homePage.classList.remove("off")
                            const inputText = document.querySelector(".editedNoteText").value;
                            editedNote.text = inputText

                            refreshList()

                            return editedNote.text
                        }

                    })
                }
            })
        })
    } catch (error) {
        alert(error.message)
    }
}

// -------------------------------------------------- REGISTER PAGE --------------------------------------------------

const loginLink = registerPage.querySelector(".enlaceLogin")
loginLink.onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add("off")
    loginPage.classList.remove("off")
}

const registerForm = registerPage.querySelector(".form-register")
registerForm.onsubmit = function (event) {
    event.preventDefault()

    loginPage.classList.add("off")
    registerPage.classList.remove("off")

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)

                return
            }

            registerPage.classList.add("off")
            loginPage.classList.remove("off")
        })

    } catch (error) {
        alert(error.message)
    }
}

// -------------------------------------------------- LOGIN PAGE --------------------------------------------------

const registerLink = loginPage.querySelector(".enlaceRegistro")
registerLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add("off")
    registerPage.classList.remove("off")
}

const loginForm = loginPage.querySelector(".form-login")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    try {
        userValidation(email, password, function (error, token) {
            if (error) {
                alert(error.message)

                return
            }

            _token = token


            try {
                retrieveUser(_token, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }

                    loginPage.classList.add("off")

                    const title = homePage.querySelector(".homeTitle")
                    title.innerText = "Hello " + user.name + "!"

                    refreshList()
                    // -------------------------------------------------- HOME PAGE --------------------------------------------------

                    const hamburgerMenuIcon = homePage.querySelector(".hamburgerMenu-icon")
                    hamburgerMenuIcon.onclick = function (event) {
                        event.preventDefault()

                        homePage.classList.add("off")
                        hamburgerPage.classList.remove("off")
                    }

                    const logoutLink = hamburgerPage.querySelector(".enlaceLogout")
                    logoutLink.onclick = function (event) {
                        event.preventDefault()
                        delete sessionStorage.token

                        hamburgerPage.classList.add("off")
                        loginPage.classList.remove("off")
                    }

                    const newButton = homePage.querySelector(".addPost")
                    newButton.onclick = function (event) {
                        event.preventDefault()

                        createNote(token, function (error, newNote) {
                            if (error) {
                                alert(error.message)
                            }
                            const createNoteArea = document.querySelector(".newNoteText")
                            createNoteArea.value = newNote.text
                            createNotePage.classList.remove("off")
                            homePage.classList.add("off")
                            
                            const newNoteForm = createNotePage.querySelector(".newNoteForm")
                            newNoteForm.onsubmit = function (event) {
                                event.preventDefault()

                                editNote(_token, newNote.id, function (error, editedNote) {
                                    if (error) {
                                        alert(error.message)
                                    }
                                    const editNoteText = document.querySelector(".editNoteText")
                                    editNoteText.value = note.text
                                    editPage.classList.remove("off")
                                    homePage.classList.add("off")
            
                                    const editedNoteForm = editPage.querySelector(".editedNoteForm")
                                    editedNoteForm.onsubmit = function (event) {
                                        event.preventDefault()
            
                                        const inputText = document.querySelector(".editedNoteText").value;
                                        editedNote.text = inputText
                                        editPage.classList.add("off")
                                        homePage.classList.remove("off")
            
                                        refreshList()
            
                                        return editedNote.text
                                    }
            
                                })

                                return editedNote.text
                            }

                            return notes
                        })
                        
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


