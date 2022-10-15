const loginPage = document.querySelector('.login-page')
const registerPage = document.querySelector('.register-page')
const homePage = document.querySelector('.home-page')
const list = homePage.querySelector('.list')

// let _token
// temp (for ui design purposes)
// loginPage.classList.add('off')
// homePage.classList.remove('off')

const registerLink = loginPage.querySelector('.anchor')
registerLink.onclick = function (event) {
    event.preventDefault()
    //loginPage.classList.toggle ('off')
    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.anchor')
loginLink.onclick = function (event) {
    event.preventDefault()
    
    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}

const loginForm = loginPage.querySelector('.form')
loginForm.onsubmit = function (event) {
    event.preventDefault()
    
    const email = loginForm.email.value
    const password = loginForm.password.value
    
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)
                
                return
            }
            
            // _token = token
            loginForm.reset()
            
            sessionStorage.token = token
            
            renderHome()
        })
    } catch (error) {
        alert(error.message)
    }
}



function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)
                
                return
            }
            
            loginPage.classList.add('off')
            
            const title = homePage.querySelector('.title')
            
            title.innerText = 'Hello ' + user.name + '!!!'
            
            renderNotes()
            
            homePage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}

const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()
    
    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value
    
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)
                
                return
            }
            registerForm.reset()
            
            registerPage.classList.add('off')
            loginPage.classList.remove('off')
        })
    } catch (error) {
        alert(error.message)
    }
}

const plusButton = homePage.querySelector('.add-button')
plusButton.onclick = function () {
    try {
        createNote(sessionStorage.token, error => {
            if (error) {
                alert(error.message)
                
                return
            }
            renderNotes()
        })
    } catch (error) {
        alert(error.message)
    }
}

function renderNotes() {
    try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
            if (error) {
                alert(error.message)
                
                return
            }
            list.innerHTML = ''
            
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
                            
                            renderNotes()
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }
                const text = document.createElement('p')
                text.contentEditable = true
                text.classList.add('list__item-text')
                text.onkeyup = function () {
                    if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)
                    
                    window.updateNoteTimeoutId = setTimeout(() => {
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
    } catch (error) {
        alert(error.message)
    }
}

if (sessionStorage.token)
renderHome()
// ----------------------------------------------------------------------//
const listNotes = homePage.querySelector('.list')
const formProfile = homePage.querySelector ('.form-profile')

const helpButton = homePage.querySelector ('.help-button')
const settingsButton = homePage.querySelector('.settings-button')
const burguerButton = homePage.querySelector('.burguer-button')
burguerButton.onclick = function () {
    returnButton.classList.remove('off')
    profileButton.classList.remove('off')
    settingsButton.classList.remove('off')
    helpButton.classList.remove('off')
    burguerButton.classList.add ('off')
}

const returnButton = homePage.querySelector ('.return-button')
returnButton.onclick = function (){
    profileButton.classList.add ('off')
    returnButton.classList.add ('off')
    settingsButton.classList.add('off')
    helpButton.classList.add('off')
    burguerButton.classList.remove ('off')
}

const profileButton = document.querySelector('.profile-button')
profileButton.onclick = function (){
    listNotes.classList.add('off')
    plusButton.classList.add('off')
    returnButton.classList.add ('off')
    profileButton.classList.add ('off')
    settingsButton.classList.add('off')
    helpButton.classList.add('off')
    formProfile.classList.remove('off') 
    burguerButton.classList.add ('off') 

}

const logoutButton = document.querySelector('.logout-button')
    logoutButton.onclick = function () {
        delete sessionStorage.token
        
        homePage.classList.add('off')
        loginPage.classList.remove('off')
    }


// const burguerButton = homePage.querySelector('.burguer-button')
// burguerButton.onclick = function () {
//     if (!returnButton.classList.contains('off'))
//     returnButton.classList.add('off')
//     else
//     returnButton.classList.remove('off')
//     logoutButton.classList.remove('off')
//     profileButton.classList.remove('off')
// }

// const returnButton = document.querySelector('.return-button')
// returnButton.onclick = function () {
//     if(!burguerButton.classList.contains('off'))
//     returnButton.classList.add ('off')
//     else
//     homePage.classList.add('off')
//     listNotes.classList.remove ('off')
//     burguerButton.classList.remove('off')
    
// }




