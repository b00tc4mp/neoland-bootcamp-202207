function renderHome() {
  try {
    retrieveUser(sessionStorage.token, function (error, user) {
      if (error) {
        alert(error.message);

        return;
      }

      loginPage.classList.add("off");

      const welcome = homePage.querySelector(".welcome");

      welcome.innerText = "Hello " + user.name + "!";

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
