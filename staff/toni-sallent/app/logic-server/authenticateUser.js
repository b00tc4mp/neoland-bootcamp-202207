function authenticateUser(email, password, callback) {
  const xhr = new XMLHttpRequest();

  xhr.onload = function () {
    const status = xhr.status;

    if (status >= 500) callback(new Error(`server error (${status})`));
    else if (status >= 400)
      callback(new Error(`wrong credentials (${status})`));
    else if (status >= 200) {
      const tokenJSON = xhr.responseText;
      const tokenObject = JSON.parse(tokenJSON);
      const token = tokenObject.token;
      callback(null, token);
    }
  };
  xhr.open("POST", "https://b00tc4mp.herokuapp.com/api/v2/users/auth");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(`{"username": "${email}", "password": "${password}"}`);
}

authenticateUser("tonisallent1@gmail.com", "123123123", console.log);
