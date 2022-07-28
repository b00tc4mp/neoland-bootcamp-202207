const loginPage = document.querySelector('.login-page');
const registerPage = document.querySelector('.register-page');
const homePage = document.querySelector('.home-page');
const profileDisplay = document.querySelector('.profile')
const notasDisplay = document.querySelector('.notas-display') 

// let _token;

// temp for UI
// loginPage.classList.add('off')
// homePage.classList.remove('off')

const registerLink = loginPage.querySelector('a');
const loginLink = registerPage.querySelector('a');

registerLink.onclick = function(event) {
    event.preventDefault();
    loginPage.classList.add('off');
    registerPage.classList.remove('off')
}

loginLink.onclick = function(event) {
    event.preventDefault();
    loginPage.classList.remove('off');
    registerPage.classList.add('off');
}

const loginForm = document.querySelector('.login-form');
loginForm.onsubmit = function(event) {
    event.preventDefault();

    const loginEmail = loginForm.email.value; // puedo acceder asi por el name del html
    const loginPassword = loginForm.password.value;
    try {
        authenticateUser(loginEmail, loginPassword, function(error, token) {
            if (error) { 
                alert(error.message);
                return;
            }

            loginForm.reset() // para borrar los datos del formulario cuando se envie

            // window.token = token
            sessionStorage.token = token

            renderHome()

            
        })
    }
    catch(error) {
        alert(error.message)
    }
}

function renderHome () {
    try {
        retrieveUser(sessionStorage.token, function(error, user) {
            if (error) {
                alert(error.message)
                return;
            } 

            loginPage.classList.add('off');
            const saludo = homePage.querySelector('.saludo');
            saludo.innerText = 'Hello, ' + user.name + '!';
            refreshList();
            homePage.classList.remove('off');

        })
    } catch(error) { 
        alert(error.message);
    }
}

const registerForm = document.querySelector('.register-form');

registerForm.onsubmit = function(event) {
    event.preventDefault();

    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    try {
        registerUser(name, email, password, function(error) {
            if (error) {
                alert(error.message);
                return;
            } else {
                registerForm.reset() // para borrar el formulario una vez que se envie
                registerPage.classList.add('off');
                loginPage.classList.remove('off');
            }
        })
    }
    catch(error) {
        alert(error.message);
    }
}

const plusButton = homePage.querySelector('.footer')
plusButton.onclick = function () {
    try {
        createNote(sessionStorage.token, error => {
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

// let _timeoutID

function refreshList() {
    try {
        retrieveNotes(sessionStorage.token, function(error, notes) {
            if (error) {
                alert(error.message)

                return
            }

            const list = homePage.querySelector('.list')
            list.innerText = '';

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('list__item-delete-button')
                deleteButton.innerText = 'x'
                deleteButton.onclick = function () {
                    try {
                        deleteNote(sessionStorage.token, note.id, error => {
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
                text.contentEditable = true
                text.classList.add('list__item-text')
                text.onkeyup = function () {
                    if (window.timeoutID) // con el objeto window puedo añadir variables globales
                        clearTimeout(window.timeoutID)
                    window.timeoutID = setTimeout(() => {
                        try {
                            updateNote(sessionStorage.token, note.id, text.innerText, error => {
                                if (error) {
                                    alert(error.message)
    
                                    return
                                }
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    }, 1000)
                }
                text.innerText = note.text

                item.append(deleteButton, text)

                list.append(item)
                
            })
        })
    } catch(error) {
        alert(error.message)
    }
}

if (sessionStorage.token) {
    renderHome();
}

const logoutButton = document.querySelector('.logout-button')
logoutButton.onclick = function() {
    delete sessionStorage.token

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

const hiddenMenu = document.querySelector('.hidden-menu')

const menuButton = document.querySelector('.menu')
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    hiddenMenu.classList.toggle('voff')
})


const profileLink = document.querySelector('.profile-link')
profileLink.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    hiddenMenu.classList.add('voff')
    notasDisplay.classList.add('off')
    profileDisplay.classList.remove('off')
    plusButton.classList.add('off')
})

const notesLink = document.querySelector('.notes-link')
notesLink.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    hiddenMenu.classList.add('voff')
    notasDisplay.classList.remove('off')
    profileDisplay.classList.add('off')
    plusButton.classList.remove('off')
})

const passwordForm = document.querySelector('.password-form')
passwordForm.onsubmit = function (event) {
    event.preventDefault()

    const currentPass = passwordForm.currentPassword.value
    const newPass = passwordForm.newPassword.value
    const repeatPass = passwordForm.repeatPassword.value
    
    try {
        updateUserPassword(sessionStorage.token, currentPass, newPass, repeatPass, error => {
            if(error) {
                alert(error.message)
                return
            }
            passwordForm.reset()
            alert('password changed successfully')

        })
    } catch(error) {
        alert(error.message)
    }
    
}

const newEmailForm = document.querySelector('.email-form')
newEmailForm.onsubmit = function (event) {
    event.preventDefault()

    const newEmail = newEmailForm.newEmail.value
    
    try {
        updateUserEmail(sessionStorage.token, newEmail, error => {
            if(error) {
                alert(error.message)
                return
            }
            newEmailForm.reset()
            alert('email changed successfully')

        })
    } catch(error) {
        alert(error.message)
    }
    
}

