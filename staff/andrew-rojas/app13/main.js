registerLink.onclick = function (event) {
  event.preventDefault()

  loginPage.classList.add('off')
  registerPage.classList.remove('off')
}

loginLink.onclick = function (event) {
  event.preventDefault()

  registerPage.classList.add('off')
  loginPage.classList.remove('off')
}

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

  try {
    registerUser(name, email, password, function (error) {
      if (error) {
        alert(error.message)

        return
      }

        registerForm.reset()

        registerPage.classList.add('off')
        loginPage.classList.remove('off')
    })
  } catch (error) {
    alert(error.message)
  }
}

addButton.onclick = function () {
  try {
    createNote(sessionStorage.token, error => {
      if (error) {
        alert(error.message)

        return
      }

        renderList()
    })
  } catch (error) {
    alert(error.message)
  }
}

if (sessionStorage.token)
  renderHome()

logoutButton.onclick = function() {
  delete sessionStorage.token

  closeButton.click()

  settingsPanel.classList.add('off')
  listPanel.classList.remove('off')
  
  homePage.classList.add('off')
  loginPage.classList.remove('off')
}

// menuButton.addEventListener('click', function() {   
// })
menuButton.onclick = function() {
  menuButton.classList.add('off')
  closeButton.classList.remove('off')
  menuPanel.classList.remove('off')
}

closeButton.onclick = function() {
  closeButton.classList.add('off')
  menuPanel.classList.add('off')
  menuButton.classList.remove('off')
}

settingsButton.onclick = function() {
  closeButton.click()

  listPanel.classList.add('off')
  addButton.classList.add('off')
  settingsPanel.classList.remove('off')
}