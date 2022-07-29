function updateUserEmail(token, oldEmail, newEmail, callback) {
  if (typeof newEmail !== "string")
    throw new TypeError("password is not a string");
  if (newEmail.trim().length === 0)
    throw new Error("password is empty or blank");
  if (newEmail.length < 8)
    throw new Error("password length is less than 8 characters");

  //if (oldPassword !== window.password) throw new Error("Wrong password");

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  // response

  xhr.onload = function () {
    const status = xhr.status;

    if (status >= 500) callback(new Error(`server error (${status})`));
    else if (status >= 400) callback(new Error(`client error (${status})`));
    else if (status === 200) {
      const json = xhr.responseText;

      const data = JSON.parse(json);

      const currentEmail = data.username;

      if (currentEmail !== oldEmail) {
        callback(new Error("Wrong email"));

        return;
      }

      currentEmail = newEmail;

      const xhr2 = new XMLHttpRequest();

      // response

      xhr2.onload = function () {
        const status = xhr2.status;

        if (status >= 500) callback(new Error(`server error (${status})`));
        else if (status >= 400) callback(new Error(`client error (${status})`));
        else if (status === 204) callback(null);
      };

      // request

      xhr2.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users");

      xhr2.setRequestHeader("Authorization", `Bearer ${token}`);
      xhr2.setRequestHeader("Content-type", "application/json");

      //const json2 = JSON.stringify({ notes: notes })
      const json2 = JSON.stringify({ username: newEmail });

      xhr2.send(json2);
    }
  };

  // request

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}
