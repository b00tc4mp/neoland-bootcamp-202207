//hanburguesa transition

// btnMenu.addEventListener('click', function () {
//     nav.classList.toggle('mostrar');
//     // agregar btn close y borrar la hamburguesa
//     btn_close.classList.remove("off")
//     btnMenu.classList.add("off")
// });
// btn_close.addEventListener('click', function () {
//     nav.classList.toggle('mostrar');
//     // agregar btn close y borrar la hamburguesa
//     btn_close.classList.add("off")
//     btnMenu.classList.remove("off")
// });
// ===================================================================

//convertir de string a dom: creando un elemento temporal e insertarle el elemento html, luego igualo el elemtno al firtschild

//======================================================================

const login = new Login
const register = new Register
const home = new Home
// const formCreateNote= home.container.querySelector('.formcreateNote')

login.onLinkClick(function () {
    document.body.removeChild(login.container)
    document.body.append(register.container)
})

//para recoger los datos que ponemos en los inputs usamos .onsubmit
login.onFormSubmit(function (email,password) {
    
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
            // home.container.removeChild(formCreateNote)

        })
    } catch (error) {
        alert(error.message)
    }
})

home.onLogout = function(){
    delete sessionStorage.token

    document.body.removeChild(home.container)
    document.body.append(login.container)
}


home.onFormCreateNote = function(textarea) {
    try {
        createNote(sessionStorage.token, textarea, error => {
            if (error) {
                alert(error.message)
                
                return
            }
            renderHome()
        })

    } catch (error) {
        alert(error.message)
    }
}
    

    // createNoteForm.classList.add('off')
    // list__Notes.classList.remove('off')
    // btn__pluss.classList.remove('off')
    //// poner el textarea de la newNote en Blanco



home.onDeleteNoteClick = function(noteId){//method overriding
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
                    home.renderNotes(notes)
                })
            }catch(error){
                alert(error.message)
            }
        })
    }catch(error){
        alert(error.message)
    }
}

home.onUpdateNote = function(noteId,text){
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


register.onLinkClick(function () {
    document.body.removeChild(register.container)
    document.body.append(login.container)
})

register.onFormSubmit(function (name,email,password) {
    // try catch 
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

function renderHome(){
    try {
        retrieveUser(sessionStorage.token, function (error, user) {
            if (error) {
                alert(error.message)
                return
            }
            home.setName(user.name)
            
            renderList(function(){
                document.body.append(home.container)
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
            home.renderNotes(notes)

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
    document.body.append(login.container)

// home.createNoteForm.onsubmit = function (event) {
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
//                 renderNotes()
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
//     formProfile.classList.add('off')
//     formDesign.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
//     nav.classList.remove('mostrar')
// }

// btnBack.onclick = function () {
//     btnMenu.classList.remove('off')
//     btn_close.classList.add('off')
//     formProfile.classList.add('off')
//     formDesign.classList.add('off')
//     list__Notes.classList.remove('off')
//     btn__pluss.classList.remove('off')
//     nav.classList.remove('mostrar')
// }

// updatePassword.onsubmit = function (event) {
//     event.preventDefault()

//     const oldPassword = updatePassword.oldPassword.value
//     const newPassword = updatePassword.newPassword.value
//     const repeatNewPassword = updatePassword.repeatNewPassword.value

//     try {
//         updateUserPassword(sessionStorage.token, oldPassword, newPassword, repeatNewPassword, function (error) {
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
//     formProfile.classList.add('off')
//     formDesign.classList.remove('off')
// }


// profile.onclick = function () {
//     btn_close.classList.add('off')
//     btnMenu.classList.remove('off')
//     list__Notes.classList.add('off')
//     nav.classList.toggle('mostrar')
//     btn__pluss.classList.add('off')
//     createNoteForm.classList.add('off')
//     formDesign.classList.add('off')
//     formProfile.classList.remove('off')
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




