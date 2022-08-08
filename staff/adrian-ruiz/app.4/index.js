const loginPage = document.querySelector('.loginPage')
const registerPage = document.querySelector('.registerPage')
const homePage = document.querySelector('.homePage')

const loginForm = document.querySelector('.loginForm')
const registerForm = document.querySelector('.registerForm')

const registerLink = document.querySelector('.registerLink')
const loginLink = document.querySelector('.loginLink')




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

    try{
        authenticateUser(inputEmail, inputPassword, function(error){
            
            if(error){
                
                alert(error.message)
                return
            }
    
            try{
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
            }catch(error){
                alert(error.message)
            }
        }) 
    }catch(error){
        alert(error.message)
    }  
})

registerForm.addEventListener('submit', function(event){
    
    event.preventDefault()
    
    const inputName = registerForm.name.value
    const inputEmail = registerForm.email.value
    const inputPassword = registerForm.password.value

    
        try{
            registerUser(inputName, inputEmail, inputPassword, function(error){
    
                if(error){
                    alert(error.message)
                    return
                }
    
                loginPage.classList.remove('off')
                registerPage.classList.add('off')
            })
        }catch(error){
            alert(error)
            
        }  

    registerForm.reset()
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


// Funcion activar rotación DIVS menú (Lanzamos funcion desde HTML)
function myFunction(x) {
    x.classList.toggle("change");
  }





