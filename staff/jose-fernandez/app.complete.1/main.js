//hanburguesa transition
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav-home');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
});

// function go(){
//     if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
//         document.form.submit(); 
//     } 
//     else{ 
//          alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
//     } 

// }

// ===================================================================
const loginPage = document.querySelector('.login_page')
const registerPage = document.querySelector('.register_page')
const homePage = document.querySelector('.home_page')

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

const loginForm = loginPage.querySelector('.form')

//para recoger los datos que ponemos en los inputs usamos .onsubmit
loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    //recogemos los datos de la base de datos
    const user = users.find(function (user) {
        return user.email === email
    })

    // if (user && user.password === password) {
    if (user) {
        loginPage.classList.add('off')

        const messageTitle = homePage.querySelector(".messageTitle")
        messageTitle.innerText = " Hello " + user.name + " !"
        homePage.classList.remove('off')
    } else
        alert('credentials error')
}

const registerForm = registerPage.querySelector('.form')
registerForm.onsubmit = function (event) {
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    //recogemos los datos de la base de datos
    const user = users.find(function (user) {
        return user.email === email
    })

    if (user) {
        alert('user already exists')
    } else {
        users.push({
            name: name,
            email: email,
            password: password
        })

        registerPage.classList.add("off")
        loginPage.classList.remove("off")
    }
}
