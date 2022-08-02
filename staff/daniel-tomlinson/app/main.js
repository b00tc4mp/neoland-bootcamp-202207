const login = new Login();
const register = new Register();
const home = new Home();

login.onLinkClick(function () {
  document.body.removeChile(login.container);
  document.body.append(login.container);
});

register.onLinkClick(function () {
  document.body.removeChile(login.container);
  document.body.append(login.container);
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
      // renderHome();

      try {
        retrieveUser(sessionStorage.token, function (error, user) {
          if (error) {
            alert(error.message);

            return;
          }

          home.setName(user.name);

          try {
            retrieveNotes(sessionStorage.token, function (error, notes) {
              if (error) {
                alert(error.message);

                return;
              }

              home.renderList(notes);

              document.body.append(home.container);
            });
          } catch (error) {
            alert(error.message);
          }
        });
      } catch (error) {
        alert(error.message);
      }
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

      try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
          if (error) {
            alert(error.message);

            return;
          }
          home.renderList(notes);
        });
      } catch (error) {
        alert(error.message);
      }
    });
  } catch (error) {
    alert(error.message);
  }
};

register.onFormSubmit = function (name, email, password) {
  try {
    registerUser(name, email, password, function (error) {
      if (error) {
        alert(error.message);

        return;
      }
      register.reset();

      document.body.removeChile(register.container);
      document.body.append(login.container);
    });
  } catch (error) {
    alert(error.message);
  }
};

document.body.append(login.container);

// TO DO =============================================

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
