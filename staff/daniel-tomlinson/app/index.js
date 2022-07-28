const loginPage = document.querySelector(".login-page");
const registerPage = document.querySelector(".register-page");
const homePage = document.querySelector(".home-page");

// let _user;

let _token;

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
      _token = token;

      try {
        retrieveUser(_token, function (error, user) {
          if (error) {
            alert(error.message);

            return;
          }

          // _user = user;

          // try {
          //   retrieveNotes(user.id, function (error, notes) {
          //     if (error) {
          //       alert(error.message);

          //       return;
          //     }

          loginPage.classList.add("off");

          const title = homePage.querySelector(".title");

          title.innerText = "Hello " + user.name + "!";

          refreshList();

          homePage.classList.remove("off");

          const textareas = document.getElementsByClassName("list__item-text");

          for (let i = 0; i < textareas.length; i++) {
            textareas[i].style.height = "1px";
            textareas[i].style.height = textareas[i].scrollHeight + "px";
          }

          // new code for scroller

          // let scrollList = homePage.querySelector(".main-page-content");
          // debugger;
          // scrollList.scrollTo = 0 + "px";
          // scrollList.scrollHeight;

          //new code for scroller end

          // const list = homePage.querySelector(".list");

          // list.innerHTML = "";

          // notes.forEach((note) => {
          //   const item = document.createElement("li");
          //   item.classList.add("list__item");

          //   const text = document.createElement("textarea");
          //   text.classList.add("list__item-text");

          //   text.onkeyup = function () {
          //     text.style.height = "1px";
          //     text.style.height = text.scrollHeight + "px";

          //     try {
          //       updateNote(_user.id, note.id, text.value, (error) => {
          //         if (error) {
          //           alert(error.message);

          //           return;
          //         }
          // });
          //         } catch (error) {
          //           alert(error.message);
          //         }
          //       };

          //       text.value = note.text;

          //       item.append(text);

          //       list.append(item);
          //     });
          //     homePage.classList.remove("off");

          //     const textareas =
          //       document.getElementsByClassName("list__item-text");

          //     for (let i = 0; i < textareas.length; i++) {
          //       textareas[i].style.height = "1px";
          //       textareas[i].style.height = textareas[i].scrollHeight + "px";
          //     }

          //     // new code for scroller

          //     let scrollList = homePage.querySelector(".main-page-content");
          //     debugger;
          //     scrollList.scrollTo = 0 + "px";
          //     // scrollList.scrollHeight;

          //     //new code for scroller end
          //   });
          // } catch (error) {
          //   alert(error.message);
          // }
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
    createNote(_token, (error) => {
      if (error) {
        alert(error.message);

        return;
      }

      refreshList();

      // try {
      //   retrieveNotes(_user.id, function (error, notes) {
      //     if (error) {
      //       alert(error.message);

      //       return;
      //     }

      //     const list = homePage.querySelector(".list");
      //     list.innerHTML = "";

      //     notes.forEach((note) => {
      //       const item = document.createElement("li");
      //       item.classList.add("list__item");

      //       const text = document.createElement("textarea");
      //       text.classList.add("list__item-text");
      //       text.onkeyup = function () {
      //         text.style.height = "1px";
      //         text.style.height = text.scrollHeight + "px";

      //         try {
      //           updateNote(_user.id, note.id, text.value, (error) => {
      //             if (error) {
      //               alert(error.message);

      //               return;
      //             }
      //           });
      //         } catch (error) {
      //           alert(error.message);
      //         }
      //       };

      //       text.value = note.text;

      //       item.append(text);

      //       list.append(item);
      //     });
      //   });
      // } catch (error) {
      //   alert(error.message);
      // }
    });
  } catch (error) {
    alert(error.message);
  }
};

function refreshList() {
  try {
    retrieveNotes(_token, function (error, notes) {
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
            deleteNote(_token, note.id, (error) => {
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

        /*         //repeated from authenticate//
        const textareas = document.getElementsByClassName("list__item-text");

        for (let i = 0; i < textareas.length; i++) {
          textareas[i].style.height = "1px";
          textareas[i].style.height = textareas[i].scrollHeight + "px";
        }
        // ======= // */

        const text = document.createElement("textarea");
        // text.contentEditable = "true";
        text.classList.add("list__item-text");
        text.onkeyup = function () {
          text.style.height = "1px";
          text.style.height = text.scrollHeight + "px";

          if (item.height > 250)
            item.style.padding = text.scrollHeight - text.height + "px";

          /*           if (text.style.height > 250) 
          text.style.padding-top = text.scrollHeight - 250; */

          try {
            updateNote(_token, note.id, text.value, (error) => {
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

        item.append(deleteButton, text);

        list.append(item);
      });
    });
  } catch (error) {
    alert(error.message);
  }
}
