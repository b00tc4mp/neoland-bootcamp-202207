const login = new Login();
const register = new Register();
const home = new Home();

login.onLinkClick(function () {
  document.body.removeChild(login.container);
  document.body.append(register.container);
});

login.onFormSubmit(function (email, password) {
  try {
    authenticateUser(email, password, function (error, token) {
      if (error) {
        alert(error.message);

        return;
      }

      login.reset();

      sessionStorage.token = token;

      document.body.removeChild(login.container);
      renderHome();
    });
  } catch (error) {
    alert(error.message);
  }
});

home.onDeleteNoteClick = function (noteId) {
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

home.onUpdateNote = function (noteId, text) {
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

home.onLogout = function () {
  delete sessionStorage.token;

  document.body.removeChild(home.container);
  document.body.append(login.container);
};

home.onAddNote = function () {
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

home.onResetPasswordFormSubmit = function (
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
        /* this.resetPasswordReset();

        document.body.removeChild(home.container);
        document.body.append(login.container); */
      }
    );
  } catch (error) {
    alert(error.message);
  }
};

register.onLinkClick(function () {
  document.body.removeChild(register.container);
  document.body.append(login.container);
});

register.onFormSubmit(function (name, email, password) {
  try {
    registerUser(name, email, password, function (error) {
      if (error) {
        alert(error.message);

        return;
      }
      debugger;
      register.reset();

      document.body.removeChild(register.container);
      document.body.append(login.container);
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

      home.setName(user.name);

      renderList(function () {
        document.body.append(home.container);
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

      home.renderList(notes);

      if (callback) callback();
    });
  } catch (error) {
    alert(error.message);
  }
}

if (sessionStorage.token) renderHome();
else document.body.append(login.container);
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
