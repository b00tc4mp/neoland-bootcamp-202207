const loginPage =document.querySelector('.login-page')
const registerPage = document.querySelector ('.register-page')
const homePage = document.querySelector ('.home-page')

const registerLink = loginPage.querySelector ('.register')
registerLink.onclick =function(event){
    event.preventDefault()

    //loginPage.classList.toggle ('off')
    loginPage.classList.add('off')
    registerPage.classList.remove('off')
}

const loginLink = registerPage.querySelector('.register')
loginLink.onclick = function(event){
    event.preventDefault()

    registerPage.classList.add('off')
    loginPage.classList.add('off')
}


const loginForm =loginPage.querySelector ('.container')
loginForm.onsubmit = function(event){
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    const person = users.find(function(person){
        return person.email === email && person.password === password
    })

    if (person){
        loginPage.classList.add ('off')

        const title = homePage.querySelector('.title')
        title.innerText = 'Hello, '+ person.name + '!'

        homePage.classList.remove ('off')
    }else
        alert('credentials error')
}

const registerForm = registerPage.querySelector('.container')
registerForm.onsubmit = function(event){
    event.preventDefault()

    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    const person = users.find (function(person){
        return person.email === email
})

if (person){

    alert ('user already exists')
}
    else if (name === ''){
    alert ('invalid name')
    }
else{
    users.push({
        name: name,
        email:email,
        password:password
    })
    registerPage.classList.add('off')
    const title = homePage.querySelector('.title')
        title.innerText = 'Hello, '+ name + '!'
    homePage.classList.remove ('off')
    }
}

