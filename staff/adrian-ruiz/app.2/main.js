const loginPage = document.querySelector('.loginPage')
const registerPage = document.querySelector('.registerPage')
const homePage = document.querySelector('.homePage')

const loginForm = document.querySelector('.loginForm')
const registerForm = document.querySelector('.registerForm')

const registerLink = document.querySelector('.registerLink')
const loginLink = document.querySelector('.loginLink')

// Valor requerido para la contraseña, construido con expresiones regulares
const requiredPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
const lowerCaseLettersRegex = /[a-z]/g
const upperCaseLettersRegex = /[A-Z]/g
const numbersRegex = /[0-9]/g
const symbolsRegex = /[$-/:-?{-~!"^_`\[\]]/


registerLink.addEventListener("click", function(event){
    event.preventDefault()

    loginPage.classList.add('off')
    registerPage.classList.remove('off')
})

loginLink.addEventListener("click", function(event){
    event.preventDefault()
    
    loginPage.classList.remove('off')
    registerPage.classList.add('off')
    

})

loginForm.addEventListener('submit', function(event){
    event.preventDefault()
    
    const inputEmail = loginForm.email.value
    const inputPassword = loginForm.password.value
    authenticateUser(inputEmail, inputPassword, function(error){
        
        if(error){
            alert(error.message)
            return
        }

        retrieveUser(inputEmail, function(error,user){

            if(error){
                alert(error.message)
                return
            }
            
            const headerTitle = document.getElementById('headerTitle')
            headerTitle.textContent = 'Hello, ' + user.name
            homePage.classList.remove('off')
            loginPage.classList.add('off')
        })
        
    }) 
})

registerForm.addEventListener('submit', function(event){
    event.preventDefault()
    
    const inputName = registerForm.name.value
    const inputEmail = registerForm.email.value
    const inputPassword = registerForm.password.value
    if(inputName && inputEmail && inputPassword){
        const user = users.find(function (user) {
            return user.email === inputEmail
        })

        if(user){
            alert('ERROR: User already exists')
        }else if(inputPassword.match(requiredPass)){
            users.push(
                {
                    user: inputName,
                    email: inputEmail,
                    password: inputPassword
                }
            )
            loginPage.classList.remove('off')
            registerPage.classList.add('off')
        }else if(!(inputPassword.match(requiredPass))){
            alert('La contraseña no cumple los requisitos: - Entre 8 y 15 caracteres \nMínimo 1 letra mayúscula\nMínimo 1 letra minúscula\nMínimo 1 carácter especial')
        }
    }else{
        alert("No has introducido todos los datos correctamente")
    }
          
})
// UTILIZAR ON CHANGE PARA DETECTAR SI LA PASSWORD TIENE MAYUS, NUMEROS, CARACTERES...
// UTILIZO INPUT PORQUE ASI LO CAPTA "EN TIEMPO REAL"
const pLowerCase = document.getElementById('lowerCase')
const pUpperCase = document.getElementById('upperCase')
const pNumber = document.getElementById('number')
const pSymbols = document.getElementById('symbols')
const pLength = document.getElementById('length')

registerForm.password.addEventListener("input", checkPassword)
    const span = document.querySelector('.passSpan')
        function checkPassword(){
            if(registerForm.password.value.match(requiredPass)){
                span.classList.add('off')
                console.log('La contraseña es correcta') // ESTO HABRÁ QUE ELIMINARLO
            }else{
                span.classList.remove('off')
            }
            

            // Comprobar minusculas
            if(registerForm.password.value.match(lowerCaseLettersRegex)){
                pLowerCase.classList.add('off')
            }else{
                pLowerCase.classList.remove('off')
            }

            // Comprobar mayusculas
            if(registerForm.password.value.match(upperCaseLettersRegex)){
                pUpperCase.classList.add('off')
            }else{
                pUpperCase.classList.remove('off')
            }

            // Comprobar numeros
            if(registerForm.password.value.match(numbersRegex)){
                pNumber.classList.add('off')
            }else{
                pNumber.classList.remove('off')
            }

            // Compruebo la longitud
            if(registerForm.password.value.length >= 8 && registerForm.password.value.length <= 15){
                pLength.classList.add('off')
            }else{
                pLength.classList.remove('off')
            }

            // Comprobar simbolos
            if(registerForm.password.value.match(symbolsRegex)){
                pSymbols.classList.add('off')
            }else{
                pSymbols.classList.remove('off')
            }

        }  

// Funcion activar rotación DIVS menú
function myFunction(x) {
    x.classList.toggle("change");
  }






