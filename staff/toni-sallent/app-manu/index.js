const loginPage = document.querySelector(".login-page");
const registerPage = document.querySelector(".register-page");
const homePage = document.querySelector(".home-page");

// temp (for ui design purposes)
// loginPage.classList.add('off')
// homePage.classList.remove('off')

const registerLink = loginPage.querySelector(".anchor");
registerLink.onclick = function (event) {
  event.preventDefault();

  loginPage.classList.add("off");
  registerPage.classList.remove("off");
};

const loginLink = registerPage.querySelector(".anchor");
loginLink.onclick = function (event) {
  event.preventDefault();

  registerPage.classList.add("off");
  loginPage.classList.remove("off");
};

const loginForm = loginPage.querySelector(".form");
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
      window.password = password;
      window.token = token;

      try {
        retrieveUser(window.token, function (error, user) {
          if (error) {
            alert(error.message);

            return;
          }

          loginPage.classList.add("off");

          const title = homePage.querySelector(".title");

          title.innerText = "Hello, " + user.name + "!";

          refreshList();

          homePage.classList.remove("off");
        });
      } catch (error) {
        alert(error.message);
      }
    });
  } catch (error) {
    alert(error.message);
  }
};

const registerForm = registerPage.querySelector(".form");
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

      registerPage.classList.add("off");
      loginPage.classList.remove("off");
    });
  } catch (error) {
    alert(error.message);
  }
};

const plusButton = homePage.querySelector(".add-button");
plusButton.onclick = function () {
  try {
    createNote(window.token, (error) => {
      if (error) {
        alert(error.message);

        return;
      }

      refreshList();
    });
  } catch (error) {
    alert(error.message);
  }
};

function refreshList() {
  try {
    retrieveNotes(window.token, function (error, notes) {
      if (error) {
        alert(error.message);

        return;
      }

      const list = homePage.querySelector(".list");
      list.innerHTML = "";

      notes.forEach((note) => {
        const item = document.createElement("li");
        item.classList.add("list__item");

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("list__item-delete-button");
        deleteButton.innerText = "x";
        deleteButton.onclick = function () {
          try {
            deleteNote(window.token, note.id, (error) => {
              if (error) {
                alert(error.message);

                return;
              }

              refreshList();
            });
          } catch (error) {
            alert(error.message);
          }
        };

        const text = document.createElement("p");
        text.contentEditable = true;
        text.classList.add("list__item-text");
        text.onkeyup = function () {
          if (window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId);

          window.updateNoteTimeoutId = setTimeout(() => {
            try {
              updateNote(window.token, note.id, text.innerText, (error) => {
                if (error) {
                  alert(error.message);

                  return;
                }
              });
            } catch (error) {
              alert(error.message);
            }
          }, 1000);
        };
        text.innerText = note.text;

        item.append(deleteButton, text);

        list.append(item);
      });
    });
  } catch (error) {
    alert(error.message);
  }
}
const menu = homePage.querySelector(".menu");

const menuButton = homePage.querySelector(".menu-button");
menuButton.onclick = function (event) {
  menu.classList.remove("off");
};

const updateEmailForm = menu.querySelector(".update-password-form");

updateEmailForm.onsubmit = function (event) {
  event.preventDefault();

  const oldEmail = updateEmailForm.oldemail.value;
  const newEmail = updateEmailForm.newemail.value;

  updateUserMail(window.token, oldEmail, newEmail, (error) => {
    try {
      if (error) {
        alert(error.message);

        return;
      }
    } catch (error) {
      alert(error.message);
    }

    alert("email changed succesfully");

    menu.classList.add("off");
  });
};
