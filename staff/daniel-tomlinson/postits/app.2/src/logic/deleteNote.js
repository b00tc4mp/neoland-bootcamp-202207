// ============ NEW ================ //

/**
 * Deletes a note from database
 *
 * @param {string} token The user session token
 * @param {string} noteId The note identifier
 * @param {function} callback The function expression that provides a result
 *
 * @throws {TypeError} On invalid inputs
 */

function deleteNote(token, noteId, callback) {
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

  if (typeof noteId !== "string")
    throw new TypeError("note id is not a string");
  if (noteId.trim().length === 0) throw new Error("note id is empty or blank");

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

      const notes = userObject.notes;

      console.log(notes);

      const noteIndex = notes.findIndex((note) => {
        return note.id === noteId;
      });
      if (noteIndex !== -1) {
        notes.splice([noteIndex], 1);

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
      } else callback(new Error(`note with id ${noteId} cannot be found`));
    }
  };

  // XMLHttprequest

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}

export default deleteNote;
