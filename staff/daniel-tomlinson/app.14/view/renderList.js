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
