//hanburguesa transition

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
    // agregar btn close y borrar la hamburguesa
    btn_close.classList.remove("off")
    btnMenu.classList.add("off")
});
btn_close.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
    // agregar btn close y borrar la hamburguesa
    btn_close.classList.add("off")
    btnMenu.classList.remove("off")
});
// ===================================================================

//convertir de string a dom: creando un elemento temporal e insertarle el elemento html, luego igualo el elemtno al firtschild

//======================================================================


registerLink.onclick = function (event) {
    event.preventDefault()

    //Oculto la pagina del login agregandole off a la clase ".login_page"
    loginPage.classList.add('off')
    //Muestro la pagina del register removiendo off a la clase ".register_page"
    registerPage.classList.remove('off')
}



login.onclick = function (event) {
    //cancela la accion predeterminada del evento
    event.preventDefault()

    //Oculto la pagina del register agregandole off a la clase ".login_page"
    registerPage.classList.add('off')
    //Muestro la pagina del login removiendo off a la clase ".register_page"
    loginPage.classList.remove('off')
}

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




if (sessionStorage.token)
    renderHome()




//====================Menu NAV HAMBURGUER ===============================

link_home_login.onclick = function () {
    
    btnMenu.classList.remove('off')
    btn_close.classList.add('off')
    formProfile.classList.add('off')
    formDesign.classList.add('off')
    list__Notes.classList.remove('off')
    btn__pluss.classList.remove('off')
    nav.classList.remove('mostrar')
}

btnBack.onclick = function () {
    btnMenu.classList.remove('off')
    btn_close.classList.add('off')
    formProfile.classList.add('off')
    formDesign.classList.add('off')
    list__Notes.classList.remove('off')
    btn__pluss.classList.remove('off')
    nav.classList.remove('mostrar')
}

updatePassword.onsubmit = function (event) {
    event.preventDefault()

    const oldPassword = updatePassword.oldPassword.value
    const newPassword = updatePassword.newPassword.value
    const repeatNewPassword = updatePassword.repeatNewPassword.value

    try {
        updateUserPassword(sessionStorage.token, oldPassword, newPassword, repeatNewPassword, function (error) {
            if(error){
                alert(error.message)
                return
            }
        })
    } catch (error) {
        alert(error.message)
    }
    updatePassword.reset()
}

updateEmail.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const newEmail = updatePassword.newEmail.value

    try {
        updateUserPassword(sessionStorage.token, newEmail, function (error) {
            if(error){
                alert(error.message)
                return
            }
            const messageEmail = homePage.querySelector(".messageEmail")

            messageEmail.innerText =  email
        })
    } catch (error) {
        alert(error.message)
    }
    updateEmail.reset()
}

design.onclick = function () {
    btnMenu.classList.remove('off')
    btn_close.classList.toggle('off')
    list__Notes.classList.add('off')
    nav.classList.toggle('mostrar')
    btn__pluss.classList.add('off')
    createNoteForm.classList.add('off')
    formProfile.classList.add('off')
    formDesign.classList.remove('off')
}


profile.onclick = function () {
    btn_close.classList.add('off')
    btnMenu.classList.remove('off')
    list__Notes.classList.add('off')
    nav.classList.toggle('mostrar')
    btn__pluss.classList.add('off')
    createNoteForm.classList.add('off')
    formDesign.classList.add('off')
    formProfile.classList.remove('off')
}
logoutButton.onclick = function () {
    delete sessionStorage.token
    btn_close.classList.toggle('off')
    homePage.classList.add('off')
    nav.classList.remove('off')
    nav.classList.toggle('mostrar')
    loginPage.classList.remove('off')
}
//==================================================================================

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




