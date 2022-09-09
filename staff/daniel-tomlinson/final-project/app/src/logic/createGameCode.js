const API_URL = process.env.REACT_APP_API_URL;

function createGameCode(token, nameOfClass, pin, callback) {
  //TODO validate inputs
  debugger;
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
    else if (status === 201) callback(null);
  };

  xhr.open("POST", `${API_URL}/gameCodes`);

  xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  xhr.setRequestHeader("Content-type", "application/json");

  const json = JSON.stringify({ nameOfClass, pin });
  console.log(json);
  xhr.send(json);
}

export default createGameCode;
