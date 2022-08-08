registerLink.onclick = function (event) {
  event.preventDefault();

  loginPage.classList.add("off");
  registerPage.classList.remove("off");
};

loginLink.onclick = function (event) {
  event.preventDefault();

  registerPage.classList.add("off");
  loginPage.classList.remove("off");
};

loginForm.onsubmit = function (event) {
  event.preventDefault();

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    authenticateUser(email, password, function (error, token) {
      if (error) {
        alert(error.message);

        return;
      }

      loginForm.reset();

      sessionStorage.token = token;

      renderHome();
    });
  } catch (error) {
    alert(error.message);
  }
};

registerForm.onsubmit = function (event) {
  event.preventDefault();

  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  try {
    registerUser(name, email, password, function (error) {
      if (error) {
        alert(error.message);

        return;
      }
      registerForm.reset();

      registerPage.classList.add("off");
      loginPage.classList.remove("off");
    });
  } catch (error) {
    alert(error.message);
  }
};

plusButton.onclick = function () {
  try {
    createNote(sessionStorage.token, (error) => {
      if (error) {
        alert(error.message);

        return;
      }

      renderNotes();
    });
  } catch (error) {
    alert(error.message);
  }
};

if (sessionStorage.token) renderHome();

logoutButton.onclick = function () {
  delete sessionStorage.token;

  homePage.classList.add("off");
  loginPage.classList.remove("off");
};

profileButton.onclick = function () {
  list.classList.add("off");
  profilePage.classList.remove("off");
};

const notesButton = document.querySelector(".notes-button");

notesButton.onclick = function () {
  list.classList.remove("off");
  profilePage.classList.add("off");
};

resetPasswordForm.onsubmit = function (event) {
  event.preventDefault();

  const oldPAssword = resetPasswordForm.oldPassword.value;
  const newPAssword = resetPasswordForm.newPassword.value;
  const retypeNewPassword = resetPasswordForm.retypeNewPassword.value;

  try {
    resetPassword(
      sessionStorage.token,
      oldPAssword,
      newPAssword,
      retypeNewPassword,
      function (error) {
        if (error) {
          alert(error.message);

          return;
        }
        // registerForm.reset();

        profilePage.classList.add("off");
        loginPage.classList.remove("off");
      }
    );
  } catch (error) {
    alert(error.message);
  }
};

menuButton.onclick = function () {
  title.classList.toggle("off");
  menuPanel.classList.toggle("off");
  // profilePage.classList.add("off");
};
