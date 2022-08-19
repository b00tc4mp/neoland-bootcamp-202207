function updateNote(token, noteId, text, callback) {
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

  if (typeof noteId !== "string")
    throw new TypeError("note id is not a string");
  if (noteId.trim().length === 0) throw new Error("note id is empty or blank");

  if (typeof text !== "string") throw new TypeError("text is not a string");

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  //response

  xhr.onload = function () {
    const status = xhr.status;

    if (status >= 500) callback(new Error(`server error(${status})`));
    else if (status >= 400) callback(new Error(`client error(${status})`));
    else if (status === 200) {
      const userJSON = xhr.responseText;
      const userObject = JSON.parse(userJSON);

      const notes = userObject.notes ? userObject.notes : [];

      const note = notes.find((note) => note.id === noteId);

      if (note === undefined) {
        callback(new Error(`note with id ${noteId} cannot be found`));
      } else {
        note.text = text;

        const xhr2 = new XMLHttpRequest();

        xhr2.onload = function () {
          const status = xhr.status;

          if (status >= 500) callback(new Error(`server error(${status})`));
          else if (status >= 400)
            callback(new Error(`client error(${status})`));
          else if (status === 200) callback(null);
        };

        xhr2.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users");

        xhr2.setRequestHeader("Authorization", `Bearer ${token}`);
        xhr2.setRequestHeader("Content-type", "application/json");

        xhr2.send(JSON.stringify({ notes }));
      }
    }
  };

  // XMLHttprequest

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}

export default updateNote;
