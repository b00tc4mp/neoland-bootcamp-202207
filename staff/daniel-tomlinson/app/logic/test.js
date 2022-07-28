function createNotes(token, noteId, text, callback) {
  //TODO validate inputs

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

      const newNote = {
        noteId: noteId,
        text: text,
      };

      notes.push(newNote);

      const newNotesJSON = JSON.stringify(notes);

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

    // XMLHttprequest
  };

  // XMLHttprequest

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();

  // return xmlHttp.responseText;
}

createNotes(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmRmZmE2MWQ0NDE4ODAwMTdiMjNkMzciLCJpYXQiOjE2NTg5MjY2NDYsImV4cCI6MTY1ODkzMDI0Nn0.LeiUC7qRwqDMNYvnWLqv1eP0l8WvffFaPh0tjiYu2eE",
  "1010",
  "debugging in snippets",
  console.log
);
