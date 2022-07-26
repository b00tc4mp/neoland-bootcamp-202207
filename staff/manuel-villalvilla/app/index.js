const loginPage = document.querySelector('.login-page');
const registerPage = document.querySelector('.register-page');
const homePage = document.querySelector('.home-page');

let _user;

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
        authenticateUser(loginEmail, loginPassword, function(error) {
            if (error) { 
                alert(error.message);
                return;
            } 
            try {
                retrieveUser(loginEmail, function(error, user) {
                    if (error) {
                        alert(error.message)
                        return;
                    } 

                    _user = user;

                    loginPage.classList.add('off');
                    const saludo = homePage.querySelector('.saludo');
                    saludo.innerText = 'Hello, ' + user.name + '!';
                    refreshList();
                    homePage.classList.remove('off');
 
                })
            } catch(error) { 
                alert(error.message);
            }
        })
    }
    catch(error) {
        alert(error.message)
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
        createNote(_user.id, error => {
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

function refreshList() {
    try {
        retrieveNotes(_user.id, function(error, notes) {
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
                        deleteNote(_user.id, note.id, error => {
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
                    try {
                        updateNote(_user.id, note.id, text.innerText, error => {
                            if (error) {
                                alert(error.message)

                                return
                            }
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }
                text.innerHTML = note.text

                item.append(deleteButton, text)

                list.append(item)
                
            })
        })
    } catch(error) {
        alert(error.message)
    }
}