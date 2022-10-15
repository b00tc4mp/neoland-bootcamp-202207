const  login = new Login 
const register = new Register
const home = new Home 

login.onLinkClick(function(){
    document.body.removeChild (login.container)
    document.body.append (register.container)
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
    } catch (error){
        alert (error.message)
    }
})


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

home.onLogout = function (){
    delete sessionStorage.token

    document.body.removeChild (home.container)
    document.body.append (login.container)
}

home.onAddNote = function (){
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

function renderHome() {
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)

                return
            }

            home.setName(user.name)

            renderList(function() {
                document.body.append(home.container)
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

            home.renderList(notes)

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
    document.body.append(login.container)




// const registerLink = loginPage.querySelector('.anchor')
// const loginLink = registerPage.querySelector('.anchor')

// const loginForm = loginPage.querySelector('.form')
// const registerForm = registerPage.querySelector('.form')

// const listPanel = document.querySelector('.list-panel')
// const menuPanel = document.querySelector('.menu-panel')
// const settingsPanel = document.querySelector('.settings-panel')

// const addButton = homePage.querySelector('.add-button')
// const logoutButton = document.querySelector('.logout-button')
// const menuButton = document.querySelector('.menu-button')
// const closeButton = document.querySelector('.close-button')
// const settingsButton = document.querySelector('.settings-button')


    
// // logoutButton.onclick = function() {
// //     delete sessionStorage.token
// //     closeButton.click()
// //     settingsPanel.classList.add('off')
// //     listPanel.classList.remove('off')
// //     homePage.classList.add('off')
// //     loginPage.classList.remove('off')
// // }
// // menuButton.addEventListener('click', function() {   
// // })

// menuButton.onclick = function() {
//     menuButton.classList.add('off')
//     closeButton.classList.remove('off')
//     menu.classList.remove('off')
// }

// closeButton.onclick = function() {
//     closeButton.classList.add('off')
//     menuPanel.classList.add('off')
//     menuButton.classList.remove('off')
// }

// settingsButton.onclick = function() {
//     closeButton.click()

//     listPanel.classList.add('off')
//     addButton.classList.add('off')
//     settingsPanel.classList.remove('off')
// }



