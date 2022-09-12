const API_URL = process.env.REACT_APP_API_URL;

function retrieveGameCode(pin, callback) {
  /*   if (typeof token !== "string") throw new TypeError("token is not a string");
  if (token.trim().length === 0) throw new Error("token is empty or blank"); */

  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");

  const xhr = new XMLHttpRequest();

  //response

  xhr.onload = function () {
    const status = xhr.status;

    if (status >= 500) callback(new Error(`server error(${status})`));
    else if (status >= 400) callback(new Error(`client error(${status})`));
    else if (status === 200) {
      // This needs updated from noptes to gamePIN
      const json = xhr.responseText;

      const data = JSON.parse(json);

      // data.reverse() here is probably unnecessary
      callback(null, data.reverse());
    }
  };

  // XMLHttprequest
  xhr.open("GET", `${API_URL}/gameCodes`);

  xhr.setRequestHeader("Content-type", "application/json");

  xhr.send(`{ "pin": "${pin}"}`);
}

export default retrieveGameCode;
