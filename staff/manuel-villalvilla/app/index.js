if (sessionStorage.token) {
    renderHome();
}

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

logoutButton.onclick = function() {
    delete sessionStorage.token

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}


menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    hiddenMenu.classList.toggle('voff')
})

profileLink.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    hiddenMenu.classList.add('voff')
    notasDisplay.classList.add('off')
    profileDisplay.classList.remove('off')
    plusButton.classList.add('off')
})

notesLink.addEventListener('click', () => {
    menuButton.classList.toggle('rotate')
    hiddenMenu.classList.add('voff')
    notasDisplay.classList.remove('off')
    profileDisplay.classList.add('off')
    plusButton.classList.remove('off')
})

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

