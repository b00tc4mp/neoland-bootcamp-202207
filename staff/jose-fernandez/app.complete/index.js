//hanburguesa transition
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav-home');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
});
// ===================================================================


const loginPage = document.querySelector('.login_page')
const registerPage = document.querySelector('.register_page')
const homePage = document.querySelector('.home_page')

// ==========================================================


// ===================================================================

// loginPage.classList.add('off')
// homePage.classList.remove('off')

const registerLink = loginPage.querySelector('.link-register')

registerLink.onclick = function (event) {
    event.preventDefault()

    //Oculto la pagina del login agregandole off a la clase ".login_page"
    loginPage.classList.add('off')
    //Muestro la pagina del register removiendo off a la clase ".register_page"
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.link-login')

loginLink.onclick = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    //Oculto la pagina del register agregandole off a la clase ".login_page"
    registerPage.classList.add('off')
    //Muestro la pagina del login removiendo off a la clase ".register_page"
    loginPage.classList.remove('off')
}

const btn__pluss = homePage.querySelector('.btn_plus')
const list__Notes = homePage.querySelector('.list')
const loginForm = loginPage.querySelector('.form')

//para recoger los datos que ponemos en los inputs usamos .onsubmit
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

            const messageTitle = homePage.querySelector(".messageTitle")

            messageTitle.innerText = " Hello " + user.name + " !"
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

    // try catch 
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)
                return
            }

            registerForm.reset()

            registerPage.classList.add("off")
            loginPage.classList.remove("off")
        })

    } catch (error) {
        alert(error.message)
    }
}



const updatePassword = homePage.querySelector('.formProfile')

updatePassword.onsubmit = function (event) {
    event.preventDefault()

    const oldPassword = updatePassword.oldPassword.value
    const newPassword = updatePassword.newPassword.value
    const repeatNewPassword = updatePassword.repeatNewPassword.value

    try {
        updateUserPassword(sessionStorage.token, oldPassword, newPassword, repeatNewPassword, function (error) {


        })
    } catch (error) {

    }


}





const createNoteForm = homePage.querySelector('.formcreateNote')

createNoteForm.onsubmit = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    // creo una constante y lo igualo al texto de mi textarea con name="newItemNote" ubicado en createNoteForm 
    const textFromTextarea = createNoteForm.newItemNote.value

    if (textFromTextarea !== "") {
        try {
            createNote(sessionStorage.token, textFromTextarea, error => {

                if (error) {
                    alert(error.message)
                    return
                }
                renderNotes()
            })
        } catch (error) {
            alert(error.message)
        }
    } else alert('Nota Vacia Descartada')

    createNoteForm.classList.add('off')
    list__Notes.classList.remove('off')
    btn__pluss.classList.remove('off')
    // poner el textarea de la newNote en Blanco
    document.getElementById("newNote").value = "";
}


btn__pluss.onclick = function () {
    //cancela la accion predeterminada del evento
    // event.preventDefault()
    list__Notes.classList.add('off')
    btn__pluss.classList.add('off')
    createNoteForm.classList.remove('off')

}

function renderNotes() {
    try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
            if (error) {
                alert(error.message)
                return
            }
            createNoteForm.classList.add('off')
            list__Notes.classList.remove('off')

            // headmainhome.classList.add('off')
            btn__pluss.classList.remove('off')

            const list = homePage.querySelector('.list')
            list.innerHTML = ""

            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const deleteButton = document.createElement('button')
                deleteButton.classList.add('btn__delete')
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

                const text = document.createElement('textarea')

                text.classList.add('list__item-text')

                text.onkeyup = function () {
                    if (window.updateNoteTimeoutId)
                        clearTimeout(window.updateNoteTimeoutId)

                    window.updateNoteTimeoutId = setTimeout(() => {
                        try {
                            updateNote(sessionStorage.token, note.id, text.value, error => {
                                if (error) {
                                    alert(error.message)
                                    return
                                }
                            })
                        } catch (error) {
                            alert(error.message)
                        }
                    }, 500)
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


design = homePage.querySelector('.design')
const navHome = homePage.querySelector(".nav-home")
const formDesign = homePage.querySelector(".formDesign")
const btnBack = homePage.querySelector(".btnBack")



btnBack.onclick = function () {
    formDesign.classList.add('off')
    formProfile.classList.add('off')
    list__Notes.classList.remove('off')
    btn__pluss.classList.remove('off')
}

design.onclick = function () {

    list__Notes.classList.add('off')
    navHome.classList.toggle('mostrar')
    btn__pluss.classList.add('off')
    createNoteForm.classList.add('off')
    formProfile.classList.add('off')
    formDesign.classList.remove('off')
}

const formProfile = homePage.querySelector(".formProfile")
profile = homePage.querySelector('.profile')

profile.onclick = function () {

    list__Notes.classList.add('off')
    navHome.classList.toggle('mostrar')
    btn__pluss.classList.add('off')
    createNoteForm.classList.add('off')
    formDesign.classList.add('off')
    formProfile.classList.remove('off')
}
// const textSmall=homePage.querySelector('.textSmall')
// const textNormal=homePage.querySelector('.textNormal')
// const textBig=homePage.querySelector('.textBig')



// textSmall.onsubmit=function(event){    
//     //cancela la accion predeterminada del evento
//     event.preventDefault()
//     document.querySelector('.newItem').style.fontSize=1+"rem"; 
//     document.querySelector('.list__item-text').style.fontSize=1+"rem";

//     // creo una constante y lo igualo al texto de mi textarea con name="newItemNote" ubicado en createNoteForm 
//     // const textFromTextarea = createNoteForm.newItemNote.value

//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }
// textNormal.onsubmit=function(event){
//     event.preventDefault()
//     document.querySelector('.newItem').style.fontSize=1.5+"rem"; 
//     document.querySelector('.list__item-text').style.fontSize=1.5+"rem";
//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }
// textBig.onsubmit=function(event){
//     event.preventDefault()

//     document.querySelector('.newItem').style.fontSize=2+"rem"; 
//     document.querySelector('.list__item-text').style.fontSize=2+"rem";
//     formConfig.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
// }

const link_home_login = homePage.querySelector('.link_home')
link_home_login.onclick = function () {

    formDesign.classList.add('off')
    list__Notes.classList.remove('off')
    btn__pluss.classList.remove('off')
    navHome.classList.toggle('mostrar')
}

if (sessionStorage.token)
    renderHome()

const logoutButton = homePage.querySelector('.btn_logout')

logoutButton.onclick = function () {
    delete sessionStorage.token

    homePage.classList.add('off')
    navHome.classList.toggle('mostrar')
    loginPage.classList.remove('off')
}