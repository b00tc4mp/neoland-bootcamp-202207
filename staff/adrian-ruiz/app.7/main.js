



if(sessionStorage.UserToken){
    renderHome()
}
registerLink.addEventListener("click", function (event) {
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
})

loginLink.addEventListener("click", function (event) {
    event.preventDefault()

    loginPage.classList.remove('off')
    registerPage.classList.add('off')


})

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputEmail = loginForm.email.value
    const inputPassword = loginForm.password.value
    // Cambiar todo lo que accedamos por loginForm por -> event.target.email.value...
    try {
        authenticateUser(inputEmail, inputPassword, function (error, token) {
            if (error) {
                alert(error.message)
                return
            }
            // Guardo el token del usuario
            sessionStorage.setItem('UserToken', token)
            renderHome()
        })
    } catch (error) {
        alert(error.message)
    }
    loginForm.reset()
})

function renderHome(){
    try {
        retrieveUser(sessionStorage.UserToken, function (error, user) {
            if (error) {
                alert(error.message)
                return
            }

            // Guardo los datos del usuario
            sessionStorage.setItem('UserStored', JSON.stringify(user))
            const headerTitle = document.getElementById('headerTitle')
            headerTitle.textContent = `Hello, ${user.name}`

            refreshList()
            setTimeout(() => {
                homePage.classList.remove('off')
                loginPage.classList.add('off')
            }, 300)

        })
    } catch (error) {
        alert(error.message)
    }
}
registerForm.addEventListener('submit', function (event) {
    event.preventDefault()

    const inputName = registerForm.name.value
    const inputEmail = registerForm.email.value
    const inputPassword = registerForm.password.value

    try {
        registerUser(inputName, inputEmail, inputPassword, function (error) {

            if (error) {
                alert(error.message)
                return
            }

            loginPage.classList.remove('off')
            registerPage.classList.add('off')
        })
    } catch (error) {
        alert(error)

    }
    registerForm.reset()
})



createNoteButton.onclick = function (event) {
    event.preventDefault()
    const userToken = sessionStorage.UserToken

    let result = confirm('Are you sure to create a new note?')
    if (result) {
        const containerPopUp = document.querySelector('.containerPopUp')
        containerPopUp.classList.remove('off')

        const confirmNoteButton = document.querySelector('#confirmNewNoteButton')
        const newNoteTitle = document.querySelector('.newNoteInput__title')
        const newNoteText = document.querySelector('.newNoteInput__text')

        // Cancel creation
        const cancelButton = document.querySelector('#cancelNewNoteButton')
        cancelButton.onclick = function (event) {
            // Para prevenir que recargue la pagina
            event.preventDefault()
            const result = confirm('Are you sure to cancel?')

            if (result)
                containerPopUp.classList.add('off')
            else return
        }

        // Confirm creation
        confirmNoteButton.onclick = function (event) {
            event.preventDefault()
            try {
                createNote(userToken, newNoteTitle.textContent, newNoteText.textContent, function (error) {
                    if (error) {
                        alert(error.message)
                        return
                    }
                    containerPopUp.classList.add('off')
                    newNoteText.textContent = ''
                    newNoteTitle.textContent = ''
                    refreshList()
                })
            } catch (error) {
                alert(error)
            }
        }
    }
}

