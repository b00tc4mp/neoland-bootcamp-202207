// ===================================================================

//convertir de string a dom: creando un elemento temporal e insertarle el elemento html, luego igualo el elemtno al firtschild

//======================================================================

const loginPage = new LoginPage
const registerPage = new RegisterPage
const homePage = new HomePage

loginPage.onLinkClick(function () {
    document.body.removeChild(loginPage.container)
    document.body.append(registerPage.container)
})

//para recoger los datos que ponemos en los inputs usamos .onsubmit
loginPage.onFormSubmit(function (email,password) {
    
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)
                return
            }
            loginPage.reset()
            sessionStorage.token = token
            document.body.removeChild(loginPage.container)
           
            renderHome()

        })
    } catch (error) {
        alert(error.message)
    }
})

homePage.onDeleteNote = function(noteId){//method overriding
    try{
        deleteNote(sessionStorage.token,noteId,error =>{
            if(error){
                alert(error.message)
                return
            }

            try{
                retrieveNotes(sessionStorage.token,function(error,notes){
                    if(error){
                        alert(error.message)
                        return
                    }
                    homePage.renderList(notes)
                })
            }catch(error){
                alert(error.message)
            }
        })
    }catch(error){
        alert(error.message)
    }
}

homePage.onUpdateNote = function(noteId,text){
    try{
        updateNote(sessionStorage.token,noteId,text,error =>{
            if(error){
                alert(error.message)
                return
            }
        })
    }catch(error){
        alert(error.message)
    }
}

homePage.onLogoutButtonClick = function(){
    delete sessionStorage.token

    document.body.removeChild(homePage.container)
    document.body.append(loginPage.container)
}

homePage.onFormCreateNote(function(textFromTextarea) {
    try {
        createNote(sessionStorage.token, textFromTextarea, error => {
            if (error) {
                alert(error.message)
                
                return
            }
            // renderHome()
            renderList()
        })

    } catch (error) {
        alert(error.message)
    }
})
    
homePage.onUpdatePassword = function(oldPassword,newPassword,newPasswordRepeat){
    try {
        updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, error => {
            if (error) {
                alert(error.message)
                
                return
            }

            alert('Password updated')
            
        })
    } catch(error) {
        alert(error.message)
    }
    // homePage.updatePasswordForm.reset()
}


registerPage.onLinkClick(function () {
    document.body.removeChild(registerPage.container)
    document.body.append(loginPage.container)
})

registerPage.onFormSubmit(function (name,email,password) {
    // try catch 
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)
                return
            }

            registerPage.reset()

            document.body.removeChild(registerPage.container)
            document.body.append(loginPage.container)
        })

    } catch (error) {
        alert(error.message)
    }
})

function renderHome(){
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)
                return
            }
            homePage.setName(user.name)
            
            renderList(function(){
                document.body.append(homePage.container)
            })
            
        })
    } catch (error) {
        alert(error.message)
    }
}

function renderList(callback){
    try {
        retrieveNotes(sessionStorage.token,function(error,notes){
            if(error){
                alert(error.message)
                return
            }
            homePage.renderList(notes)

            if(callback)
            callback()

        })
    } catch (error) {
        alert(error.message)
    }
}

if(sessionStorage.token)
    renderHome()
else
    document.body.append(loginPage.container)

// homePage.createNoteForm.onsubmit = function (event) {
//     event.preventDefault()

//     // creo una constante y lo igualo al texto de mi textarea con name="newItemNote" ubicado en createNoteForm 
//     const textFromTextarea = createNoteForm.newItemNote.value

//     if (textFromTextarea !== "") {
//         try {
//             createNote(sessionStorage.token, textFromTextarea, error => {

//                 if (error) {
//                     alert(error.message)
//                     return
//                 }
//                 renderList()
//             })
//         } catch (error) {
//             alert(error.message)
//         }
//     } else alert('Nota Vacia Descartada')

//     // createNoteForm.classList.add('off')
//     // list__Notes.classList.remove('off')
//     // btn__pluss.classList.remove('off')
//     // poner el textarea de la newNote en Blanco
//     document.getElementById("newNote").value = "";
// }


// btn__pluss.onclick = function () {
//     //cancela la accion predeterminada del evento
//     // event.preventDefault()
//     list__Notes.classList.add('off')
//     btn__pluss.classList.add('off')
//     createNoteForm.classList.remove('off')

