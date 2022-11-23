const API_URL = process.env.REACT_APP_API_URL

function retrieveUser(token, callback) {
  // esta logica se trata de recuperar el usuario y su informacion completa!
  if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank");

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
        favorite:data.favorites
        
      };

      callback(null, user);
    }
  };
  // request

  xhr.open("GET", `${API_URL}/users`);

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.send();
}

export default retrieveUser