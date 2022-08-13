var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav-home');

btnMenu.addEventListener('click', function () {
    nav.classList.toggle('mostrar');
});


const loginPage = document.querySelector('.login_page')
const registerPage = document.querySelector('.register_page')
const homePage = document.querySelector('.home_page')

const btn_login = homePage.querySelector('.btn__login')
btn_login.onclick=function(event){
    event.preventDefault()

    homePage.classList.add('off')
    loginPage.classList.remove('off')
}

const registerLink = loginPage.querySelector('.link-register')
registerLink.onclick=function(event){
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink=registerPage.querySelector('.link-login')
loginLink.onclick=function(event){
event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.remove('off')
}


const link_home_login=loginPage.querySelector('.linkhomeLogin')
link_home_login.onclick=function(event){
event.preventDefault()

    loginPage.classList.add('off')
    homePage.classList.remove('off')
}

const link_home_register=registerPage.querySelector('.linkhomeRegister')
link_home_register.onclick=function(event){
event.preventDefault()

    registerPage.classList.add('off')
    homePage.classList.remove('off')
}

const loginForm = loginPage.querySelector(".form")
loginForm.onsubmit = function(event){
    event.preventDefault()

    const email=loginForm.email.value
    const password=loginForm.password.value

    try {
        authenticateUser(email,password,function(error,token){
            if(error){
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