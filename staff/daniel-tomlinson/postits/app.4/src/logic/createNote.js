// ============ NEW ================ //

function createNote(token, callback) {
  //TODO validate inputs

  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

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

      console.log(notes);

      const newNote = {
        id: "note- " + Date.now(),
        text: "",
      };

      notes.push(newNote);

      const newNotesJSON = JSON.stringify({ notes });

      const xhr2 = new XMLHttpRequest();

      xhr2.onload = function () {
        const status = xhr.status;

        if (status >= 500) callback(new Error(`server error(${status})`));
        else if (status >= 400) callback(new Error(`client error(${status})`));
        else if (status === 200) callback(null);
      };

      xhr2.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users");

      xhr2.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr2.setRequestHeader("Content-type", "application/json");

      xhr2.send(newNotesJSON);
    }
  };

  // XMLHttprequest

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}

export default createNote;