function refreshList() {
    const token = sessionStorage.UserToken
    try {
        retrieveNotes(token, function (error, userNotes) {
            if (error) {
                alert(error.message)
                return
            }
            
            notesList.innerHTML = ''
            userNotes.reverse().forEach(note =>{
                const container = document.createElement('li')
                container.classList.add('note')
                container.style.backgroundColor = note.color
                const deleteButton = document.createElement('div')
                deleteButton.classList.add('deleteNoteButton')
                deleteButton.textContent = '✖'
                const elementTitle = document.createElement('div')
                elementTitle.classList.add('noteTitle')
                elementTitle.contentEditable = true
                const elementText = document.createElement('div')
                elementText.classList.add('noteText')
                elementText.contentEditable = true


                deleteButton.onclick = function () {
                    let result = confirm('Are you sure to delete that note?')
                    if (result) {
                        try {
                            deleteNote(token, note.id, error => {
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

                }
                
                container.onkeyup = function () {
                    if(window.timeOutId)
                        clearTimeout(window.timeOutId)
                    
                     window.timeOutId = setTimeout(function(){
                    
                            try {
                                updateNote(token, note.id, elementTitle.textContent, elementText.textContent, error => {
                                    if (error) {
                                        alert(error.message)
                                        return
                                    }
                                })
                            
                            } catch (error) {
                                alert(error.message)
                                refreshList()
                            }
                    },500)
                }
                
                //Botones cambio de color
                const changeColorContainer = document.createElement('div')
                changeColorContainer.classList.add('changeNoteColorContainer')
                const changeBlue = document.createElement('div')
                changeBlue.classList.add('changeNoteBlue')
                changeBlue.onclick = function(){
                    container.style.backgroundColor = 'blue'
                    try{
                        changeNoteColor(sessionStorage.UserToken, userNotes, note.id, 'blue', function(){
                            if(error)
                                alert(error.message)
                        })
                    }catch(error){
                        alert(error.message)
                    }
                }
                const changeRed = document.createElement('div')
                changeRed.classList.add('changeNoteRed')
                changeRed.onclick = function(){
                    container.style.backgroundColor = 'red'
                    try{
                        changeNoteColor(sessionStorage.UserToken, userNotes, note.id, 'red', function(){
                            if(error)
                                alert(error.message)
                        })
                    }catch(error){
                        alert(error.message)
                    }
                }
                const changeGreen = document.createElement('div')
                changeGreen.classList.add('changeNoteGreen')
                changeGreen.onclick = function(){
                    container.style.backgroundColor = 'green'
                    try{
                        changeNoteColor(sessionStorage.UserToken, userNotes, note.id, 'green', function(){
                            if(error)
                                alert(error.message)
                        })
                    }catch(error){
                        alert(error.message)
                    }
                }
                const changeOrange = document.createElement('div')
                changeOrange.classList.add('changeNoteOrange')
                changeOrange.onclick = function(){
                    container.style.backgroundColor = 'orange'
                    try{
                        changeNoteColor(sessionStorage.UserToken, userNotes, note.id, 'orange', function(){
                            if(error)
                                alert(error.message)
                        })
                    }catch(error){
                        alert(error.message)
                    }
                }
                const changePurple = document.createElement('div')
                changePurple.classList.add('changeNotePurple')
                changePurple.onclick = function(){
                    container.style.backgroundColor = '#7d19c4'
                    try{
                        changeNoteColor(sessionStorage.UserToken, userNotes, note.id, '#7d19c4', function(){
                            if(error)
                                alert(error.message)
                        })
                    }catch(error){
                        alert(error.message)
                    }
                }
                const changeGrey = document.createElement('div')
                changeGrey.classList.add('changeNoteGrey')
                changeGrey.onclick = function(){
                    container.style.backgroundColor = 'grey'
                    try{
                        changeNoteColor(sessionStorage.UserToken, userNotes, note.id, 'grey', function(){
                            if(error)
                                alert(error.message)
                        })
                    }catch(error){
                        alert(error.message)
                    }
                }
                changeColorContainer.append(changeBlue,changeRed,changeGreen, changeOrange,changePurple,changeGrey)

                elementTitle.textContent = note.title
                elementText.textContent = note.text
                container.append(deleteButton, elementTitle, elementText,changeColorContainer)
                notesList.append(container)
            })
        })
    } catch (error) {
        alert(error.message)
    }
}

// Formulario y lógica actualizar password


updatePassForm.onsubmit = function(event){
    let result = confirm('Are you sure to change password?')
    if(result){
        event.preventDefault()
        const oldPassword = updatePassForm.oldPassword.value
        const newPassword = updatePassForm.newPassword.value
        const confirmNewPassword = updatePassForm.confirmNewPassword.value
        try{
            updateUserPassword(sessionStorage.UserToken, oldPassword, newPassword, confirmNewPassword, function(error){
                if(error)
                alert(error.message)
            else{
                alert('Password updated succesfully')
                updatePassForm.reset()
            }                
        })
        }catch(error){
            alert(error.message)
        }
            
    }
}

// Formulario y lógica actualizar email

updateEmailForm.onsubmit = function(event){
    let result = confirm('Are you sure to update Email?')
    if(result){
        event.preventDefault()
        const newEmail = updateEmailForm.newEmail.value
        try{
            updateUserEmail(sessionStorage.UserToken, newEmail, function(error){
                if(error)
                    alert(error.message)
                else{
                    alert('Email updated succesfully')
                    updateEmailForm.reset()
                }
            })
        }catch(error){
            alert(error.message)
        } 
    }
    
}
// CAPTURAMOS CON INPUT PARA ACTUALIZAR ESTADO DE LA CREACION DE PASSWORD


registerForm.password.addEventListener("input", checkPassword)
const span = document.querySelector('.passSpan')
function checkPassword() {
    if (registerForm.password.value.match(requiredPass)) {
        span.classList.add('off')
    } else {
        span.classList.remove('off')
    }
    // Comprobar minusculas
    if (registerForm.password.value.match(lowerCaseLettersRegex)) {
        pLowerCase.classList.add('off')
    } else {
        pLowerCase.classList.remove('off')
    }
    // Comprobar mayusculas
    if (registerForm.password.value.match(upperCaseLettersRegex)) {
        pUpperCase.classList.add('off')
    } else {
        pUpperCase.classList.remove('off')
    }
    // Comprobar numeros
    if (registerForm.password.value.match(numbersRegex)) {
        pNumber.classList.add('off')
    } else {
        pNumber.classList.remove('off')
    }
    // Compruebo la longitud
    if (registerForm.password.value.length >= 8 && registerForm.password.value.length <= 15) {
        pLength.classList.add('off')
    } else {
        pLength.classList.remove('off')
    }
    // Comprobar simbolos
    if (registerForm.password.value.match(symbolsRegex)) {
        pSymbols.classList.add('off')
    } else {
        pSymbols.classList.remove('off')
    }
}

// Home

homeIcon.addEventListener('click', function(){

    home__profileContainer.classList.add('off')
    home__notesContainer.classList.remove('off')
    createNoteButton.classList.remove('off')
    notesList.scroll({'top': 0,'behavior': "smooth"})
})
// Profile 

profileLink.addEventListener('click', function () {
    home__notesContainer.classList.add('off')
    createNoteButton.classList.add('off')
    home__profileContainer.classList.remove('off')
})
// Logout

logoutLink.addEventListener('click', function () {
    let result = confirm('Are you sure you want to logout?')
    if (result) {
        notesList.scroll(0,0)
        sessionStorage.removeItem('UserToken')
        loginPage.classList.remove('off')
        homePage.classList.add('off')
        home__notesContainer.classList.remove('off')
        createNoteButton.classList.remove('off')
        home__profileContainer.classList.add('off')
        
    }
})


// Funcion activar rotación DIVS menú y mostrar desplegable


menuContainer.addEventListener('click', function () {
    menuContainer.classList.toggle("change")
    dropdown.classList.toggle("off")
    dropdown.classList.toggle("displayBlock")
})