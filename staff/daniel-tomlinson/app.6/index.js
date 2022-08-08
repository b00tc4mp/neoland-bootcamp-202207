const loginPage = document.querySelector(".login-page");
const registerPage = document.querySelector(".register-page");
const homePage = document.querySelector(".home-page");

let _user;

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
    authenticateUser(email, password, function (error) {
      if (error) {
        alert(error.message);

        return;
      }

      try {
        retrieveUser(email, function (error, user) {
          if (error) {
            alert(error.message);

            return;
          }

          _user = user;

          try {
            retrieveNotes(user.id, function (error, notes) {
              if (error) {
                alert(error.message);

                return;
              }

              loginPage.classList.add("off");

              const title = homePage.querySelector(".title");

              title.innerText = "Hello " + user.name + "!";

              const list = homePage.querySelector(".list");
              list.innerHTML = "";

              // list.i;

              notes.forEach((note) => {
                const item = document.createElement("li");
                item.classList.add("list__item");

                const text = document.createElement("textarea");
                text.classList.add("list__item-text");
                text.onkeyup = function () {
                  text.style.height = "1px";
                  text.style.height = text.scrollHeight + "px";

                  try {
                    updateNote(_user.id, note.id, text.value, (error) => {
                      if (error) {
                        alert(error.message);

                        return;
                      }
                    });
                  } catch (error) {
                    alert(error.message);
                  }
                };

                text.value = note.text;

                item.append(text);

                list.append(item);
              });
              homePage.classList.remove("off");
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
};
/*   const user = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (user) {
    
  } else alert("credentials error");
}; */

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

const plusButton = homePage.querySelector(".transparent-button");
plusButton.onclick = function () {
  try {
    createNote(_user.id, (error) => {
      if (error) {
        alert(error.message);

        return;
      }

      try {
        retrieveNotes(_user.id, function (error, notes) {
          if (error) {
            alert(error.message);

            return;
          }

          const list = homePage.querySelector(".list");
          list.innerHTML = "";

          notes.forEach((note) => {
            const item = document.createElement("li");
            item.classList.add("list__item");

            const text = document.createElement("textarea");
            text.classList.add("list__item-text");
            text.onkeyup = function () {
              text.style.height = "1px";
              text.style.height = text.scrollHeight + "px";

              try {
                updateNote(_user.id, note.id, text.value, (error) => {
                  if (error) {
                    alert(error.message);

                    return;
                  }
                });
              } catch (error) {
                alert(error.message);
              }
            };

            text.value = note.text;

            item.append(text);

            list.append(item);
          });
        });
      } catch (error) {
        alert(error.message);
      }
    });
  } catch (error) {
    alert(error.message);
  }
};
