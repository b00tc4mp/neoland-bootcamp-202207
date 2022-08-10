function retrieveUser(token, callback) {
  // esta logica se trata de recuperar el usuario y su informacion completa!
  if (typeof token !== "string") throw new TypeError("email is not a string");
  if (token.trim().length === 0) throw new Error("email is empty or blank");

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();
  // response
  xhr.onload = function () {
    const status = xhr.status;

    if (status >= 500) callback(new Error(`server error(${status})`));
    
    else if (status >= 400) callback(new Error(`client error(${status})`));
    
    else if (status === 200) {
      const json = xhr.responseText;

      const data = JSON.parse(json);

      const user = {
        name: data.name,
        email: data.username,
      };

      callback(null, user);
    }
  };
  // request

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.setRequestHeader("Authorization", `bearer ${token}`);

  xhr.send();
}