// }




// if (sessionStorage.token)
//     renderHome()




// //====================Menu NAV HAMBURGUER ===============================

// link_home_login.onclick = function () {
    
//     btnMenu.classList.remove('off')
//     btn_close.classList.add('off')
//     formSettings.classList.add('off')
//     formDesign.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
//     nav.classList.remove('mostrar')
// }

// btnBack.onclick = function () {
//     btnMenu.classList.remove('off')
//     btn_close.classList.add('off')
//     formSettings.classList.add('off')
//     formDesign.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
//     nav.classList.remove('mostrar')
// }

// updatePassword.onsubmit = function (event) {
//     event.preventDefault()

//     const oldPassword = updatePassword.oldPassword.value
//     const newPassword = updatePassword.newPassword.value
//     const newPasswordRepeat = updatePassword.newPasswordRepeat.value

//     try {
//         updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, function (error) {
//             if(error){
//                 alert(error.message)
//                 return
//             }
//         })
//     } catch (error) {
//         alert(error.message)
//     }
//     updatePassword.reset()
// }

// updateEmail.onsubmit = function (event) {
//     event.preventDefault()

//     const email = loginForm.email.value
//     const newEmail = updatePassword.newEmail.value

//     try {
//         updateUserEmail(sessionStorage.token, newEmail, function (error) {
//             if(error){
//                 alert(error.message)
//                 return
//             }
//             const messageEmail = homePage.querySelector(".messageEmail")
//             messageEmail.innerText =  email
//         })
//     } catch (error) {
//         alert(error.message)
//     }
//     updateEmail.reset()
// }

// design.onclick = function () {
//     btnMenu.classList.remove('off')
//     btn_close.classList.toggle('off')
//     list__Notes.classList.add('off')
//     nav.classList.toggle('mostrar')
//     btn__pluss.classList.add('off')
//     createNoteForm.classList.add('off')
//     formSettings.classList.add('off')
//     formDesign.classList.remove('off')
// }


// settings.onclick = function () {
//     btn_close.classList.add('off')
//     btnMenu.classList.remove('off')
//     list__Notes.classList.add('off')
//     nav.classList.toggle('mostrar')
//     btn__pluss.classList.add('off')
//     createNoteForm.classList.add('off')
//     formDesign.classList.add('off')
//     formSettings.classList.remove('off')
// }
// logoutButton.onclick = function () {
//     delete sessionStorage.token
//     btn_close.classList.toggle('off')
//     homePage.classList.add('off')
//     nav.classList.remove('off')
//     nav.classList.toggle('mostrar')
//     loginPage.classList.remove('off')
// }
// //==================================================================================

// // const textSmall=homePage.querySelector('.textSmall')
// // const textNormal=homePage.querySelector('.textNormal')
// // const textBig=homePage.querySelector('.textBig')



// // textSmall.onsubmit=function(event){    
// //     //cancela la accion predeterminada del evento
// //     event.preventDefault()
// //     document.querySelector('.newItem').style.fontSize=1+"rem"; 
// //     document.querySelector('.list__item-text').style.fontSize=1+"rem";

// //     // creo una constante y lo igualo al texto de mi textarea con name="newItemNote" ubicado en createNoteForm 
// //     // const textFromTextarea = createNoteForm.newItemNote.value

// //     formConfig.classList.add('off')
// //     list__Notes.classList.remove('off')
// //     btn__pluss.classList.remove('off')
// // }
// // textNormal.onsubmit=function(event){
// //     event.preventDefault()
// //     document.querySelector('.newItem').style.fontSize=1.5+"rem"; 
// //     document.querySelector('.list__item-text').style.fontSize=1.5+"rem";
// //     formConfig.classList.add('off')
// //     list__Notes.classList.remove('off')
// //     btn__pluss.classList.remove('off')
// // }
// // textBig.onsubmit=function(event){
// //     event.preventDefault()

// //     document.querySelector('.newItem').style.fontSize=2+"rem"; 
// //     document.querySelector('.list__item-text').style.fontSize=2+"rem";
// //     formConfig.classList.add('off')
// //     list__Notes.classList.remove('off')
// //     btn__pluss.classList.remove('off')
// // }




