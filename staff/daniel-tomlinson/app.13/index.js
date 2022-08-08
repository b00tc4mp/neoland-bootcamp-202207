const loginPage = document.querySelector(".login-page");
const registerPage = document.querySelector(".register-page");
const homePage = document.querySelector(".home-page");

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

      loginForm.reset();

      sessionStorage.token = token;

      renderHome();
    });
  } catch (error) {
    alert(error.message);
  }
};
function renderHome() {
  try {
    retrieveUser(sessionStorage.token, function (error, user) {
      if (error) {
        alert(error.message);

        return;
      }

      loginPage.classList.add("off");

      const title = homePage.querySelector(".title");

      title.innerText = "Hello " + user.name + "!";

      renderNotes();

      homePage.classList.remove("off");

      const textareas = document.getElementsByClassName("list__item-text");

      for (let i = 0; i < textareas.length; i++) {
        textareas[i].style.height = "1px";
        textareas[i].style.height = textareas[i].scrollHeight + "px";
      }
    });
  } catch (error) {
    alert(error.message);
  }
}

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
      registerForm.reset();

      registerPage.classList.add("off");
      loginPage.classList.remove("off");
    });
  } catch (error) {
    alert(error.message);
  }
};

const plusButton = homePage.querySelector(".transparent-button");
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

function renderNotes() {
  try {
    retrieveNotes(sessionStorage.token, function (error, notes) {
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
            deleteNote(sessionStorage.token, note.id, (error) => {
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

        const text = document.createElement("textarea");
        // text.contentEditable = "true";
        text.classList.add("list__item-text");
        text.onkeyup = function () {
          text.style.height = "1px";
          text.style.height = text.scrollHeight + "px";

          if (item.height > 250)
            item.style.padding = text.scrollHeight - text.height + "px";

          if (window.updateNoteTimeoutId)
            clearTimeout(window.updateNoteTimeoutId);

          window.updateNotetimeoutId = setTimeout(() => {
            try {
              updateNote(sessionStorage.token, note.id, text.value, (error) => {
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
        text.value = note.text;

        item.append(deleteButton, text);

        list.append(item);
      });
    });
  } catch (error) {
    alert(error.message);
  }
}

if (sessionStorage.token) renderHome();
/* 
const logoutButton = document.querySelector(".logout-button");

logoutButton.onclick = function () {
  delete sessionStorage.token;

  homePage.classList.add("off");
  loginPage.classList.remove("off");
};

const profilePage = document.querySelector(".profile-page");

const profileButton = document.querySelector(".profile-button");

profileButton.onclick = function () {
  list.classList.add("off");
  profilePage.classList.remove("off");
};
 */
