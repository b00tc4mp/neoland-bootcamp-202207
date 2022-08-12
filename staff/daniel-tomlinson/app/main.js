const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const homePage = new HomePage();

loginPage.onLinkClick(function () {
  document.body.removeChild(loginPage.container);
  document.body.append(registerPage.container);
});

loginPage.onFormSubmit(function (email, password) {
  try {
    authenticateUser(email, password, function (error, token) {
      if (error) {
        alert(error.message);

        return;
      }

      loginPage.reset();

      sessionStorage.token = token;

      document.body.removeChild(loginPage.container);
      renderHome();
    });
  } catch (error) {
    alert(error.message);
  }
});

homePage.onDeleteNoteClick = function (noteId) {
  try {
    deleteNote(sessionStorage.token, noteId, (error) => {
      if (error) {
        alert(error.message);

        return;
      }
      renderList();
    });
  } catch (error) {
    alert(error.message);
  }
};

homePage.onUpdateNote = function (noteId, text) {
  try {
    updateNote(sessionStorage.token, noteId, text, (error) => {
      if (error) {
        alert(error.message);

        return;
      }
    });
  } catch (error) {
    alert(error.message);
  }
};

homePage.onLogoutButtonClick = function () {
  delete sessionStorage.token;

  document.body.removeChild(homePage.container);
  document.body.append(loginPage.container);
};

homePage.onAddNote = function () {
  try {
    createNote(sessionStorage.token, (error) => {
      if (error) {
        alert(error.message);

        return;
      }

      renderList();
    });
  } catch (error) {
    alert(error.message);
  }
};

homePage.onUpdatePassword = function (
  oldPassword,
  newPassword,
  retypeNewPassword
) {
  try {
    resetPassword(
      sessionStorage.token,
      oldPassword,
      newPassword,
      retypeNewPassword,
      function (error) {
        if (error) {
          alert(error.message);

          return;
        }

        alert("Password updated successfully");

        //In Manu's code the changes in view are addressed somewhere else:
        // I would move this to homePage
        // this.resetPasswordReset();
        // I would leave this here as it manages the main pages
        document.body.removeChild(homePage.container);
        document.body.append(loginPage.container);
        delete sessionStorage.token;
      }
    );
  } catch (error) {
    alert(error.message);
  }
};

registerPage.onLinkClick(function () {
  document.body.removeChild(register.container);
  document.body.append(login.container);
});

registerPage.onFormSubmit(function (name, email, password) {
  try {
    registerUser(name, email, password, function (error) {
      if (error) {
        alert(error.message);

        return;
      }
      debugger;
      registerPage.reset();

      document.body.removeChild(registerPage.container);
      document.body.append(loginPage.container);
    });
  } catch (error) {
    alert(error.message);
  }
});

// document.body.append(login.container);

function renderHome() {
  try {
    retrieveUser(sessionStorage.token, function (error, user) {
      if (error) {
        alert(error.message);

        return;
      }

      homePage.setName(user.name);

      renderList(function () {
        document.body.append(homePage.container);
      });
    });
  } catch (error) {
    alert(error.message);
  }
}

function renderList(callback) {
  try {
    retrieveNotes(sessionStorage.token, function (error, notes) {
      if (error) {
        alert(error.message);

        return;
      }

      homePage.listPanel.renderList(notes);

      if (callback) callback();
    });
  } catch (error) {
    alert(error.message);
  }
}

if (sessionStorage.token) renderHome();
else document.body.append(loginPage.container);
// render home finishes here
// TO DO =============================================

/* plusButton.onclick = function () {
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
 */
